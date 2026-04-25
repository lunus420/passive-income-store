extends Node

# Audio bus indices
const MASTER_BUS: int = 0
const MUSIC_BUS: int = 1
const SFX_BUS: int = 2

# Audio players
var music_player: AudioStreamPlayer
var sfx_player: AudioStreamPlayer
var collision_sfx: AudioStreamPlayer
var pocket_sfx: AudioStreamPlayer
var cue_sfx: AudioStreamPlayer

# Audio streams (will be loaded from assets)
var background_music: AudioStream
var ball_collision_sound: AudioStream
var ball_pocket_sound: AudioStream
var cue_hit_sound: AudioStream
var cushion_hit_sound: AudioStream
var menu_click_sound: AudioStream
var win_sound: AudioStream
var lose_sound: AudioStream

# Volume settings
var master_volume: float = 1.0
var music_volume: float = 0.7
var sfx_volume: float = 0.8

func _ready() -> void:
    setup_audio_buses()
    create_audio_players()
    load_audio_assets()
    apply_volume_settings()

func setup_audio_buses() -> void:
    # Create audio buses if they don't exist
    var index = AudioServer.get_bus_count()
    
    AudioServer.add_bus(index)
    AudioServer.set_bus_name(index, "Music")
    AudioServer.set_bus_volume_db(index, linear_to_db(music_volume))
    
    AudioServer.add_bus(index + 1)
    AudioServer.set_bus_name(index + 1, "SFX")
    AudioServer.set_bus_volume_db(index + 1, linear_to_db(sfx_volume))

func create_audio_players() -> void:
    # Music player
    music_player = AudioStreamPlayer.new()
    music_player.bus = "Music"
    add_child(music_player)
    
    # General SFX player
    sfx_player = AudioStreamPlayer.new()
    sfx_player.bus = "SFX"
    add_child(sfx_player)
    
    # Collision SFX (for multiple overlapping sounds)
    collision_sfx = AudioStreamPlayer.new()
    collision_sfx.bus = "SFX"
    add_child(collision_sfx)
    
    # Pocket SFX
    pocket_sfx = AudioStreamPlayer.new()
    pocket_sfx.bus = "SFX"
    add_child(pocket_sfx)
    
    # Cue hit SFX
    cue_sfx = AudioStreamPlayer.new()
    cue_sfx.bus = "SFX"
    add_child(cue_sfx)

func load_audio_assets() -> void:
    # Load audio files from assets/audio directory
    # For now, we'll create procedural sounds or use placeholders
    
    # Background music - will be loaded from file
    if ResourceLoader.exists("res://assets/audio/background_music.ogg"):
        background_music = load("res://assets/audio/background_music.ogg")
    else:
        background_music = create_procedural_music()
    
    # Sound effects
    if ResourceLoader.exists("res://assets/audio/ball_collision.ogg"):
        ball_collision_sound = load("res://assets/audio/ball_collision.ogg")
    else:
        ball_collision_sound = create_procedural_collision_sound()
    
    if ResourceLoader.exists("res://assets/audio/ball_pocket.ogg"):
        ball_pocket_sound = load("res://assets/audio/ball_pocket.ogg")
    else:
        ball_pocket_sound = create_procedural_pocket_sound()
    
    if ResourceLoader.exists("res://assets/audio/cue_hit.ogg"):
        cue_hit_sound = load("res://assets/audio/cue_hit.ogg")
    else:
        cue_hit_sound = create_procedural_cue_sound()
    
    if ResourceLoader.exists("res://assets/audio/cushion_hit.ogg"):
        cushion_hit_sound = load("res://assets/audio/cushion_hit.ogg")
    else:
        cushion_hit_sound = create_procedural_cushion_sound()
    
    if ResourceLoader.exists("res://assets/audio/menu_click.ogg"):
        menu_click_sound = load("res://assets/audio/menu_click.ogg")
    
    if ResourceLoader.exists("res://assets/audio/win.ogg"):
        win_sound = load("res://assets/audio/win.ogg")
    
    if ResourceLoader.exists("res://assets/audio/lose.ogg"):
        lose_sound = load("res://assets/audio/lose.ogg")

