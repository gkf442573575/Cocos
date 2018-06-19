const socket = require('socket.io');


const SocketServer = function(server){
    let socketServer = socket(server);
    socketServer.on('connection',function(){
        console.log('socket 连接');
        
    });

    return socketServer;
}

module.exports = SocketServer;