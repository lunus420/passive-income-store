extends Node

# AI difficulty levels
enum Difficulty { EASY, MEDIUM, HARD, EXPERT, MASTER }

var current_difficulty: Difficulty = Difficulty.MEDIUM
var thinking_time: float = 1.0
var accuracy: float = 0.7  # Shot accuracy (0-1)
var power_control: float = 0.8  # Power control (0-1)
var strategic_depth: int = 1  # How many moves ahead to think

# AI state
var is_thinking: bool = false
var current_shot: Dictionary = {}
var best_shot: Dictionary = {}

# Shot evaluation
var possible_shots: Array = []

func _ready() -> void:
    set_difficulty(current_difficulty)

func set_difficulty(difficulty: Difficulty) -> void:
    current_difficulty = difficulty
    
    match difficulty:
        Difficulty.EASY:
            accuracy = 0.5
            power_control = 0.6
            strategic_depth = 0
            thinking_time = 0.5
        Difficulty.MEDIUM:
            accuracy = 0.7
            power_control = 0.8
            strategic_depth = 1
            thinking_time = 1.0
        Difficulty.HARD:
            accuracy = 0.85
            power_control = 0.9
            strategic_depth = 2
            thinking_time = 1.5
        Difficulty.EXPERT:
            accuracy = 0.92
            power_control = 0.95
            strategic_depth = 3
            thinking_time = 2.0
        Difficulty.MASTER:
            accuracy = 0.98
            power_control = 0.98
            strategic_depth = 4
            thinking_time = 2.5

func calculate_best_shot() -> Dictionary:
    is_thinking = true
    possible_shots = []
    
    # Get all possible shots
    var target_balls = GameManager.get_valid_targets()
    
    for target_num in target_balls:
        var shots = evaluate_shots_for_ball(target_num)
        possible_shots.append_array(shots)
    
    # Sort shots by score
    possible_shots.sort_custom(func(a, b): return a.score > b.score)
    
    # Select best shot based on difficulty
    if possible_shots.is_empty():
        return create_safety_shot()
    
    # Add some randomness based on difficulty
    var shot_index = 0
    var random_factor = randf()
    
    if current_difficulty == Difficulty.EASY and random_factor < 0.3:
        shot_index = randi() % min(3, possible_shots.size())
    elif current_difficulty == Difficulty.MEDIUM and random_factor < 0.15:
        shot_index = randi() % min(2, possible_shots.size())
    
    best_shot = possible_shots[shot_index]
    
    # Apply accuracy to the shot
    apply_accuracy_to_shot(best_shot)
    
    is_thinking = false
    return best_shot

func evaluate_shots_for_ball(target_num: int) -> Array:
    var shots = []
    var target_ball = get_ball_by_number(target_num)
    
    if not target_ball:
        return shots
    
    var cue_ball = PhysicsManager.cue_ball
    if not cue_ball:
        return shots
    
    # Calculate angle to pocket
    var pockets = PhysicsManager.pocket_positions
    var best_pocket_score = -1.0
    var best_pocket_pos = Vector3.ZERO
    
    for pocket_pos in pockets:
        var score = evaluate_pocket_shot(target_ball.global_position, pocket_pos)
        if score > best_pocket_score:
            best_pocket_score = score
            best_pocket_pos = pocket_pos
    
    if best_pocket_score > 0:
        # Calculate required shot angle
        var target_to_pocket = (best_pocket_pos - target_ball.global_position).normalized()
        var cue_to_target = (target_ball.global_position - cue_ball.global_position).normalized()
        var shot_angle = cue_to_target.angle_to(target_to_pocket)
        
        # Calculate required power
        var distance = cue_ball.global_position.distance_to(target_ball.global_position)
        var power = calculate_required_power(distance, shot_angle)
        
        shots.append({
            "target": target_num,
            "pocket": best_pocket_pos,
            "direction": cue_to_target,
            "power": power,
            "english": Vector2.ZERO,
            "score": best_pocket_score,
            "type": "pot"
        })
    
    return shots

func evaluate_pocket_shot(ball_pos: Vector3, pocket_pos: Vector3) -> float:
    var score = 0.0
    var distance = ball_pos.distance_to(pocket_pos)
    
    # Closer balls are easier to pot
    score += (1.0 - distance / 2.0) * 30
    
    # Check if path is clear
    if is_path_clear(ball_pos, pocket_pos):
        score += 20
    else:
        score -= 10
    
    # Check angle from cue ball
    var cue_ball = PhysicsManager.cue_ball
    if cue_ball:
        var cue_to_ball = (ball_pos - cue_ball.global_position).normalized()
        var ball_to_pocket = (pocket_pos - ball_pos).normalized()
        var angle = cue_to_ball.angle_to(ball_to_pocket)
        
        # Straight shots are easier
        score += (1.0 - angle / PI) * 25
    
    # Check if ball is near cushion (harder)
    if is_near_cushion(ball_pos):
        score -= 5
    
    return max(score, 0.0)

