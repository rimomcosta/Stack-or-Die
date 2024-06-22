const GAME_CONFIG = {
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

    // Effects
    PARTICLE_COUNT: 20,
    FLASH_DURATION: 100,
    FLASH_COUNT: 3,

    // Timings
    GAME_OVER_DELAY: 1000,
    LEVEL_UP_DISPLAY_DURATION: 120,

    // Images
    BACKGROUND_IMAGE_SRC: "background.jpg",
    BAR_IMAGE_SRC: "bricks.jpg",
    POWER_UP_IMAGE_SRC: "ball.png",
    EXTRA_LIFE_IMAGE_SRC: "life.png",

    // Audio
    AUDIO: {
        BACKGROUND_MUSIC: null,
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
    }
};