import Net from './net.js';

export class Entity {
    constructor(uuid = "", x, y, z) {
        this.uuid = uuid;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    onLoop() {

    }

    getId() { return this.uuid; }
    getX() { return this.x; }
    getY() { return this.y; }
    getZ() { return this.z; }
}

export class Interactable {
    constructor(uuid, x, y, z, direction, model, animation, examine, visible) {
        super(uuid, x, y, z);
        this.direction = direction;
        this.model = model;
        this.animation = animation;
        this.examine = examine;
        this.visible = visible;
        this.states = {};
    }
}

export class Character extends Interactable {
    constructor(uuid, name, x, y, z, direction, model, animation, examine, visible) {
        super(uuid, x, y, z, direction, model, animation, examine, visible);
        this.name = name;
        
    }

    getName() { return this.name; }
    getDirection() { return this.direction; }
    getModel() { return this.model; }
    getAnimation() { return this.animation; }

    tryAttack() {
        Net.send('attack', { uuid: this.uuid });
    }

    tryTarget() {
        Net.send('target', { uuid: this.uuid })
    }
}

export class Player extends Character {


    constructor(uuid, name, x, y, z, direction, model, animation, examine) {
        super(uuid, name, x, y, z, direction, model, animation, examine, true);
    }
    
    tryReport(reason) {
        Net.send('reportPlayer', { uuid: this.uuid, reason: reason });
    }

    tryDirectMessage(text = "") {
        Net.send('playerMessageDM', { uuid: this.uuid, message: text });
    }
}