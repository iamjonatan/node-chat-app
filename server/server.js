// JavaScript source code
//https://floating-wildwood-61985.herokuapp.com/

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);             //returns web socket server, used to emit or listen to events

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log("client diconnected!");
    });
});      //listener

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});