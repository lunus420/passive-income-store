extends Node3D

# Scene references
var table: Node3D
var cue_stick: Node3D
var camera: Camera3D
var ai_player: Node3D

# UI references
var main_menu: Control
var hud: Control
var pause_menu: Control
var settings_menu: Control

# Game state
var balls_node: Node3D
var is_paused: bool = false

func _ready() -> void:
    setup_scene()
    setup_camera()
    setup_balls()
    setup_ui()
    connect_signals()
    
    # Start with main menu
    show_main_menu()

func setup_scene() -> void:
    # Create table
    table = preload("res://scripts/table.gd").new()
    add_child(table)
    
    # Create cue stick
    cue_stick = preload("res://scripts/cue_stick.gd").new()
    add_child(cue_stick)
    cue_stick.visible = false
    
    # Create AI player
    ai_player = preload("res://scripts/ai_player.gd").new()
    add_child(ai_player)
    
    # Create balls container
    balls_node = Node3D.new()
    balls_node.name = "Balls"
    add_child(balls_node)

func setup_camera() -> void:
    camera = Camera3D.new()
    camera.position = Vector3(0, 2.5, 3)
    camera.rotation_degrees = Vector3(-45, 0, 0)
    add_child(camera)
    
    # Add camera controls
    var camera_rig = Node3D.new()
    camera_rig.name = "CameraRig"
    add_child(camera_rig)
    camera_rig.add_child(camera)

func setup_balls() -> void:
    # Create cue ball
    var cue_ball = preload("res://scripts/ball.gd").new()
    cue_ball.set_ball_number(0)
    cue_ball.set_position(Vector3(-0.6, PhysicsManager.BALL_RADIUS, 0))
    balls_node.add_child(cue_ball)
    
    # Create rack of balls (triangle formation for 8-ball)
    rack_balls()

func rack_balls() -> void:
    # Standard 8-ball rack formation
    var start_x = 0.6
    var start_z = 0.0
    var spacing = PhysicsManager.BALL_RADIUS * 2.1
    
    # Ball arrangement for 8-ball (8 in center, corners different)
    var arrangement = [
        [1],
        [9, 2],
        [3, 8, 10],
        [11, 4, 5, 12],
        [6, 13, 14, 7, 15]
    ]
    
    for row in range(arrangement.size()):
        var row_balls = arrangement[row]
        var row_offset = row * spacing / 2.0
        
        for col in range(row_balls.size()):
            var ball_num = row_balls[col]
            var ball = preload("res://scripts/ball.gd").new()
            ball.set_ball_number(ball_num)
            
            var x = start_x + row * spacing * 0.866  # Hexagonal packing
            var z = start_z + (col - row_balls.size() / 2.0 + 0.5) * spacing
            
            ball.set_position(Vector3(x, PhysicsManager.BALL_RADIUS, z))
            balls_node.add_child(ball)

func setup_ui() -> void:
    # Create UI layer
    var ui_layer = CanvasLayer.new()
    ui_layer.name = "UILayer"
    add_child(ui_layer)
    
    # Create main menu
    main_menu = create_main_menu()
    ui_layer.add_child(main_menu)
    
    # Create HUD
    hud = create_hud()
    ui_layer.add_child(hud)
    hud.visible = false
    
    # Create pause menu
    pause_menu = create_pause_menu()
    ui_layer.add_child(pause_menu)
    pause_menu.visible = false
    
    # Create settings menu
    settings_menu = create_settings_menu()
    ui_layer.add_child(settings_menu)
    settings_menu.visible = false

