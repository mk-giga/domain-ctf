class Map {

    constructor() {
        this.regions = {}
    }

    initArray() {
        for (let x = 0; x < REGION_RENDER_RADIUS; x++) {
            this.regions[x] = [];
            for (let y = 0; y < REGION_RENDER_RADIUS; y++) {
                console.log('test');
                this.regions[x][y] = [];
            }
        }
    }

    initializeEmpty() {
        for (let x = 0; x < REGION_RENDER_RADIUS; x++) {
            for (let y = 0; y < REGION_RENDER_RADIUS; y++) {
                this.regions[x][y] = new GridTerrainMesh({}, {}, {});
            }
        }
    }
    addRegion(x, y) {

    }

    modifyRegionTile(x, y, tileType, val) {

    }

    setRegion(x, y, region) {

    }
}

class HeightFlag {
    constructor(height, radius, feather) {
        [
            this.height,
            this.radius,
            this.feather
        ] = [
                height,
                radius,
                feather
            ];
    }
}
class Region {
    constructor(heights = {}, colors = {}, textures = {}, objects = {}, floors, walls = {}, decorations = {}) {
        [
            this.heights,
            this.colors,
            this.textures,
            this.objects,
            this.floors,
            this.walls,
            this.decorations
        ] = [
                heights,
                colors,
                textures,
                objects,
                floors,
                walls,
                decorations
            ];
    }

    setFlagsExample() {
        this.heights = {
            // outer dict represents x position in the tile map
            "2": {
                // inner dict represents y position in the tile map
                "3": {
                    // third level contains all the different flag types with their own respective attributes
                    "height": {
                        // the very innermost dict contains the keys and values of the flags
                        "height": 10, //height of the tile
                        "radius": 4, // circular radius around the tile to elevate other tiles
                        "feather": 2
                    },

                    "color": {
                        "color": 0x00000000,
                        "radius": 10,
                        "feather": 5,
                    },

                    "texture": {

                    }
                },

                "": {
                    "": {
                        "height": 2,
                        "radius": 6,
                        "feather": 4

                    }
                }
            }
        }
    }

    setHeights(heightFlags) {
        this.heights = heightFlags;

    }

    setHeightAt(x, y, height, radius, feather) {
        this.heights[x][y] = { "height": height, "radius": radius, "feather": feather };
    }

    setColors(colorFlags) {

    }

    setTextures(textureFlags) {

    }

}
module.exports = { Map }