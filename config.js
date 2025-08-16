const GAME_CONFIG = {
    GAME_TITLE: "Stack or Die",

    INSTRUCTIONS: [
        "Stack the blocks as high as you can!",
        '',
        "Click or press space to place a block.",
    ],

    INITIAL_WIDTH: 400,
    INITIAL_HEIGHT: 600,
    ASPECT_RATIO: 2 / 3,

    INITIAL_BLOCK_SPEED: 1.5,
    INITIAL_BLOCK_WIDTH: 100,
    BLOCK_HEIGHT: 20,

    MIN_PLACE_TIME: 5,
    MAX_PLACE_TIME: 10,
    PLACE_TIME_DECREASE_FACTOR: 0.95,

    GRAVITY: 0.15,
    MAX_LIVES: 3,
    LEVEL_UP_THRESHOLD: 0.8,
    SPEED_INCREASE_FACTOR: 1.15,
    SNAP_THRESHOLD: 5,

    POWER_UP_CHANCE: 0.001,
    POWER_UP_FALL_SPEED: 0.3,
    POWER_UP_FALL_SPEED_VARIANCE: 0.3,
    POWER_UP_WIGGLE_SPEED: 0.03,
    POWER_UP_WIGGLE_AMPLITUDE: 1.5,
    POWER_UP_RADIUS: 10,
    EXTRA_LIFE_CHANCE: 0.3,

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

    PARTICLE_SHADOW_COLOR: "rgba(0, 0, 0, 0.5)",
    PARTICLE_SHADOW_BLUR: 5,
    PARTICLE_SHADOW_OFFSET_X: 2,
    PARTICLE_SHADOW_OFFSET_Y: 2,
    PARTICLE_COUNT: 10,
    MAX_PARTICLES: 30,
    MIN_PARTICLE_SIZE_RATIO: 0.03,
    MAX_PARTICLE_SIZE_RATIO: 0.2,
    FLASH_DURATION: 100,
    FLASH_COUNT: 3,

    GAME_OVER_DELAY: 1000,
    LEVEL_UP_DISPLAY_DURATION: 120,

    BACKGROUND_IMAGE_SRC: "assets/used/background.png",
    BACKGROUND_IMAGE_SRC_MOBILE: "assets/used/background_mobile.png",
    BAR_IMAGE_SRC: "assets/used/bricks.jpg",
    POWER_UP_IMAGE_SRC: "assets/used/ball.png",
    EXTRA_LIFE_IMAGE_SRC: "assets/used/life.png",

    AUDIO: {
        BACKGROUND_MUSIC: "assets/used/stackordie.mp3",
        MAIN_SCREEN_MUSIC: "assets/used/mainscreen.mp3",
        GAME_OVER_MUSIC: "assets/used/gameover.mp3",
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

    UI: {
        START_BUTTON_TEXT: "Start Game",
        TRY_AGAIN_BUTTON_TEXT: "Try Again",
        PAUSE_BUTTON_TEXT: "Pause",
        RESUME_BUTTON_TEXT: "Resume",
        LOADING_TEXT: "Loading...",
    },

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