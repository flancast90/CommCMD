const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
var bodyParser = require('body-parser');
const io = new Server(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const BUILDPATH = path.join(__dirname);
app.use(express.static(BUILDPATH));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', { root: BUILDPATH });
});

io.on('connection', (socket) => {
  socket.on('join', function (data) {
    socket.join(data.uname); // We are using room of socket io
    console.log(data.uname+' connected');
   socket.on('disconnect', () => {
        console.log(data.uname+' disconnected');
    });
  });
});

app.post('/send', function (req, res) {
    var post_body = req.body;

    var id = (JSON.stringify(post_body.id)).split('"')[1].split('"')[0];
    var payload = JSON.stringify(post_body.payload);
    var user = (JSON.stringify(post_body.user)).split('"')[1].split('"')[0];
    
    console.log(id); 
    console.log(payload);
    console.log(user);   
    
    io.sockets.in(id).emit('message', {msg: `User `+user+` said: `+payload});
    //io.to(id).emit('testerEvent', { description: `User `+user+` said: `+payload});

    res.status(200);

});


server.listen(8000, () => {
  console.log('🚀 Client Running on: http://localhost:8000');
});


