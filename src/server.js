const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const chat = require('./chat');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

io.on('connection', (socket) => {
  socket.on('join', (room) => {
    socket.join(room);
    socket.emit('riwayat', chat.riwayat(room));
  });

  socket.on('pesan', ({ room, pengirim, teks }) => {
    const pesan = chat.tambahPesan(room, pengirim, teks);
    io.to(room).emit('pesan', pesan);
  });
});

server.listen(PORT, () => {
  console.log(`CampusChat berjalan di http://localhost:${PORT}`);
});
