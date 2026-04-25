extends Node3D

# Table dimensions (9ft table in meters)
var table_length: float = 2.54
var table_width: float = 1.27
var table_height: float = 0.81
var rail_height: float = 0.04
var cushion_height: float = 0.025

# References
var table_mesh: MeshInstance3D
var rails: Array = []
var cushions: Array = []
var pockets: Array = []

# Materials
var felt_material: StandardMaterial3D
var wood_material: StandardMaterial3D
var cushion_material: StandardMaterial3D

func _ready() -> void:
    create_table()
    create_rails()
    create_cushions()
    create_pockets()
    setup_materials()
    setup_lighting()

func create_table() -> void:
    # Create the main table surface (felt)
    table_mesh = MeshInstance3D.new()
    var box_shape = BoxShape3D.new()
    box_shape.size = Vector3(table_length, 0.02, table_width)
    
    var collision = StaticBody3D.new()
    var shape = collision.create_shape_owner(box_shape)
    collision.shape_owner_add_shape(shape, box_shape)
    
    table_mesh.mesh = BoxMesh.new()
    table_mesh.mesh.size = Vector3(table_length, 0.02, table_width)
    table_mesh.position = Vector3(0, 0, 0)
    
    add_child(table_mesh)
    table_mesh.add_child(collision)
    collision.collision_layer = 1
    collision.collision_mask = 1

func create_rails() -> void:
    # Create wooden rails around the table
    var rail_thickness = 0.08
    var rail_positions = [
        {"pos": Vector3(0, table_height/2, -table_width/2 - rail_thickness/2), "size": Vector3(table_length + rail_thickness*2, rail_height, rail_thickness), "rot": Vector3.ZERO},
        {"pos": Vector3(0, table_height/2, table_width/2 + rail_thickness/2), "size": Vector3(table_length + rail_thickness*2, rail_height, rail_thickness), "rot": Vector3.ZERO},
        {"pos": Vector3(-table_length/2 - rail_thickness/2, table_height/2, 0), "size": Vector3(rail_thickness, rail_height, table_width), "rot": Vector3.ZERO},
        {"pos": Vector3(table_length/2 + rail_thickness/2, table_height/2, 0), "size": Vector3(rail_thickness, rail_height, table_width), "rot": Vector3.ZERO}
    ]
    
    for rail_data in rail_positions:
        var rail = MeshInstance3D.new()
        rail.mesh = BoxMesh.new()
        rail.mesh.size = rail_data.size
        rail.position = rail_data.pos
        rail.rotation_degrees = rail_data.rot
        
        var collision = StaticBody3D.new()
        var box_shape = BoxShape3D.new()
        box_shape.size = rail_data.size
        collision.add_child(box_shape)
        collision.shape_owner_add_shape(collision.create_shape_owner(box_shape), box_shape)
        
        add_child(rail)
        rail.add_child(collision)
        collision.collision_layer = 2
        collision.collision_mask = 1
        rails.append(rail)

func create_cushions() -> void:
    # Create rubber cushions for ball bounce
    var cushion_thickness = 0.03
    var cushion_width = 0.04
    
    # Long cushions (top and bottom)
    var long_cushion_length = table_length - 0.3  # Account for pockets
    
    var cushion_positions = [
        # Top left
        {"pos": Vector3(-table_length/2 + 0.15, 0.01, -table_width/2 + cushion_width/2), "size": Vector3(0.2, cushion_height, cushion_width), "normal": Vector3(0, 0, 1)},
        # Top middle
        {"pos": Vector3(0, 0.01, -table_width/2 + cushion_width/2), "size": Vector3(long_cushion_length - 0.4, cushion_height, cushion_width), "normal": Vector3(0, 0, 1)},
        # Top right
        {"pos": Vector3(table_length/2 - 0.15, 0.01, -table_width/2 + cushion_width/2), "size": Vector3(0.2, cushion_height, cushion_width), "normal": Vector3(0, 0, 1)},
        # Bottom left
        {"pos": Vector3(-table_length/2 + 0.15, 0.01, table_width/2 - cushion_width/2), "size": Vector3(0.2, cushion_height, cushion_width), "normal": Vector3(0, 0, -1)},
        # Bottom middle
        {"pos": Vector3(0, 0.01, table_width/2 - cushion_width/2), "size": Vector3(long_cushion_length - 0.4, cushion_height, cushion_width), "normal": Vector3(0, 0, -1)},
        # Bottom right
        {"pos": Vector3(table_length/2 - 0.15, 0.01, table_width/2 - cushion_width/2), "size": Vector3(0.2, cushion_height, cushion_width), "normal": Vector3(0, 0, -1)},
        # Left
        {"pos": Vector3(-table_length/2 + cushion_width/2, 0.01, 0), "size": Vector3(cushion_width, cushion_height, table_width - 0.3), "normal": Vector3(1, 0, 0)},
        # Right
        {"pos": Vector3(table_length/2 - cushion_width/2, 0.01, 0), "size": Vector3(cushion_width, cushion_height, table_width - 0.3), "normal": Vector3(-1, 0, 0)}
    ]
    
    for cushion_data in cushion_positions:
        var cushion = MeshInstance3D.new()
        cushion.mesh = BoxMesh.new()
        cushion.mesh.size = cushion_data.size
        cushion.position = cushion_data.pos
        
        var collision = StaticBody3D.new()
        var box_shape = BoxShape3D.new()
        box_shape.size = cushion_data.size
        collision.add_child(box_shape)
        collision.shape_owner_add_shape(collision.create_shape_owner(box_shape), box_shape)
        collision.set_meta("normal", cushion_data.normal)
        
        add_child(cushion)
        cushion.add_child(collision)
        collision.collision_layer = 4
        collision.collision_mask = 1
        cushions.append(cushion)

