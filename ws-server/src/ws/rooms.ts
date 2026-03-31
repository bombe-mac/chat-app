import {WebSocket} from "ws";

interface Room{
    sockets: Set<WebSocket>;
}

const rooms: Record<string, Room>={};

export const joinRoom=(roomId: string, ws: WebSocket)=>{
    if(!rooms[roomId]){
        rooms[roomId]={sockets: new Set()}
    }
    rooms[roomId].sockets.add(ws);
};

//used when leveing the chat window
export const leaveAllRooms=(ws: WebSocket)=>{
    for(const roomId in rooms){
        rooms[roomId]?.sockets.delete(ws);
    }
}


export const broadcastToRoom = (roomId: string, data: string) => {
    rooms[roomId]?.sockets.forEach((socket) => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(data);
        }
    });
};