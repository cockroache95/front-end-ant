from simple_websocket_server import WebSocketServer, WebSocket
import time
from threading import Thread


class SimpleEcho(WebSocket):
    def __init__(self):
        self.ready_send = True

    def handle(self):
        # echo message back to client
        print(self.data)
        # self.send_message(self.data)

    def connected(self):
        print(self.address, 'connected')
        for i in range(10):
            data = {"key": "Fight"+str(time.time()), "eventtype": "Fight"+str(time.time()),   "image": "https://wallpaperaccess.com/full/138733.jpg",
                    "image_res": "https://wallpaperaccess.com/full/138733.jpg", "time": "time"}
            self.send_message(data)
            time.sleep(3)

    def handle_close(self):
        print(self.address, 'closed')


server = WebSocketServer('0.0.0.0', 8000, SimpleEcho)
server.serve_forever()
