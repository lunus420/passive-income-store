extends RigidBody3D

# Ball properties
var ball_number: int = 0
var ball_color: Color = Color.WHITE
var is_striped: bool = false
var is_potted: bool = false

# Mesh reference
var ball_mesh: MeshInstance3D

# Ball colors (standard pool ball colors)
const BALL_COLORS = {
    0: Color(1.0, 1.0, 1.0),  # Cue ball - white
    1: Color(1.0, 0.8, 0.0),   # 1 - yellow
    2: Color(0.0, 0.5, 1.0),   # 2 - blue
    3: Color(1.0, 0.0, 0.0),   # 3 - red
    4: Color(0.5, 0.0, 0.5),   # 4 - purple
    5: Color(1.0, 0.5, 0.0),   # 5 - orange
    6: Color(0.0, 0.7, 0.2),   # 6 - green
    7: Color(0.6, 0.2, 0.0),   # 7 - maroon
    8: Color(0.0, 0.0, 0.0),   # 8 - black
    9: Color(1.0, 0.8, 0.0),   # 9 - yellow stripe
    10: Color(0.0, 0.5, 1.0),  # 10 - blue stripe
    11: Color(1.0, 0.0, 0.0),  # 11 - red stripe
    12: Color(0.5, 0.0, 0.5),  # 12 - purple stripe
    13: Color(1.0, 0.5, 0.0),  # 13 - orange stripe
    14: Color(0.0, 0.7, 0.2),  # 14 - green stripe
    15: Color(0.6, 0.2, 0.0)   # 15 - maroon stripe
}

func _ready() -> void:
    setup_ball()
    setup_collision()

func setup_ball() -> void:
    # Create ball mesh
    ball_mesh = MeshInstance3D.new()
    ball_mesh.mesh = SphereMesh.new()
    ball_mesh.mesh.radius = PhysicsManager.BALL_RADIUS
    ball_mesh.mesh.height = PhysicsManager.BALL_RADIUS * 2.0
    
    # Create material based on ball number
    var material = create_ball_material()
    ball_mesh.material_override = material
    
    add_child(ball_mesh)
    
    # Add collision shape
    var collision_shape = CollisionShape3D.new()
    var sphere_shape = SphereShape3D.new()
    sphere_shape.radius = PhysicsManager.BALL_RADIUS
    collision_shape.shape = sphere_shape
    add_child(collision_shape)
    
    # Set physics properties
    mass = PhysicsManager.BALL_MASS
    linear_damp = PhysicsManager.TABLE_FRICTION
    angular_damp = PhysicsManager.TABLE_FRICTION
    contact_monitor = true
    max_contacts_reported = 10
    
    # Register with physics manager
    PhysicsManager.register_ball(self, ball_number)

func create_ball_material() -> StandardMaterial3D:
    var material = StandardMaterial3D.new()
    
    if ball_number == 0:
        # Cue ball - pure white
        material.albedo_color = Color(1.0, 1.0, 1.0)
        material.roughness = 0.3
        material.metallic = 0.1
    elif ball_number == 8:
        # 8-ball - black
        material.albedo_color = Color(0.05, 0.05, 0.05)
        material.roughness = 0.3
        material.metallic = 0.1
    elif ball_number >= 9:
        # Striped balls
        material.albedo_color = Color(1.0, 1.0, 1.0)  # White base
        material.roughness = 0.3
        material.metallic = 0.1
        is_striped = true
        # Stripe color would be added via texture
    else:
        # Solid balls
        var color = BALL_COLORS.get(ball_number, Color.WHITE)
        material.albedo_color = color
        material.roughness = 0.3
        material.metallic = 0.1
    
    material.texture_filter = BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS
    return material

func setup_collision() -> void:
    body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node) -> void:
    if body.is_in_group("balls"):
        # Ball-to-ball collision
        var other_ball = body
        var other_number = other_ball.ball_number
        PhysicsManager.ball_collision.emit(ball_number, other_number)
    elif body.is_in_group("cushions"):
        # Cushion collision
        PhysicsManager.cushion_collision.emit(ball_number, "cushion")

func set_ball_number(number: int) -> void:
    ball_number = number
    if ball_mesh:
        ball_mesh.material_override = create_ball_material()

func set_position(pos: Vector3) -> void:
    global_position = pos
    linear_velocity = Vector3.ZERO
    angular_velocity = Vector3.ZERO

func get_velocity() -> Vector3:
    return linear_velocity

func is_moving() -> bool:
    return linear_velocity.length() > PhysicsManager.MIN_VELOCITY

func pot() -> void:
    is_potted = true
    # Move ball out of play
    global_position = Vector3(0, -10, 0)
    linear_velocity = Vector3.ZERO
    angular_velocity = Vector3.ZERO

func reset_position(pos: Vector3) -> void:
    is_potted = false
    global_position = pos
    linear_velocity = Vector3.ZERO
    angular_velocity = Vector3.ZERO

func apply_spin(spin_vector: Vector3) -> void:
    angular_velocity = spin_vector
