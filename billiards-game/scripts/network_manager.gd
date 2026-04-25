extends Node

# Network configuration
const DEFAULT_PORT: int = 7000
const MAX_CLIENTS: int = 4

# Network state
var is_host: bool = false
var is_connected: bool = false
var peer: ENetMultiplayerPeer
var server_ip: String = "127.0.0.1"
var player_id: int = 0
var opponent_id: int = 0

# Game synchronization
var game_state_sync: Dictionary = {}
var sync_interval: float = 0.1  # Sync every 100ms
var sync_timer: float = 0.0

# Signals
signal connected_to_server()
signal disconnected_from_server()
signal player_connected(peer_id: int)
signal player_disconnected(peer_id: int)
signal game_state_received(state: Dictionary)
signal shot_received(shot_data: Dictionary)

func _ready() -> void:
    multiplayer.peer_connected.connect(_on_peer_connected)
    multiplayer.peer_disconnected.connect(_on_peer_disconnected)
    multiplayer.connected_to_server.connect(_on_connected_to_server)
    multiplayer.connection_failed.connect(_on_connection_failed)
    multiplayer.server_disconnected.connect(_on_server_disconnected)

func _process(delta: float) -> void:
    if is_connected:
        sync_timer += delta
        if sync_timer >= sync_interval:
            sync_timer = 0.0
            if is_host:
                broadcast_game_state()

func host_game(port: int = DEFAULT_PORT) -> void:
    peer = ENetMultiplayerPeer.new()
    var error = peer.create_server(port, MAX_CLIENTS)
    
    if error == OK:
        multiplayer.multiplayer_peer = peer
        is_host = true
        is_connected = true
        player_id = 1  # Host is always player 1
        print("Server started on port ", port)
    else:
        print("Failed to start server: ", error)

func join_game(ip: String, port: int = DEFAULT_PORT) -> void:
    peer = ENetMultiplayerPeer.new()
    var error = peer.create_client(ip, port)
    
    if error == OK:
        multiplayer.multiplayer_peer = peer
        is_host = false
        server_ip = ip
        print("Connecting to server at ", ip, ":", port)
    else:
        print("Failed to connect to server: ", error)

func disconnect_from_game() -> void:
    if peer:
        peer.close()
        multiplayer.multiplayer_peer = null
        is_host = false
        is_connected = false
        print("Disconnected from game")

func _on_peer_connected(peer_id: int) -> void:
    print("Player connected: ", peer_id)
    player_connected.emit(peer_id)
    
    if is_host:
        opponent_id = peer_id
        # Send initial game state to new player
        send_game_state_to_peer(peer_id)

func _on_peer_disconnected(peer_id: int) -> void:
    print("Player disconnected: ", peer_id)
    player_disconnected.emit(peer_id)
    
    if peer_id == opponent_id:
        opponent_id = 0

func _on_connected_to_server() -> void:
    print("Connected to server")
    is_connected = true
    player_id = multiplayer.get_unique_id()
    connected_to_server.emit()

func _on_connection_failed() -> void:
    print("Connection failed")
    is_connected = false

func _on_server_disconnected() -> void:
    print("Server disconnected")
    is_connected = false
    disconnected_from_server.emit()

# RPC functions
@rpc("any_peer", "reliable")
func receive_shot(shot_data: Dictionary) -> void:
    shot_received.emit(shot_data)

@rpc("any_peer", "reliable")
func receive_game_state(state: Dictionary) -> void:
    game_state_sync = state
    game_state_received.emit(state)

@rpc("any_peer", "reliable")
func receive_chat_message(message: String) -> void:
    # Handle chat messages
    print("Chat: ", message)

# Send functions
func send_shot(shot_data: Dictionary) -> void:
    if is_connected:
        receive_shot.rpc(shot_data)

func broadcast_game_state() -> void:
    if is_host and is_connected:
        var state = get_current_game_state()
        receive_game_state.rpc(state)

func send_game_state_to_peer(peer_id: int) -> void:
    if is_host:
        var state = get_current_game_state()
        receive_game_state.rpc_id(peer_id, state)

func send_chat_message(message: String) -> void:
    if is_connected:
        receive_chat_message.rpc(message)

func get_current_game_state() -> Dictionary:
    # Gather current game state from GameManager
    var state = {
        "current_player": GameManager.current_player,
        "game_mode": GameManager.current_game_mode,
        "player_scores": GameManager.player_scores,
        "balls_potted": GameManager.balls_potted,
        "player_groups": GameManager.player_groups,
        "balls": get_balls_state()
    }
    return state

func get_balls_state() -> Array:
    var balls_state = []
    # Get ball positions and velocities from PhysicsManager
    for ball_data in PhysicsManager.balls:
        balls_state.append({
            "number": ball_data.number,
            "position": var_to_str(ball_data.node.global_position),
            "velocity": var_to_str(ball_data.node.linear_velocity)
        })
    return balls_state

func apply_game_state(state: Dictionary) -> void:
    # Apply received game state to local game
    GameManager.current_player = state["current_player"]
    GameManager.current_game_mode = state["game_mode"]
    GameManager.player_scores = state["player_scores"]
    GameManager.balls_potted = state["balls_potted"]
    GameManager.player_groups = state["player_groups"]
    
    # Apply ball states
    apply_balls_state(state["balls"])

func apply_balls_state(balls_state: Array) -> void:
    for ball_state in balls_state:
        var ball_data = PhysicsManager.balls.filter(func(b): return b.number == ball_state["number"])
        if not ball_data.is_empty():
            ball_data[0].node.global_position = str_to_var(ball_state["position"])
            ball_data[0].node.linear_velocity = str_to_var(ball_state["velocity"])

func get_latency() -> float:
    if peer:
        return peer.get_peer(1).get_stat(ENetPacketPeerPeerSTATLATENCY) / 1000.0
    return 0.0

func is_network_game() -> bool:
    return is_connected and not is_host

func get_player_count() -> int:
    if is_host and peer:
        return peer.get_peers().size() + 1  # +1 for host
    return 1