func create_main_menu() -> Control:
    var menu = Control.new()
    menu.name = "MainMenu"
    menu.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
    
    # Background
    var background = ColorRect.new()
    background.color = Color(0.1, 0.1, 0.15)
    background.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
    menu.add_child(background)
    
    # Title
    var title = Label.new()
    title.text = "ULTIMATE 3D BILLIARDS"
    title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
    title.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
    title.add_theme_font_size_override("font_size", 48)
    title.add_theme_color_override("font_color", Color(1.0, 0.8, 0.3))
    title.position = Vector2(0, 100)
    title.size = Vector2(1920, 100)
    menu.add_child(title)
    
    # Menu buttons
    var button_container = VBoxContainer.new()
    button_container.position = Vector2(810, 300)
    button_container.size = Vector2(300, 400)
    menu.add_child(button_container)
    
    var buttons = [
        {"text": "Play 8-Ball", "action": _on_8ball_pressed},
        {"text": "Play 9-Ball", "action": _on_9ball_pressed},
        {"text": "Play Snooker", "action": _on_snooker_pressed},
        {"text": "Practice Mode", "action": _on_practice_pressed},
        {"text": "Multiplayer", "action": _on_multiplayer_pressed},
        {"text": "Settings", "action": _on_settings_pressed},
        {"text": "Quit", "action": _on_quit_pressed}
    ]
    
    for button_data in buttons:
        var button = Button.new()
        button.text = button_data.text
        button.custom_minimum_size = Vector2(300, 50)
        button.pressed.connect(button_data.action)
        button_container.add_child(button)
    
    return menu

func create_hud() -> Control:
    var hud = Control.new()
    hud.name = "HUD"
    hud.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
    
    # Player info
    var player_info = Label.new()
    player_info.name = "PlayerInfo"
    player_info.text = "Player 1"
    player_info.position = Vector2(20, 20)
    player_info.add_theme_font_size_override("font_size", 24)
    hud.add_child(player_info)
    
    # Score
    var score_label = Label.new()
    score_label.name = "ScoreLabel"
    score_label.text = "Score: 0 - 0"
    score_label.position = Vector2(20, 60)
    score_label.add_theme_font_size_override("font_size", 20)
    hud.add_child(score_label)
    
    # Power meter
    var power_container = HBoxContainer.new()
    power_container.position = Vector2(20, 900)
    power_container.size = Vector2(300, 50)
    hud.add_child(power_container)
    
    var power_label = Label.new()
    power_label.text = "Power:"
    power_label.add_theme_font_size_override("font_size", 20)
    power_container.add_child(power_label)
    
    var power_bar = ProgressBar.new()
    power_bar.name = "PowerBar"
    power_bar.custom_minimum_size = Vector2(200, 30)
    power_bar.max_value = 1.0
    power_bar.value = 0.0
    power_container.add_child(power_bar)
    
    # English indicator
    var english_label = Label.new()
    english_label.name = "EnglishLabel"
    english_label.text = "English: (0, 0)"
    english_label.position = Vector2(20, 960)
    english_label.add_theme_font_size_override("font_size", 16)
    hud.add_child(english_label)
    
    # Game mode indicator
    var mode_label = Label.new()
    mode_label.name = "ModeLabel"
    mode_label.text = "8-Ball"
    mode_label.position = Vector2(1700, 20)
    mode_label.add_theme_font_size_override("font_size", 20)
    hud.add_child(mode_label)
    
    # Turn timer
    var timer_label = Label.new()
    timer_label.name = "TimerLabel"
    timer_label.text = "Time: 60"
    timer_label.position = Vector2(1700, 60)
    timer_label.add_theme_font_size_override("font_size", 20)
    hud.add_child(timer_label)
    
    return hud

func create_pause_menu() -> Control:
    var menu = Control.new()
    menu.name = "PauseMenu"
    menu.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
    
    var background = ColorRect.new()
    background.color = Color(0, 0, 0, 0.7)
    background.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
    menu.add_child(background)
    
    var button_container = VBoxContainer.new()
    button_container.position = Vector2(810, 400)
    button_container.size = Vector2(300, 300)
    menu.add_child(button_container)
    
    var resume_button = Button.new()
    resume_button.text = "Resume"
    resume_button.custom_minimum_size = Vector2(300, 50)
    resume_button.pressed.connect(_on_resume_pressed)
    button_container.add_child(resume_button)
    
    var settings_button = Button.new()
    settings_button.text = "Settings"
    settings_button.custom_minimum_size = Vector2(300, 50)
    settings_button.pressed.connect(_on_settings_pressed)
    button_container.add_child(settings_button)
    
    var quit_button = Button.new()
    quit_button.text = "Quit to Menu"
    quit_button.custom_minimum_size = Vector2(300, 50)
    quit_button.pressed.connect(_on_quit_to_menu_pressed)
    button_container.add_child(quit_button)
    
    return menu

