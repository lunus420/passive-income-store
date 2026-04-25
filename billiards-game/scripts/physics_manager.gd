extends Node

# Physics constants for realistic billiards
const BALL_RADIUS: float = 0.028575  # 2.25 inches in meters
const BALL_MASS: float = 0.17  # ~6 oz in kg
const TABLE_FRICTION: float = 0.015  # Rolling friction
const CUSHION_FRICTION: float = 0.6  # Cushion restitution
const BALL_RESTITUTION: float = 0.95  # Ball-ball collision
const MIN_VELOCITY: float = 0.01  # Threshold to stop ball
const GRAVITY: float = 9.81

# Spin and English
const MAX_ENGLISH: float = 0.5  # Maximum spin offset
const ENGLISH_EFFECT: float = 0.3  # How much english affects trajectory

# Physics state
var balls: Array = []  # Array of ball nodes
var cue_ball: RigidBody3D
var table_dimensions: Vector3 = Vector3(2.54, 0.0, 1.27)  # 9ft table in meters
var pocket_radius: float = 0.12
var pocket_positions: Array = []

# Shot parameters
var shot_power: float = 0.0
var shot_direction: Vector3 = Vector3.ZERO
var english_offset: Vector2 = Vector2.ZERO  # x: side spin, y: top/bottom spin

# Signals
signal ball_collision(ball1: int, ball2: int)
signal cushion_collision(ball: int, cushion: String)
signal ball_potted(ball: int)
signal balls_stopped()

func _ready() -> void:
    setup_pocket_positions()
    setup_physics_world()

func setup_pocket_positions() -> void:
    # 6 pockets on a standard pool table
    var half_length = table_dimensions.x / 2.0
    var half_width = table_dimensions.z / 2.0
    var pocket_offset = 0.05  # Slight offset from corners
    
    pocket_positions = [
        Vector3(-half_length + pocket_offset, 0, -half_width + pocket_offset),  # Top left
        Vector3(0, 0, -half_width - pocket_offset),  # Top middle
        Vector3(half_length - pocket_offset, 0, -half_width + pocket_offset),  # Top right
        Vector3(-half_length + pocket_offset, 0, half_width - pocket_offset),  # Bottom left
        Vector3(0, 0, half_width + pocket_offset),  # Bottom middle
        Vector3(half_length - pocket_offset, 0, half_width - pocket_offset)  # Bottom right
    ]

func setup_physics_world() -> void:
    # Configure physics world for realistic billiards
    var physics_world = get_world_3d().direct_space_state
    # Additional physics setup can be done here

func register_ball(ball: RigidBody3D, ball_number: int) -> void:
    ball.mass = BALL_MASS
    ball.linear_damp = TABLE_FRICTION
    ball.angular_damp = TABLE_FRICTION
    ball.contact_monitor = true
    ball.max_contacts_reported = 10
    ball.add_to_group("balls")
    
    if ball_number == 0:
        cue_ball = ball
        ball.add_to_group("cue_ball")
    
    balls.append({"node": ball, "number": ball_number, "velocity": Vector3.ZERO})

func apply_shot(power: float, direction: Vector3, english: Vector2) -> void:
    if not cue_ball:
        return
    
    shot_power = clamp(power, 0.0, 1.0)
    shot_direction = direction.normalized()
    english_offset = english.clamp(Vector2(-MAX_ENGLISH, -MAX_ENGLISH), Vector2(MAX_ENGLISH, MAX_ENGLISH))
    
    # Calculate initial velocity based on power
    var max_speed = 15.0  # Maximum ball speed in m/s
    var velocity = shot_direction * (shot_power * max_speed)
    
    # Apply english effects
    velocity += Vector3(english_offset.x * ENGLISH_EFFECT, 0, english_offset.y * ENGLISH_EFFECT)
    
    cue_ball.apply_central_impulse(velocity * cue_ball.mass)
    
    # Apply spin
    var spin_torque = Vector3(english_offset.x, -english_offset.y, 0) * shot_power * 2.0
    cue_ball.apply_torque_impulse(spin_torque)

func _physics_process(delta: float) -> void:
    update_ball_physics(delta)
    check_collisions()
    check_pockets()
    check_balls_stopped()

func update_ball_physics(delta: float) -> void:
    for ball_data in balls:
        var ball = ball_data.node
        var velocity = ball.linear_velocity
        
        # Apply rolling friction
        if velocity.length() > MIN_VELOCITY:
            var friction_force = -velocity.normalized() * TABLE_FRICTION * BALL_MASS * GRAVITY
            ball.apply_central_force(friction_force)
        
        # Stop ball if velocity is very low
        if velocity.length() < MIN_VELOCITY:
            ball.linear_velocity = Vector3.ZERO
            ball.angular_velocity = Vector3.ZERO