func create_procedural_music() -> AudioStream:
    # Create a simple ambient background music using AudioStreamGenerator
    var generator = AudioStreamGenerator.new()
    generator.buffer_length = 2.0
    generator.mix_rate = 44100.0
    return generator

func create_procedural_collision_sound() -> AudioStream:
    # Create a procedural ball collision sound
    var generator = AudioStreamGenerator.new()
    generator.buffer_length = 0.5
    generator.mix_rate = 44100.0
    return generator

func create_procedural_pocket_sound() -> AudioStream:
    # Create a procedural ball pocket sound
    var generator = AudioStreamGenerator.new()
    generator.buffer_length = 0.3
    generator.mix_rate = 44100.0
    return generator

func create_procedural_cue_sound() -> AudioStream:
    # Create a procedural cue hit sound
    var generator = AudioStreamGenerator.new()
    generator.buffer_length = 0.2
    generator.mix_rate = 44100.0
    return generator

func create_procedural_cushion_sound() -> AudioStream:
    # Create a procedural cushion hit sound
    var generator = AudioStreamGenerator.new()
    generator.buffer_length = 0.3
    generator.mix_rate = 44100.0
    return generator

func apply_volume_settings() -> void:
    AudioServer.set_bus_volume_db(MASTER_BUS, linear_to_db(master_volume))
    AudioServer.set_bus_volume_db(MUSIC_BUS, linear_to_db(music_volume))
    AudioServer.set_bus_volume_db(SFX_BUS, linear_to_db(sfx_volume))

func play_music(loop: bool = true) -> void:
    if background_music:
        music_player.stream = background_music
        music_player.play()
        if loop:
            music_player.finished.connect(music_player.play)

func stop_music() -> void:
    music_player.stop()

func play_ball_collision(intensity: float = 1.0) -> void:
    if ball_collision_sound:
        collision_sfx.stream = ball_collision_sound
        collision_sfx.volume_db = linear_to_db(intensity * sfx_volume)
        collision_sfx.play()

func play_ball_pocket() -> void:
    if ball_pocket_sound:
        pocket_sfx.stream = ball_pocket_sound
        pocket_sfx.volume_db = linear_to_db(sfx_volume)
        pocket_sfx.play()

func play_cue_hit(power: float = 1.0) -> void:
    if cue_hit_sound:
        cue_sfx.stream = cue_hit_sound
        cue_sfx.volume_db = linear_to_db(power * sfx_volume)
        cue_sfx.play()

func play_cushion_hit() -> void:
    if cushion_hit_sound:
        sfx_player.stream = cushion_hit_sound
        sfx_player.volume_db = linear_to_db(sfx_volume)
        sfx_player.play()

func play_menu_click() -> void:
    if menu_click_sound:
        sfx_player.stream = menu_click_sound
        sfx_player.volume_db = linear_to_db(sfx_volume)
        sfx_player.play()

func play_win_sound() -> void:
    if win_sound:
        sfx_player.stream = win_sound
        sfx_player.volume_db = linear_to_db(sfx_volume)
        sfx_player.play()

func play_lose_sound() -> void:
    if lose_sound:
        sfx_player.stream = lose_sound
        sfx_player.volume_db = linear_to_db(sfx_volume)
        sfx_player.play()

func set_master_volume(volume: float) -> void:
    master_volume = clamp(volume, 0.0, 1.0)
    AudioServer.set_bus_volume_db(MASTER_BUS, linear_to_db(master_volume))

func set_music_volume(volume: float) -> void:
    music_volume = clamp(volume, 0.0, 1.0)
    AudioServer.set_bus_volume_db(MUSIC_BUS, linear_to_db(music_volume))

func set_sfx_volume(volume: float) -> void:
    sfx_volume = clamp(volume, 0.0, 1.0)
    AudioServer.set_bus_volume_db(SFX_BUS, linear_to_db(sfx_volume))

func get_master_volume() -> float:
    return master_volume

func get_music_volume() -> float:
    return music_volume

func get_sfx_volume() -> float:
    return sfx_volume

func linear_to_db(linear: float) -> float:
    if linear < 0.0001:
        return -80.0
    return 20.0 * log(linear) / log(10.0)