func is_path_clear(start: Vector3, end: Vector3) -> bool:
    # Check if any balls are in the path
    var direction = (end - start).normalized()
    var distance = start.distance_to(end)
    
    for ball_data in PhysicsManager.balls:
        var ball = ball_data.node
        if ball.global_position == start:
            continue
        
        # Check if ball is in the path
        var ball_to_line = (ball.global_position - start).cross(direction).length()
        if ball_to_line < PhysicsManager.BALL_RADIUS * 2:
            # Check if ball is between start and end
            var projection = (ball.global_position - start).dot(direction)
            if projection > 0 and projection < distance:
                return false
    
    return true

func is_near_cushion(pos: Vector3) -> bool:
    var table = PhysicsManager.table_dimensions
    var margin = 0.15
    
    return pos.x < -table.x/2 + margin or pos.x > table.x/2 - margin or
           pos.z < -table.z/2 + margin or pos.z > table.z/2 - margin

func calculate_required_power(distance: float, angle: float) -> float:
    # Base power based on distance
    var power = distance / 3.0
    
    # Adjust for angle (cut shots need more power)
    power *= (1.0 + angle * 0.5)
    
    return clamp(power, 0.2, 1.0)

func apply_accuracy_to_shot(shot: Dictionary) -> void:
    # Add random error based on accuracy
    var error_amount = (1.0 - accuracy) * 0.2  # Max 0.2 radians error
    
    var angle_error = (randf() - 0.5) * error_amount
    var power_error = (randf() - 0.5) * (1.0 - power_control) * 0.3
    
    # Apply angle error
    var original_dir = shot.direction
    var up = Vector3.UP
    var right = original_dir.cross(up).normalized()
    shot.direction = (original_dir + right * angle_error).normalized()
    
    # Apply power error
    shot.power = clamp(shot.power + power_error, 0.1, 1.0)

func create_safety_shot() -> Dictionary:
    # Create a defensive shot when no good pot is available
    var cue_ball = PhysicsManager.cue_ball
    if not cue_ball:
        return {}
    
    # Aim to hide cue ball behind a ball
    var target_balls = GameManager.get_valid_targets()
    var best_hiding_spot = Vector3.ZERO
    var best_score = -1.0
    
    for target_num in target_balls:
        var target_ball = get_ball_by_number(target_num)
        if not target_ball:
            continue
        
        # Calculate position behind target ball
        var cue_to_target = (target_ball.global_position - cue_ball.global_position).normalized()
        var hiding_spot = target_ball.global_position + cue_to_target * (PhysicsManager.BALL_RADIUS * 3)
        
        # Check if hiding spot is on table
        if is_on_table(hiding_spot):
            var score = evaluate_safety_position(hiding_spot)
            if score > best_score:
                best_score = score
                best_hiding_spot = hiding_spot
    
    if best_score < 0:
        # Just shoot randomly
        var random_angle = randf() * PI * 2
        var random_dir = Vector3(cos(random_angle), 0, sin(random_angle))
        return {
            "direction": random_dir,
            "power": 0.3,
            "english": Vector2.ZERO,
            "score": 0.1,
            "type": "safety"
        }
    
    return {
        "direction": (best_hiding_spot - cue_ball.global_position).normalized(),
        "power": 0.4,
        "english": Vector2.ZERO,
        "score": best_score,
        "type": "safety"
    }

func evaluate_safety_position(pos: Vector3) -> float:
    var score = 0.0
    
    # Prefer positions near cushions
    if is_near_cushion(pos):
        score += 10
    
    # Prefer positions far from opponent's target balls
    var opponent_targets = get_opponent_targets()
    for target_num in opponent_targets:
        var target_ball = get_ball_by_number(target_num)
        if target_ball:
            var distance = pos.distance_to(target_ball.global_position)
            score += distance * 5
    
    return score

func is_on_table(pos: Vector3) -> bool:
    var table = PhysicsManager.table_dimensions
    var margin = PhysicsManager.BALL_RADIUS * 2
    
    return pos.x > -table.x/2 + margin and pos.x < table.x/2 - margin and
           pos.z > -table.z/2 + margin and pos.z < table.z/2 - margin

func get_ball_by_number(number: int) -> Node3D:
    for ball_data in PhysicsManager.balls:
        if ball_data.number == number:
            return ball_data.node
    return null

func get_opponent_targets() -> Array:
    var opponent = (GameManager.current_player + 1) % 2
    return GameManager.get_valid_targets()  # Simplified

func execute_shot() -> void:
    if best_shot.is_empty():
        best_shot = calculate_best_shot()
    
    if best_shot.is_empty():
        return
    
    # Apply the shot
    PhysicsManager.apply_shot(
        best_shot.power,
        best_shot.direction,
        best_shot.get("english", Vector2.ZERO)
    )
    
    AudioManager.play_cue_hit(best_shot.power)
    GameManager.current_state = GameManager.GameState.SHOOTING

func think_and_shoot() -> void:
    # Start thinking process
    await get_tree().create_timer(thinking_time).timeout
    calculate_best_shot()
    execute_shot()
