extends Node

# Game State Management
enum GameMode { EIGHT_BALL, NINE_BALL, SNOOKER, STRAIGHT_POOL, PRACTICE }
enum GameState { MENU, AIMING, SHOOTING, BALLS_MOVING, TURN_CHANGE, GAME_OVER }
enum PlayerType { HUMAN, AI, ONLINE }

var current_game_mode: GameMode = GameMode.EIGHT_BALL
var current_state: GameState = GameState.MENU
var current_player: int = 0  # 0 or 1
var players: Array = []  # Array of PlayerType
var player_scores: Array = [0, 0]
var balls_potted: Array = [[], []]  # Balls potted by each player
var is_game_active: bool = false
var turn_timer: float = 0.0
var max_turn_time: float = 60.0

# Game Rules
var eight_ball_solids: Array = [1, 2, 3, 4, 5, 6, 7]
var eight_ball_stripes: Array = [9, 10, 11, 12, 13, 14, 15]
var eight_ball_black: int = 8
var nine_ball_sequence: Array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Player Assignment (8-ball)
var player_groups: Array = [null, null]  # 'solids', 'stripes', or null

# AI Settings
var ai_difficulty: int = 2  # 1-5 scale
var ai_thinking_time: float = 1.0

# Camera
var camera_mode: int = 0  # 0: Follow cue, 1: Top view, 2: Free cam

# Settings
var master_volume: float = 1.0
var music_volume: float = 0.7
var sfx_volume: float = 0.8
var graphics_quality: int = 2  # 0: Low, 1: Medium, 2: High
var vsync_enabled: bool = true

# Signals
signal game_started()
signal game_ended(winner: int)
signal turn_changed(player: int)
signal ball_potted(ball_number: int, player: int)
signal foul_committed(player: int, foul_type: String)
signal shot_power_changed(power: float)

func _ready() -> void:
    initialize_game()

func initialize_game() -> void:
    players = [PlayerType.HUMAN, PlayerType.AI]
    player_scores = [0, 0]
    balls_potted = [[], []]
    player_groups = [null, null]
    current_player = 0
    current_state = GameState.MENU

func start_game(mode: GameMode) -> void:
    current_game_mode = mode
    is_game_active = true
    current_state = GameState.AIMING
    game_started.emit()
    print("Game started: ", GameMode.keys()[mode])

func end_game(winner: int) -> void:
    is_game_active = false
    current_state = GameState.GAME_OVER
    game_ended.emit(winner)
    print("Game ended. Winner: Player ", winner + 1)

func switch_turn() -> void:
    current_player = (current_player + 1) % 2
    current_state = GameState.AIMING
    turn_changed.emit(current_player)
    turn_timer = max_turn_time
    
    # If AI turn, trigger AI shot
    if players[current_player] == PlayerType.AI:
        await get_tree().create_timer(ai_thinking_time).timeout
        trigger_ai_shot()

func trigger_ai_shot() -> void:
    # This will be implemented in AI system
    pass

func process_turn(delta: float) -> void:
    if current_state == GameState.AIMING and players[current_player] == PlayerType.HUMAN:
        turn_timer -= delta
        if turn_timer <= 0:
            foul_committed.emit(current_player, "time_exceeded")
            switch_turn()

func record_pot(ball_number: int) -> void:
    balls_potted[current_player].append(ball_number)
    ball_potted.emit(ball_number, current_player)
    
    # Update score based on game mode
    match current_game_mode:
        GameMode.STRAIGHT_POOL:
            player_scores[current_player] += 1

func check_foul() -> bool:
    # Check for various fouls
    # This will be expanded with physics integration
    return false

func check_win_condition() -> int:
    # Returns -1 if no winner, 0 or 1 for winning player
    match current_game_mode:
        GameMode.EIGHT_BALL:
            return check_eight_ball_win()
        GameMode.NINE_BALL:
            return check_nine_ball_win()
        GameMode.SNOOKER:
            return check_snooker_win()
        GameMode.STRAIGHT_POOL:
            return check_straight_pool_win()
    return -1

func check_eight_ball_win() -> int:
    # Check if 8-ball is potted correctly
    if 8 in balls_potted[0]:
        if player_groups[0] != null and all_balls_potted(0, player_groups[0]):
            return 0
        else:
            return 1  # Opponent wins if 8-ball potted early
    if 8 in balls_potted[1]:
        if player_groups[1] != null and all_balls_potted(1, player_groups[1]):
            return 1
        else:
            return 0
    return -1

func check_nine_ball_win() -> int:
    # 9-ball wins when 9 is potted (can be early)
    if 9 in balls_potted[0]:
        return 0
    if 9 in balls_potted[1]:
        return 1
    return -1

func check_snooker_win() -> int:
    # Snooker has complex scoring, simplified here
    return -1 if player_scores[0] == player_scores[1] else (0 if player_scores[0] > player_scores[1] else 1)

func check_straight_pool_win() -> int:
    # First to reach target score wins
    var target_score = 100
    if player_scores[0] >= target_score:
        return 0
    if player_scores[1] >= target_score:
        return 1
    return -1

func all_balls_potted(player: int, group: String) -> bool:
    var target_balls = eight_ball_solids if group == "solids" else eight_ball_stripes
    for ball in target_balls:
        if ball not in balls_potted[player]:
            return false
    return true

func assign_groups(first_ball: int) -> void:
    if player_groups[0] == null and player_groups[1] == null:
        if first_ball in eight_ball_solids:
            player_groups[current_player] = "solids"
            player_groups[(current_player + 1) % 2] = "stripes"
        else:
            player_groups[current_player] = "stripes"
            player_groups[(current_player + 1) % 2] = "solids"

func get_valid_targets() -> Array:
    match current_game_mode:
        GameMode.EIGHT_BALL:
            return get_eight_ball_targets()
        GameMode.NINE_BALL:
            return get_nine_ball_targets()
        GameMode.SNOOKER:
            return get_snooker_targets()
    return []

func get_eight_ball_targets() -> Array:
    if player_groups[current_player] == null:
        return eight_ball_solids + eight_ball_stripes
    var group = player_groups[current_player]
    var targets = eight_ball_solids if group == "solids" else eight_ball_stripes
    var remaining = []
    for ball in targets:
        if ball not in balls_potted[0] and ball not in balls_potted[1]:
            remaining.append(ball)
    # If all group balls potted, can target 8-ball
    if remaining.is_empty():
        remaining.append(8)
    return remaining

func get_nine_ball_targets() -> Array:
    # Must hit lowest numbered ball first
    for i in range(1, 10):
        if i not in balls_potted[0] and i not in balls_potted[1]:
            return [i]
    return []

func get_snooker_targets() -> Array:
    # Simplified snooker targeting
    return []

func save_game() -> void:
    var save_data = {
        "game_mode": current_game_mode,
        "current_player": current_player,
        "player_scores": player_scores,
        "balls_potted": balls_potted,
        "player_groups": player_groups
    }
    var file = FileAccess.open("user://savegame.json", FileAccess.WRITE)
    file.store_string(JSON.stringify(save_data))
    file.close()

func load_game() -> void:
    if not FileAccess.file_exists("user://savegame.json"):
        return
    var file = FileAccess.open("user://savegame.json", FileAccess.READ)
    var json = JSON.new()
    var error = json.parse(file.get_as_text())
    file.close()
    
    if error == OK:
        var save_data = json.data
        current_game_mode = save_data["game_mode"]
        current_player = save_data["current_player"]
        player_scores = save_data["player_scores"]
        balls_potted = save_data["balls_potted"]
        player_groups = save_data["player_groups"]