func check_collisions() -> void:
    # Ball-to-ball collisions
    for i in range(balls.size()):
        for j in range(i + 1, balls.size()):
            var ball1 = balls[i].node
            var ball2 = balls[j].node
            
            var distance = ball1.global_position.distance_to(ball2.global_position)
            if distance < BALL_RADIUS * 2:
                resolve_ball_collision(ball1, ball2, balls[i].number, balls[j].number)

func resolve_ball_collision(ball1: RigidBody3D, ball2: RigidBody3D, num1: int, num2: int) -> void:
    var normal = (ball2.global_position - ball1.global_position).normalized()
    var relative_velocity = ball1.linear_velocity - ball2.linear_velocity
    var velocity_along_normal = relative_velocity.dot(normal)
    
    if velocity_along_normal > 0:
        return  # Moving apart
    
    # Calculate impulse
    var impulse_scalar = -(1 + BALL_RESTITUTION) * velocity_along_normal
    impulse_scalar /= (1/ball1.mass + 1/ball2.mass)
    
    var impulse = impulse_scalar * normal
    ball1.apply_central_impulse(impulse)
    ball2.apply_central_impulse(-impulse)
    
    ball_collision.emit(num1, num2)

func check_pockets() -> void:
    for ball_data in balls:
        var ball = ball_data.node
        if ball.linear_velocity.length() < MIN_VELOCITY:
            for pocket_pos in pocket_positions:
                var distance = ball.global_position.distance_to(pocket_pos)
                if distance < pocket_radius:
                    pot_ball(ball_data.number)
                    break

func pot_ball(ball_number: int) -> void:
    var ball_data = balls.filter(func(b): return b.number == ball_number)[0]
    var ball = ball_data.node
    
    # Remove ball from play
    ball.linear_velocity = Vector3.ZERO
    ball.angular_velocity = Vector3.ZERO
    ball.global_position = Vector3(0, -10, 0)  # Move out of view
    
    ball_potted.emit(ball_number)
    
    # If cue ball, reset it
    if ball_number == 0:
        reset_cue_ball()

func reset_cue_ball() -> void:
    if not cue_ball:
        return
    
    # Place cue ball at head string
    cue_ball.global_position = Vector3(-table_dimensions.x / 4.0, BALL_RADIUS, 0)
    cue_ball.linear_velocity = Vector3.ZERO
    cue_ball.angular_velocity = Vector3.ZERO

func check_balls_stopped() -> void:
    var all_stopped = true
    for ball_data in balls:
        if ball_data.node.linear_velocity.length() > MIN_VELOCITY:
            all_stopped = false
            break
    
    if all_stopped:
        balls_stopped.emit()

func get_ball_velocity(ball_number: int) -> Vector3:
    var ball_data = balls.filter(func(b): return b.number == ball_number)
    if not ball_data.is_empty():
        return ball_data[0].node.linear_velocity
    return Vector3.ZERO

func are_balls_moving() -> bool:
    for ball_data in balls:
        if ball_data.node.linear_velocity.length() > MIN_VELOCITY:
            return true
    return false

func calculate_shot_trajectory(start_pos: Vector3, direction: Vector3, power: float) -> Array:
    # Predict ball path for aiming guide
    var trajectory = []
    var current_pos = start_pos
    var velocity = direction.normalized() * (power * 15.0)
    var steps = 100
    
    for i in range(steps):
        trajectory.append(current_pos)
        current_pos += velocity * 0.016  # Simulate 16ms timestep
        velocity *= (1.0 - TABLE_FRICTION)  # Apply friction
        
        if velocity.length() < MIN_VELOCITY:
            break
    
    return trajectory

func apply_cushion_collision(ball: RigidBody3D, normal: Vector3) -> void:
    var velocity = ball.linear_velocity
    var velocity_along_normal = velocity.dot(normal)
    
    if velocity_along_normal > 0:
        return  # Moving away from cushion
    
    # Reflect velocity
    var reflection = velocity - 2 * velocity_along_normal * normal
    ball.linear_velocity = reflection * CUSHION_FRICTION
    
    # Apply some angular velocity for realism
    var tangent = velocity - velocity_along_normal * normal
    ball.angular_velocity += tangent.cross(normal) * 0.1