func create_pockets() -> void:
    # Create pocket visual representations
    var pocket_radius = 0.12
    var pocket_positions = [
        Vector3(-table_length/2 + 0.05, 0, -table_width/2 + 0.05),
        Vector3(0, 0, -table_width/2 - 0.05),
        Vector3(table_length/2 - 0.05, 0, -table_width/2 + 0.05),
        Vector3(-table_length/2 + 0.05, 0, table_width/2 - 0.05),
        Vector3(0, 0, table_width/2 + 0.05),
        Vector3(table_length/2 - 0.05, 0, table_width/2 - 0.05)
    ]
    
    for pocket_pos in pocket_positions:
        var pocket = MeshInstance3D.new()
        pocket.mesh = CylinderMesh.new()
        pocket.mesh.top_radius = pocket_radius
        pocket.mesh.bottom_radius = pocket_radius * 0.8
        pocket.mesh.height = 0.05
        pocket.position = pocket_pos + Vector3(0, -0.02, 0)
        
        add_child(pocket)
        pockets.append(pocket)

func setup_materials() -> void:
    # Felt material (green cloth)
    felt_material = StandardMaterial3D.new()
    felt_material.albedo_color = Color(0.0, 0.4, 0.1)
    felt_material.roughness = 0.9
    felt_material.metallic = 0.0
    felt_material.texture_filter = BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS
    table_mesh.material_override = felt_material
    
    # Wood material for rails
    wood_material = StandardMaterial3D.new()
    wood_material.albedo_color = Color(0.4, 0.25, 0.1)
    wood_material.roughness = 0.6
    wood_material.metallic = 0.0
    
    for rail in rails:
        rail.material_override = wood_material
    
    # Cushion material (rubber)
    cushion_material = StandardMaterial3D.new()
    cushion_material.albedo_color = Color(0.1, 0.05, 0.05)
    cushion_material.roughness = 0.8
    cushion_material.metallic = 0.0
    
    for cushion in cushions:
        cushion.material_override = cushion_material
    
    # Pocket material (dark)
    var pocket_material = StandardMaterial3D.new()
    pocket_material.albedo_color = Color(0.05, 0.05, 0.05)
    pocket_material.roughness = 1.0
    
    for pocket in pockets:
        pocket.material_override = pocket_material

func setup_lighting() -> void:
    # Add ambient light
    var ambient_light = AmbientLight.new()
    ambient_light.ambient_color = Color(0.3, 0.3, 0.3)
    ambient_light.sky_energy = 0.5
    add_child(ambient_light)
    
    # Add directional light (overhead)
    var directional_light = DirectionalLight3D.new()
    directional_light.position = Vector3(0, 3, 0)
    directional_light.rotation_degrees = Vector3(-90, 0, 0)
    directional_light.light_energy = 1.5
    directional_light.shadow_enabled = true
    directional_light.shadow_bias = 0.001
    add_child(directional_light)
    
    # Add point lights above table for better illumination
    var point_light1 = PointLight3D.new()
    point_light1.position = Vector3(-0.5, 2, 0)
    point_light1.light_energy = 2.0
    point_light1.shadow_enabled = true
    add_child(point_light1)
    
    var point_light2 = PointLight3D.new()
    point_light2.position = Vector3(0.5, 2, 0)
    point_light2.light_energy = 2.0
    point_light2.shadow_enabled = true
    add_child(point_light2)

func get_table_dimensions() -> Vector3:
    return Vector3(table_length, table_height, table_width)

func get_pocket_positions() -> Array:
    var positions = []
    for pocket in pockets:
        positions.append(pocket.position)
    return positions
