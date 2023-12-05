import * as socketio from "socketio";

export class Net {
    static socket;

    static init() {
        Net.socket = io();
    }

    static send(ev = "", data) {
        Net.socket.send(ev, data);
    }
}

export default { Net }