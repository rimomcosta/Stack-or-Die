const GAME_CONFIG = {
    // Game title
    GAME_TITLE: "Stack or Die",

    // Instructions
    INSTRUCTIONS: [
        "Stack the blocks as high as you can!",
        '',
        "Click or press space to place a block.",
    ],

    // Canvas and scaling
    INITIAL_WIDTH: 400,
    INITIAL_HEIGHT: 600,
    ASPECT_RATIO: 2 / 3,

    // Block properties
    INITIAL_BLOCK_SPEED: 2,
    INITIAL_BLOCK_WIDTH: 100,
    BLOCK_HEIGHT: 20,

    MIN_PLACE_TIME: 5,  // Minimum time to place a block (in seconds)
    MAX_PLACE_TIME: 10,  // Maximum time to place a block (in seconds)
    PLACE_TIME_DECREASE_FACTOR: 0.95,

    // Game mechanics
    GRAVITY: 0.5,
    MAX_LIVES: 3,
    LEVEL_UP_THRESHOLD: 0.8,
    SPEED_INCREASE_FACTOR: 1.15,
    SNAP_THRESHOLD: 5,

    // Power-ups
    POWER_UP_CHANCE: 0.002,
    POWER_UP_FALL_SPEED: 0.5,
    POWER_UP_WIGGLE_SPEED: 0.05,
    POWER_UP_WIGGLE_AMPLITUDE: 2,
    POWER_UP_RADIUS: 10,
    EXTRA_LIFE_CHANCE: 0.3,

    // Visuals
    BACKGROUND_COLOR: 'white',
    BLOCK_COLOR: 'black',
    FALLING_BLOCK_COLOR: 'gray',
    POWER_UP_COLOR: 'blue',
    EXTRA_LIFE_COLOR: 'red',
    POWER_UP_STROKE_COLOR: 'white',
    TEXT_COLOR: 'black',
    FLASH_COLOR: 'red',
    GAME_OVER_OVERLAY_COLOR: 'rgba(0, 0, 0, 0.5)',
    GAME_OVER_TEXT_COLOR: 'white',
    FONT_FAMILY: 'Arial, sans-serif',
    TIME_BAR_COLOR: 'red',

    // Effects
    PARTICLE_SHADOW_COLOR: "rgba(0, 0, 0, 0.5)",
    PARTICLE_SHADOW_BLUR: 5,
    PARTICLE_SHADOW_OFFSET_X: 2,
    PARTICLE_SHADOW_OFFSET_Y: 2,
    PARTICLE_COUNT: 20,
    MAX_PARTICLES: 100,
    MIN_PARTICLE_SIZE_RATIO: 0.03,
    MAX_PARTICLE_SIZE_RATIO: 0.2,
    FLASH_DURATION: 100,
    FLASH_COUNT: 3,

    // Timings
    GAME_OVER_DELAY: 1000,
    LEVEL_UP_DISPLAY_DURATION: 120,

    // Images
    BACKGROUND_IMAGE_SRC: "background.png",
    BACKGROUND_IMAGE_SRC_MOBILE: "background_mobile.png",
    BAR_IMAGE_SRC: "bricks.jpg",
    POWER_UP_IMAGE_SRC: "ball.png",
    EXTRA_LIFE_IMAGE_SRC: "life.png",

    // Audio
    AUDIO: {
        BACKGROUND_MUSIC: "https://main--stackordie.netlify.app/stackordie.mp3",
        MAIN_SCREEN_MUSIC: "https://main--stackordie.netlify.app/mainscreen.mp3",
        GAME_OVER_MUSIC: "https://main--stackordie.netlify.app/gameover.mp3",
        BLOCK_PLACE: null,
        BLOCK_FALL: null,
        POWER_UP_COLLECT: null,
        EXTRA_LIFE_COLLECT: null,
        LEVEL_UP: null,
        GAME_OVER: null,
        EDGE_LEFT: null,
        EDGE_RIGHT: null,
        BLOCK_BREAK: null,
        BLOCK_SLICE: null,
    },

    // UI Elements
    UI: {
        START_BUTTON_TEXT: "Start Game",
        TRY_AGAIN_BUTTON_TEXT: "Try Again",
        PAUSE_BUTTON_TEXT: "Pause",
        RESUME_BUTTON_TEXT: "Resume",
        LOADING_TEXT: "Loading...",
    },

    // Styles
    STYLES: {
        BUTTON_BACKGROUND_COLOR: '#4caf50',
        BUTTON_TEXT_COLOR: 'white',
        BUTTON_HOVER_BACKGROUND_COLOR: '#45a049',
        PAUSE_BUTTON_BACKGROUND_COLOR: '#ff9800',
        PAUSE_BUTTON_HOVER_BACKGROUND_COLOR: '#e68900',
        TITLE_COLOR: '#333',
        INSTRUCTIONS_COLOR: '#333',
    }
};