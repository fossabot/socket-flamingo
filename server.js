var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8081);

io.on('connection', function (socket) {
  socket.on('position', ({x, y}) => {
    io.sockets.emit('position', {x, y});
  });

  socket.on('jump', () => {
    io.sockets.emit('flamingoJump');
  });
});
