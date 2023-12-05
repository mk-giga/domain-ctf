import * as THREE from "three";
import { Map } from './map.js';
import { Net } from "./net.js";


export class Game {
    static FPS = 60;

    static renderer;
    static viewport;
    static camera;
    static scene;

    static cube;

    /* Will have the uid to the interval timer for the main game loop */
    static loopTimer = null;

    static {
        
        Game.scene = new THREE.Scene();
        Game.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        Game.renderer = new THREE.WebGLRenderer();
        
        // test
        Game.cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0x543d3c }));
    }

    static initGlobalSingletons() {
        Map.init();
        Net.init();
    }

    static start() {
        Game.initGlobalSingletons();
        
        Map.initArray();
        Map.initializeEmpty();

        Game.initScene();
        Game.loopTimer = setInterval(()=>{
            this.loop();
        }, 1000/Game.FPS);
    }

    static lastFrameTime = Date.now();
    
    static loop() {
        let delta = Date.now() - Game.lastFrameTime;
        Game.update(delta);
        requestAnimationFrame(Game.render);
        Game.lastFrameTime = Date.now();
    }

    static update(delta) {
        
    }

    static render() {
        Game.cube.rotation.x += 0.01;
        Game.cube.rotation.y += 0.01;
	    Game.renderer.render( Game.scene, Game.camera );
    }

    static initScene() {
        Game.renderer.setSize( window.innerWidth, window.innerHeight );
        
        Game.scene.add( Game.cube );
        Game.camera.position.z = 5;
        
        window.addEventListener('resize', Game.onWindowResize, false);
        document.body.appendChild(Game.renderer.domElement);
    }
    
    static onWindowResize(){
        Game.camera.aspect = window.innerWidth / window.innerHeight;
        Game.camera.updateProjectionMatrix();
        Game.renderer.setSize( window.innerWidth, window.innerHeight );
    
    }
}