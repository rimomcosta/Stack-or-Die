# 🎮 Stack or Die

A challenging and addictive block stacking game built with vanilla JavaScript and HTML5 Canvas. Stack blocks as high as you can while avoiding falls and collecting power-ups!

![Game Screenshot 1](screenshot%201.jpg)
![Game Screenshot 2](screenshot%202.jpg)
![Game Screenshot 3](screenshot%203.jpg)

## 🚀 Play Now

Open `index.html` in your browser or visit the deployed version to start playing immediately!

## 🎯 Game Overview

**Stack or Die** is a precision-based stacking game where players must carefully place blocks to build the tallest tower possible. The game features:

- **Precise Block Placement**: Click, tap, or press spacebar to drop blocks
- **Dynamic Difficulty**: Speed increases with each level
- **Power-up System**: Collect items to restore block width and gain extra lives
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Immersive Audio**: Background music and sound effects

## 🎮 How to Play

### Basic Controls
- **Mouse/Touch**: Click or tap to place blocks
- **Keyboard**: Press **Spacebar** to place blocks
- **Pause**: Press **Escape** to pause/resume

### Gameplay Mechanics
1. **Block Movement**: Blocks move horizontally across the screen
2. **Precision Placement**: Only the overlapping portion with the previous block remains
3. **Tower Building**: Stack blocks higher to advance levels
4. **Life Management**: Start with 3 lives, lose one for missed blocks
5. **Power-ups**: Collect blue orbs to restore block width, red hearts for extra lives

### Scoring System
- **Base Points**: 10 points per successful block placement
- **Width Bonus**: Points based on remaining block width
- **Time Bonus**: Quick placement rewards
- **Level Progression**: Advance when tower reaches 80% screen height

## 🛠️ Technical Features

### Performance Optimizations
- **Mobile-First Rendering**: Automatic device detection and optimization
- **Particle System**: Efficient particle effects with texture caching
- **Delta Time**: Consistent game speed across all devices and refresh rates
- **Responsive Canvas**: Maintains aspect ratio on all screen sizes

### Audio System
- **Web Audio API**: Modern audio implementation
- **Music Management**: Seamless transitions between game states
- **Pause Music**: Main screen music plays when game is paused
- **Gesture Unlock**: Audio unlocks on first user interaction (Chrome compliant)

### Cross-Platform Support
- **Desktop**: Full keyboard and mouse support
- **Mobile**: Touch-optimized controls and performance
- **iOS Safari**: Special optimizations for mobile Safari
- **Responsive UI**: Adapts to all screen sizes

## 📁 Project Structure

```
stack-or-die/
├── index.html                 # Main game file (HTML + JavaScript)
├── config.js                  # Game configuration and constants
├── assets/
│   └── used/                  # Game assets
│       ├── background.png     # Desktop background
│       ├── background_mobile.png # Mobile background
│       ├── bricks.jpg         # Block texture
│       ├── ball.png           # Power-up image
│       ├── life.png           # Extra life image
│       ├── stackordie.mp3     # Game background music
│       ├── mainscreen.mp3     # Main menu music
│       └── gameover.mp3       # Game over music
├── screenshot 1.jpg           # Gameplay screenshot
├── screenshot 2.jpg           # Game over screenshot
├── screenshot 3.jpg           # Main menu screenshot
├── _headers                   # Netlify CORS headers
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## ⚙️ Configuration

The game is highly configurable through `config.js`:

### Game Settings
- **Block Speed**: Initial and progressive speed increases
- **Gravity**: Realistic falling physics (0.15)
- **Lives**: Maximum lives and difficulty scaling
- **Level Thresholds**: Advancement criteria

### Power-up System
- **Spawn Rate**: `POWER_UP_CHANCE: 0.001` (0.1% chance per frame)
- **Fall Speed**: `POWER_UP_FALL_SPEED: 0.3` with variance
- **Variability**: `POWER_UP_FALL_SPEED_VARIANCE: 0.3` (30% speed variation)
- **Types**: Width restoration, extra lives, golden blocks

### Visual Settings
- **Colors**: Customizable block, background, and UI colors
- **Effects**: Particle shadows, flash effects, gradients
- **Fonts**: Scalable typography for all screen sizes

## 🔧 Recent Fixes & Improvements

### ✅ Performance Issues Resolved
- **Mobile Particle Rendering**: Fixed severe lag on mobile devices
- **Game Speed Consistency**: Implemented proper delta time calculation
- **Power-up Movement**: Balanced fall speeds with variance system
- **Audio Initialization**: Chrome autoplay policy compliant

### ✅ Gameplay Enhancements
- **Pause Music**: Main screen music plays when game is paused
- **Music Restart**: Background music starts fresh on game restart
- **Power-up Variance**: Each power-up has unique fall speed for visual interest
- **Responsive Physics**: Gravity and movement scale properly with screen size

### ✅ Code Quality
- **Comment-Free Code**: Clean, maintainable JavaScript
- **Asset Organization**: Structured asset management
- **Error Handling**: Robust audio and image loading
- **Cross-Browser Compatibility**: Works on all modern browsers

## 🌐 Browser Compatibility

- **Chrome/Edge**: Full support with Web Audio API
- **Firefox**: Complete compatibility
- **Safari**: Optimized for iOS and macOS
- **Mobile Browsers**: Touch-optimized controls and performance

## 🚀 Getting Started

### Quick Start
1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Click anywhere to start the main screen music
4. Click "Start Game" to begin playing

### Development
1. **No Build Process**: Pure vanilla JavaScript
2. **Live Reload**: Use any local server (Python, Node.js, etc.)
3. **Configuration**: Modify `config.js` for game tuning
4. **Assets**: Add new images/audio to `assets/used/`

### Local Server
```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx http-server

