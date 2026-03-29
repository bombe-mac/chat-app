
import { WebSocketServer, WebSocket } from 'ws';

// const app = express()
// app.listen(8080)

const wss = new WebSocketServer({ port: 8080 });

interface Room{
  sockets: WebSocket[]
}

const rooms : Record<string, Room>={}

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});