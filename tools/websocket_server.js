#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function () {
    console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}
const data = [
    { id: "Fight1", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight2", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight3", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight4", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight5", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight6", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight7", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight8", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight9", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },
    { id: "Fight0", createdAt: 1618991446000 , eventType: "fight", camera: "Camera1", image: "https://wallpaperaccess.com/full/138733.jpg", image_res: "https://wallpaperaccess.com/full/138733.jpg", time: "time" },

]
wsServer.on('request', function (request) {
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }

    var connection = request.accept('echo-protocol', request.origin);

    console.log((new Date()) + ' Connection accepted.');
    key = 0
    let id_interval = setInterval(function () {
        console.log(key)
        connection.send(JSON.stringify(data[key]))
        key = key + 1
        if (key == data.length){
            key = 0
        }
    }, 3000)

    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function (reasonCode, description) {
        clearInterval(id_interval)
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});