import { WebSocketServer, WebSocket } from "ws";
import { sub, CHANNEL } from "../redis/client.js";
import { broadcastToRoom, leaveAllRooms } from "./rooms.js";
import { handleMessage } from "./handler.js";


export const startServer=(port: number)=>{
    const wss =new WebSocketServer({port});
    //subscribe to chat channel
    sub.subscribe(CHANNEL);

    sub.on('message', (channel, data)=>{
        if(channel!== CHANNEL) return;

        try {
            const parse=JSON.parse(data);
            broadcastToRoom(parse.roomId, data)
        } catch (error) {
            console.error('Invalid message from Redis');
        }
    })

    wss.on('connection', (ws: WebSocket)=>{
        ws.on('message', (data)=> {
            console.log("data recieved")
            handleMessage(ws, data.toString())
            console.log("message handelled")
        })

        ws.on('close', () => {
        leaveAllRooms(ws);

        });

        ws.on('error', console.error);
    })

    console.log(`WS Server running on port ${port}`);
}