func create_settings_menu() -> Control:
    var menu = Control.new()
    menu.name = "SettingsMenu"
    menu.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
    
    var background = ColorRect.new()
    background.color = Color(0.1, 0.1, 0.15)
    background.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
    menu.add_child(background)
    
    var container = VBoxContainer.new()
    container.position = Vector2(600, 200)
    container.size = Vector2(720, 600)
    menu.add_child(container)
    
    var title = Label.new()
    title.text = "Settings"
    title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
    title.add_theme_font_size_override("font_size", 36)
    container.add_child(title)
    
    # Volume sliders
    var master_vol = create_slider("Master Volume", 0, 100, 100, _on_master_volume_changed)
    container.add_child(master_vol)
    
    var music_vol = create_slider("Music Volume", 0, 100, 70, _on_music_volume_changed)
    container.add_child(music_vol)
    
    var sfx_vol = create_slider("SFX Volume", 0, 100, 80, _on_sfx_volume_changed)
    container.add_child(sfx_vol)
    
    # Graphics quality
    var quality_label = Label.new()
    quality_label.text = "Graphics Quality:"
    quality_label.add_theme_font_size_override("font_size", 18)
    container.add_child(quality_label)
    
    var quality_option = OptionButton.new()
    quality_option.add_item("Low")
    quality_option.add_item("Medium")
    quality_option.add_item("High")
    quality_option.selected = 2
    quality_option.custom_minimum_size = Vector2(400, 40)
    quality_option.item_selected.connect(_on_quality_changed)
    container.add_child(quality_option)
    
    # VSync
    var vsync_check = CheckBox.new()
    vsync_check.text = "VSync"
    vsync_check.button_pressed = true
    vsync_check.toggled.connect(_on_vsync_toggled)
    container.add_child(vsync_check)
    
    # Back button
    var back_button = Button.new()
    back_button.text = "Back"
    back_button.custom_minimum_size = Vector2(200, 50)
    back_button.pressed.connect(_on_settings_back_pressed)
    container.add_child(back_button)
    
    return menu

func create_slider(label_text: String, min_val: float, max_val: float, default_val: float, callback: Callable) -> HBoxContainer:
    var container = HBoxContainer.new()
    container.custom_minimum_size = Vector2(700, 50)
    
    var label = Label.new()
    label.text = label_text
    label.custom_minimum_size = Vector2(200, 30)
    label.add_theme_font_size_override("font_size", 18)
    container.add_child(label)
    
    var slider = HSlider.new()
    slider.min_value = min_val
    slider.max_value = max_val
    slider.value = default_val
    slider.custom_minimum_size = Vector2(400, 30)
    slider.value_changed.connect(callback)
    container.add_child(slider)
    
    var value_label = Label.new()
    value_label.text = str(int(default_val))
    value_label.custom_minimum_size = Vector2(50, 30)
    value_label.add_theme_font_size_override("font_size", 18)
    slider.value_changed.connect(func(val): value_label.text = str(int(val)))
    container.add_child(value_label)
    
    return container

func connect_signals() -> void:
    GameManager.game_started.connect(_on_game_started)
    GameManager.game_ended.connect(_on_game_ended)
    GameManager.turn_changed.connect(_on_turn_changed)
    GameManager.ball_potted.connect(_on_ball_potted)
    GameManager.shot_power_changed.connect(_on_power_changed)
    PhysicsManager.balls_stopped.connect(_on_balls_stopped)
    PhysicsManager.ball_potted.connect(_on_ball_potted_physics)

func _process(delta: float) -> void:
    if is_paused:
        return
    
    # Update HUD
    update_hud(delta)
    
    # Handle pause input
    if Input.is_action_just_pressed("ui_cancel"):
        toggle_pause()
    
    # Handle camera toggle
    if Input.is_action_just_pressed("toggle_top_view"):
        toggle_camera_view()
    
    # Process game state
    if GameManager.is_game_active:
        GameManager.process_turn(delta)

func update_hud(delta: float) -> void:
    if not hud or not hud.visible:
        return
    
    # Update player info
    var player_info = hud.get_node("PlayerInfo")
    player_info.text = "Player %d" % (GameManager.current_player + 1)
    
    # Update score
    var score_label = hud.get_node("ScoreLabel")
    score_label.text = "Score: %d - %d" % GameManager.player_scores
    
    # Update timer
    var timer_label = hud.get_node("TimerLabel")
    timer_label.text = "Time: %d" % int(GameManager.turn_timer)
    
    # Update power bar
    var power_bar = hud.get_node("PowerBar")
    if cue_stick:
        power_bar.value = cue_stick.get_power()
    
    # Update english
    var english_label = hud.get_node("EnglishLabel")
    if cue_stick:
        var eng = cue_stick.get_english()
        english_label.text = "English: (%.1f, %.1f)" % [eng.x, eng.y]

