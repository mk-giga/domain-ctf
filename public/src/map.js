import { Game } from './game.js';

export const REGION_SIZE = 16;
export const REGION_RENDER_RADIUS = 3;

export class Map {
    static regions = [];

    /* References to other objects */
    static gameReference = null;
    static rendererReference = null;
    static cameraReference = null;
    
    static init() {
        this.gameReference = Game;
        Map.regions = [];
    }

    static initArray() {
        for (let x = 0; x < REGION_RENDER_RADIUS; x++) {
            Map.regions[x] = [];
            for (let y = 0; y < REGION_RENDER_RADIUS; y++) {
                console.log('test');
                Map.regions[x][y] = [];
            }
        }
    }

    static initializeEmpty() {
        for (let x = 0; x < REGION_RENDER_RADIUS; x++) {
            for (let y = 0; y < REGION_RENDER_RADIUS; y++) {
                Map.regions[x][y] = new GridTerrainMesh({}, {}, {});
            }
        }
    }
}

export class GridTerrainMesh {

    constructor(heights = {}, colors = {}, textures = {}) {
        this.setHeights(heights);
        this.setColors(colors);
        this.setTextures(textures);
    }

    setHeights(heightFlags = {}) {
        this.heights = heightFlags;
    }

    setColors(colorFlags = {}) {
        this.colors = colorFlags;
    }

    setTextures(textureFlags = {}) {
        this.textures = textureFlags;
    }
}

export function indexFromCoords(x, y) {
    return (y % REGION_SIZE) + x;
}

export function coordsFromIndex(i) {
    let x = i % REGION_SIZE;
    let y = Math.floor(i / REGION_SIZE);
    return { x: x, y: y};
}

export default { Map, GridTerrainMesh, indexFromCoords, coordsFromIndex }