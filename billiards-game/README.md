# Ultimate 3D Billiards

A professional-grade 3D billiards game built with Godot Engine, featuring realistic physics, multiple game modes, AI opponents, and online multiplayer support.

## Features

### Core Gameplay
- **Realistic Physics Engine**: Custom ball physics with accurate collision detection, friction, spin (English), and cushion rebounds
- **Multiple Game Modes**: 8-Ball, 9-Ball, Snooker, Straight Pool, and Practice Mode
- **Professional AI Opponents**: 5 difficulty levels (Easy, Medium, Hard, Expert, Master) with strategic shot selection
- **Online Multiplayer**: Real-time multiplayer with network synchronization

### Controls
- **Aiming**: WASD or Arrow keys to rotate cue stick
- **Power**: Hold SPACE or Left Mouse Button to charge shot power
- **English (Spin)**: Q/E for side spin, R/F for top/bottom spin
- **Camera**: V to toggle camera views (Follow, Top-down, Free)
- **Pause**: ESC to open pause menu

### Graphics & Audio
- **3D Rendering**: PBR materials, dynamic lighting, and shadows
- **Immersive Audio**: Realistic ball collision sounds, pocket sounds, and ambient music
- **Customizable Settings**: Graphics quality, volume controls, VSync

## Project Structure

```
billiards-game/
├── project.godot          # Godot project configuration
├── scenes/
│   └── main_game.tscn     # Main game scene
├── scripts/
│   ├── game_manager.gd    # Game state and rules management
│   ├── physics_manager.gd # Physics engine and ball collisions
│   ├── audio_manager.gd   # Audio system and sound effects
│   ├── network_manager.gd # Multiplayer networking
│   ├── table.gd           # 3D table creation and materials
│   ├── ball.gd            # Ball physics and rendering
│   ├── cue_stick.gd       # Cue stick controls and aiming
│   ├── ai_player.gd       # AI opponent logic
│   └── main_game.gd       # Main game controller
├── assets/
│   ├── models/            # 3D models (optional)
│   ├── textures/          # Textures (optional)
│   └── audio/             # Sound effects and music
└── ui/                    # UI scenes (optional)
```

## Getting Started

### Prerequisites
- **Godot Engine 4.2+**: Download from [godotengine.org](https://godotengine.org)
- No additional dependencies required

### Installation

1. **Clone or download** this project
2. **Open Godot Engine**
3. **Import Project**: Click "Import" and select the `billiards-game` folder
4. **Run the Game**: Press F5 or click the Play button

### Building for Export

#### Windows
1. Go to Project > Export
2. Add Windows Desktop preset
3. Configure export settings
4. Click "Export Project"

#### Linux
1. Go to Project > Export
2. Add Linux/X11 preset
3. Configure export settings
4. Click "Export Project"

#### macOS
1. Go to Project > Export
2. Add macOS preset
3. Configure export settings
4. Click "Export Project"

#### Android
1. Install Android SDK and JDK
2. Configure export templates in Godot
3. Add Android preset
4. Configure export settings
5. Click "Export Project"

#### Web (HTML5)
1. Go to Project > Export
2. Add Web preset
3. Configure export settings
4. Click "Export Project"

## Game Rules

### 8-Ball
- **Objective**: Pot all your group (solids 1-7 or stripes 9-15), then pot the 8-ball
- **Break**: Cue ball must hit the rack
- **Fouls**: Scratching (potting cue ball), failing to hit your group first, potting 8-ball early
- **Win**: Pot 8-ball after clearing your group

### 9-Ball
- **Objective**: Pot the 9-ball
- **Rule**: Must always hit the lowest numbered ball first
- **Win**: Pot 9-ball (can be done early via combination)
- **Fouls**: Same as 8-ball

### Snooker
- **Objective**: Score more points than opponent
- **Scoring**: Red (1), Yellow (2), Green (3), Brown (4), Blue (5), Pink (6), Black (7)
- **Rules**: Alternate between red and colored balls
- **Win**: Highest score when all balls potted or opponent concedes

### Straight Pool
- **Objective**: Reach target score (default: 100)
- **Rules**: Pot any ball, cue ball stays in play unless scratched
- **Scoring**: 1 point per ball potted
- **Win**: First to reach target score

## AI Difficulty Levels

- **Easy**: 50% accuracy, basic shots, no strategy
- **Medium**: 70% accuracy, considers next shot
- **Hard**: 85% accuracy, 2-move lookahead
- **Expert**: 92% accuracy, 3-move lookahead, advanced positioning
- **Master**: 98% accuracy, 4-move lookahead, near-perfect play

## Customization

### Adding Custom Textures
1. Place texture files in `assets/textures/`
2. Update material references in `table.gd` and `ball.gd`

### Adding Custom Audio
1. Place audio files in `assets/audio/`
2. Supported formats: OGG, WAV, MP3
3. Update `audio_manager.gd` to load custom files

### Modifying Physics
Edit constants in `physics_manager.gd`:
- `BALL_RADIUS`: Ball size
- `BALL_MASS`: Ball weight
- `TABLE_FRICTION`: Rolling resistance
- `BALL_RESTITUTION`: Bounciness

## Development

### Adding New Game Modes
1. Add mode to `GameMode` enum in `game_manager.gd`
2. Implement rules in `check_win_condition()`
3. Add UI button in `main_game.gd`

### Extending AI
1. Add new evaluation functions in `ai_player.gd`
2. Implement shot selection logic
3. Adjust difficulty parameters

### Network Multiplayer
The game includes basic multiplayer support. To extend:
1. Implement lobby system in `network_manager.gd`
2. Add matchmaking service integration
3. Implement spectator mode

## Performance Tips

- **Low-end systems**: Reduce graphics quality to Low in Settings
- **High-end systems**: Enable shadows and increase texture quality
- **Mobile**: Use Medium quality, disable shadows

## Known Issues

- Ball tunneling at very high speeds (rare)
- AI may occasionally miss easy shots on lower difficulties
- Network latency may affect multiplayer sync

## Future Enhancements

- [ ] Tournament mode
- [ ] Custom table designs
- [ ] Ball customization
- [ ] Replay system
- [ ] Achievement system
- [ ] Leaderboards
- [ ] VR support
- [ ] Motion controls

## License

This project is open source and free to use for personal and commercial projects.

## Credits

Built with Godot Engine 4.2
Physics based on real-world billiard physics
AI inspired by professional pool strategies

## Support

For issues, questions, or contributions, please refer to the project repository.

## Version History

- **v1.0.0**: Initial release
  - Core gameplay (8-ball, 9-ball, snooker, straight pool)
  - Realistic physics engine
  - AI opponents with 5 difficulty levels
  - Basic multiplayer support
  - Full UI with menus and settings