# PHP
php -S localhost:8080
```

## 🎵 Audio Features

### Music Tracks
- **Main Screen**: Relaxing menu music (`mainscreen.mp3`)
- **Gameplay**: Energetic background music (`stackordie.mp3`)
- **Game Over**: Dramatic ending music (`gameover.mp3`)

### Audio Management
- **Smart Transitions**: No overlapping music between states
- **Pause Integration**: Main screen music plays when game is paused
- **Gesture Unlock**: Audio unlocks on first user interaction
- **Performance**: Efficient audio context management

## 🎨 Visual Features

### Rendering System
- **Canvas 2D**: Hardware-accelerated graphics
- **Particle Effects**: Dynamic block break animations
- **Responsive Design**: Scales to any screen size
- **Mobile Optimization**: Device-specific rendering paths

### Visual Effects
- **Shadows**: Realistic depth with shadow mapping
- **Gradients**: Golden blocks for privileged status
- **Animations**: Smooth transitions and movements
- **Particle Systems**: Efficient texture caching

## 🏆 Game Features

### Core Mechanics
- **Precision Stacking**: Only overlapping portions remain
- **Dynamic Speed**: Increases with each level
- **Life System**: Manage your 3 lives carefully
- **Power-ups**: Strategic collection for survival

### Advanced Features
- **Level Progression**: Unlock new challenges
- **Score Tracking**: Compete for high scores
- **Pause System**: Take breaks with music
- **Mobile Support**: Touch-optimized controls

## 🔍 Troubleshooting

### Common Issues
- **Audio Not Playing**: Click anywhere on the page first (Chrome autoplay policy)
- **Performance Issues**: Game automatically optimizes for your device
- **Touch Controls**: Ensure you're using a touch-enabled device

### Performance Tips
- **Mobile Devices**: Game automatically uses optimized rendering
- **High Refresh Rates**: Delta time ensures consistent speed
- **Large Screens**: Physics scale automatically with screen size

## 📱 Mobile Experience

### Touch Optimization
- **Responsive Controls**: Touch-friendly button sizes
- **Performance**: Automatic mobile detection and optimization
- **Orientation**: Supports both portrait and landscape
- **iOS Safari**: Special optimizations for mobile Safari

### Mobile Features
- **Touch Events**: Native touch support
- **Performance Scaling**: Automatic quality adjustment
- **Battery Optimization**: Efficient rendering and audio

## 🎯 Future Enhancements

### Planned Features
- **Leaderboards**: Global score tracking
- **Achievements**: Unlockable milestones
- **Custom Themes**: Multiple visual styles
- **Sound Effects**: Enhanced audio feedback

### Technical Improvements
- **WebGL Rendering**: Hardware acceleration
- **Progressive Web App**: Offline support
- **Multiplayer**: Competitive stacking
- **Analytics**: Player behavior tracking

## 🤝 Contributing

### Development Guidelines
- **Vanilla JavaScript**: No frameworks or build tools
- **Performance First**: Optimize for mobile devices
- **Cross-Browser**: Ensure compatibility
- **Clean Code**: Maintainable and readable

### Asset Guidelines
- **Image Formats**: PNG/JPG for textures, WebP for optimization
- **Audio Formats**: MP3 for compatibility, OGG for efficiency
- **File Sizes**: Optimize for web delivery
- **Organization**: Keep used assets in `assets/used/`

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **HTML5 Canvas API** for powerful 2D graphics
- **Web Audio API** for immersive sound experience
- **Modern Browser Support** for cross-platform compatibility
- **Performance Optimization** techniques for mobile gaming

---

**Ready to stack? Open `index.html` and start building your tower!** 🏗️✨
