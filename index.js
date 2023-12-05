const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { Game } = require('./server_src/game.js');

const PORT = 3000;

function main() {
  initGame();
  initHttp();
  initSocket();
  listen();
}

function initSocket() {
  // fires when a websocket client connects
  io.on('connection', (socket) => {
    console.log('a user connected');

    // fires when the message 'test' is sent from the client
    socket.on('test', () => {
      // ...
    });
  });
}

function initHttp() {
  app.use(express.static(__dirname + '/public'));

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
}

function initGame() {
  Game.init();
  Game.start();
}

function listen() {
  server.listen(3000, () => {
    console.log('listening on ' + PORT);
  });
}

main();


