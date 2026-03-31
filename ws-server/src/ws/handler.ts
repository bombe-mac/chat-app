import { pub, CHANNEL } from "../redis/client.js";
import type {IncomingMessage}  from "../types/message.js";
import { joinRoom } from "./rooms.js";
import {WebSocket} from "ws";

export const handleMessage = async (ws: WebSocket, data: string) => {
    let parsed: IncomingMessage;

    try {
        parsed = JSON.parse(data);
    } catch {
        return; // invalid JSON
    }

    if (!parsed.roomId || !parsed.type) return;

    if (parsed.type === "join-room") {
        console.log("joining room...")
        joinRoom(parsed.roomId, ws);
        return;
    }

    if (parsed.type === "chat") {
        console.log("publishing...")
        await pub.publish(CHANNEL, data);
    }
};