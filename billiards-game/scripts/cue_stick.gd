extends Node3D

# Cue stick properties
var cue_mesh: MeshInstance3D
var cue_length: float = 1.5
var cue_radius: float = 0.012
var max_power: float = 1.0
var current_power: float = 0.0
var is_aiming: bool = false
var is_charging: bool = false
var charge_direction: int = 1  # 1 for increasing, -1 for decreasing

# Aiming
var aim_direction: Vector3 = Vector3.FORWARD
var aim_rotation: float = 0.0
var aim_elevation: float = 0.0

# English (spin)
var english_offset: Vector2 = Vector2.ZERO  # x: side spin, y: top/bottom spin

# Animation
var pull_back_distance: float = 0.0
var max_pull_back: float = 0.3

# References
var cue_ball: Node3D

func _ready() -> void:
    create_cue_mesh()
    find_cue_ball()

func create_cue_mesh() -> void:
    # Create cue stick as a cylinder
    cue_mesh = MeshInstance3D.new()
    cue_mesh.mesh = CylinderMesh.new()
    cue_mesh.mesh.top_radius = cue_radius * 0.6
    cue_mesh.mesh.bottom_radius = cue_radius
    cue_mesh.mesh.height = cue_length
    cue_mesh.mesh.radial_segments = 16
    
    # Rotate to point forward
    cue_mesh.rotation_degrees = Vector3(90, 0, 0)
    
    # Create wood material
    var material = StandardMaterial3D.new()
    material.albedo_color = Color(0.4, 0.25, 0.1)
    material.roughness = 0.4
    material.metallic = 0.0
    cue_mesh.material_override = material
    
    add_child(cue_mesh)
    
    # Add tip (lighter color)
    var tip = MeshInstance3D.new()
    tip.mesh = CylinderMesh.new()
    tip.mesh.top_radius = cue_radius * 0.6
    tip.mesh.bottom_radius = cue_radius * 0.65
    tip.mesh.height = 0.05
    tip.rotation_degrees = Vector3(90, 0, 0)
    tip.position = Vector3(0, 0, cue_length/2 - 0.025)
    
    var tip_material = StandardMaterial3D.new()
    tip_material.albedo_color = Color(0.6, 0.4, 0.2)
    tip_material.roughness = 0.5
    tip.material_override = tip_material
    
    add_child(tip)

func find_cue_ball() -> void:
    # Find cue ball in the scene
    var balls = get_tree().get_nodes_in_group("cue_ball")
    if not balls.is_empty():
        cue_ball = balls[0]

func _process(delta: float) -> void:
    if is_aiming and cue_ball:
        update_cue_position()
        handle_aiming_input(delta)
        handle_power_charge(delta)

func update_cue_position() -> void:
    if not cue_ball:
        return
    
    # Position cue behind the cue ball
    var ball_pos = cue_ball.global_position
    var offset_distance = PhysicsManager.BALL_RADIUS + 0.1 + pull_back_distance
    
    # Calculate aim direction in 3D
    var aim_vec = Vector3(
        sin(aim_rotation) * cos(aim_elevation),
        sin(aim_elevation),
        cos(aim_rotation) * cos(aim_elevation)
    ).normalized()
    
    # Apply english offset
    var right_vector = aim_vec.cross(Vector3.UP).normalized()
    var up_vector = right_vector.cross(aim_vec).normalized()
    aim_vec += right_vector * english_offset.x * 0.1
    aim_vec += up_vector * english_offset.y * 0.1
    aim_vec = aim_vec.normalized()
    
    global_position = ball_pos - aim_vec * offset_distance
    look_at(ball_pos + aim_vec, Vector3.UP)

func handle_aiming_input(delta: float) -> void:
    var rotation_speed = 2.0 * delta
    var elevation_speed = 1.0 * delta
    
    # Left/Right rotation
    if Input.is_action_pressed("aim_left"):
        aim_rotation -= rotation_speed
    if Input.is_action_pressed("aim_right"):
        aim_rotation += rotation_speed
    
    # Up/Down elevation (masse shots)
    if Input.is_action_pressed("aim_up"):
        aim_elevation = min(aim_elevation + elevation_speed, PI / 6)
    if Input.is_action_pressed("aim_down"):
        aim_elevation = max(aim_elevation - elevation_speed, -PI / 6)
    
    # English controls
    var english_speed = 0.5 * delta
    if Input.is_action_pressed("english_left"):
        english_offset.x = max(english_offset.x - english_speed, -PhysicsManager.MAX_ENGLISH)
    if Input.is_action_pressed("english_right"):
        english_offset.x = min(english_offset.x + english_speed, PhysicsManager.MAX_ENGLISH)
    if Input.is_action_pressed("english_up"):
        english_offset.y = min(english_offset.y + english_speed, PhysicsManager.MAX_ENGLISH)
    if Input.is_action_pressed("english_down"):
        english_offset.y = max(english_offset.y - english_speed, -PhysicsManager.MAX_ENGLISH)

func handle_power_charge(delta: float) -> void:
    if Input.is_action_pressed("shoot"):
        if not is_charging:
            is_charging = true
            charge_direction = 1
        
        # Oscillate power
        var charge_speed = 1.5 * delta
        current_power += charge_speed * charge_direction
        
        if current_power >= max_power:
            current_power = max_power
            charge_direction = -1
        elif current_power <= 0:
            current_power = 0
            charge_direction = 1
        
        # Animate pull back
        pull_back_distance = current_power * max_pull_back
        
        GameManager.shot_power_changed.emit(current_power)
    else:
        if is_charging:
            # Release shot
            shoot()
            is_charging = false
            current_power = 0
            pull_back_distance = 0

func shoot() -> void:
    if not cue_ball or current_power < 0.1:
        return
    
    # Calculate shot direction
    var aim_vec = Vector3(
        sin(aim_rotation) * cos(aim_elevation),
        sin(aim_elevation),
        cos(aim_rotation) * cos(aim_elevation)
    ).normalized()
    
    # Apply physics shot
    PhysicsManager.apply_shot(current_power, aim_vec, english_offset)
    
    # Play sound
    AudioManager.play_cue_hit(current_power)
    
    # Update game state
    GameManager.current_state = GameManager.GameState.SHOOTING
    is_aiming = false

func start_aiming() -> void:
    is_aiming = true
    current_power = 0
    pull_back_distance = 0
    visible = true

func stop_aiming() -> void:
    is_aiming = false
    visible = false

func set_aim_direction(direction: Vector3) -> void:
    aim_direction = direction.normalized()
    aim_rotation = atan2(direction.x, direction.z)
    aim_elevation = asin(direction.y)

func get_aim_direction() -> Vector3:
    return Vector3(
        sin(aim_rotation) * cos(aim_elevation),
        sin(aim_elevation),
        cos(aim_rotation) * cos(aim_elevation)
    ).normalized()

func set_english(offset: Vector2) -> void:
    english_offset = offset.clamp(
        Vector2(-PhysicsManager.MAX_ENGLISH, -PhysicsManager.MAX_ENGLISH),
        Vector2(PhysicsManager.MAX_ENGLISH, PhysicsManager.MAX_ENGLISH)
    )

func get_english() -> Vector2:
    return english_offset

func get_power() -> float:
    return current_power