func show_main_menu() -> void:
    main_menu.visible = true
    hud.visible = false
    pause_menu.visible = false
    settings_menu.visible = false
    AudioManager.play_music(true)

func hide_main_menu() -> void:
    main_menu.visible = false

func show_hud() -> void:
    hud.visible = true

func toggle_pause() -> void:
    is_paused = not is_paused
    pause_menu.visible = is_paused
    get_tree().paused = is_paused

func toggle_camera_view() -> void:
    GameManager.camera_mode = (GameManager.camera_mode + 1) % 3
    
    match GameManager.camera_mode:
        0:
            camera.position = Vector3(0, 2.5, 3)
            camera.rotation_degrees = Vector3(-45, 0, 0)
        1:
            camera.position = Vector3(0, 4, 0)
            camera.rotation_degrees = Vector3(-90, 0, 0)
        2:
            camera.position = Vector3(0, 3, 2)
            camera.rotation_degrees = Vector3(-60, 0, 0)

# Signal handlers
func _on_game_started() -> void:
    hide_main_menu()
    show_hud()
    cue_stick.start_aiming()

func _on_game_ended(winner: int) -> void:
    print("Game ended! Winner: Player %d" % (winner + 1))
    show_main_menu()

func _on_turn_changed(player: int) -> void:
    print("Turn changed to Player %d" % (player + 1))
    
    if GameManager.players[player] == GameManager.PlayerType.AI:
        cue_stick.stop_aiming()
        ai_player.think_and_shoot()
    else:
        cue_stick.start_aiming()

func _on_ball_potted(ball_number: int, player: int) -> void:
    print("Ball %d potted by Player %d" % [ball_number, player + 1])
    AudioManager.play_ball_pocket()

func _on_ball_potted_physics(ball_number: int) -> void:
    GameManager.record_pot(ball_number)

func _on_balls_stopped() -> void:
    if GameManager.current_state == GameManager.GameState.SHOOTING:
        GameManager.current_state = GameManager.GameState.TURN_CHANGE
        GameManager.switch_turn()

func _on_power_changed(power: float) -> void:
    pass

# Menu button handlers
func _on_8ball_pressed() -> void:
    GameManager.start_game(GameManager.GameMode.EIGHT_BALL)

func _on_9ball_pressed() -> void:
    GameManager.start_game(GameManager.GameMode.NINE_BALL)

func _on_snooker_pressed() -> void:
    GameManager.start_game(GameManager.GameMode.SNOOKER)

func _on_practice_pressed() -> void:
    GameManager.start_game(GameManager.GameMode.PRACTICE)

func _on_multiplayer_pressed() -> void:
    print("Multiplayer - Coming soon!")

func _on_settings_pressed() -> void:
    main_menu.visible = false
    settings_menu.visible = true

func _on_quit_pressed() -> void:
    get_tree().quit()

func _on_resume_pressed() -> void:
    toggle_pause()

func _on_quit_to_menu_pressed() -> void:
    toggle_pause()
    GameManager.is_game_active = false
    show_main_menu()

func _on_settings_back_pressed() -> void:
    settings_menu.visible = false
    main_menu.visible = true

func _on_master_volume_changed(value: float) -> void:
    AudioManager.set_master_volume(value / 100.0)

func _on_music_volume_changed(value: float) -> void:
    AudioManager.set_music_volume(value / 100.0)

func _on_sfx_volume_changed(value: float) -> void:
    AudioManager.set_sfx_volume(value / 100.0)

func _on_quality_changed(index: int) -> void:
    GameManager.graphics_quality = index
    # Apply quality settings

func _on_vsync_toggled(pressed: bool) -> void:
    GameManager.vsync_enabled = pressed
    DisplayServer.window_set_vsync_mode(DisplayServer.VSYNC_ENABLED if pressed else DisplayServer.VSYNC_DISABLED)
