import type { ChatMessage, ChatRoom } from "./types";

const now = Date.now();

export const initialRooms: ChatRoom[] = [
  {
    id: "R-8A2F",
    name: "General",
    topic: "Team-wide updates",
    createdAt: new Date(now - 1000 * 60 * 60 * 8).toISOString(),
  },
  {
    id: "R-91KD",
    name: "Frontend",
    topic: "UI ideas and reviews",
    createdAt: new Date(now - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    id: "R-3PQX",
    name: "Random",
    topic: "Memes and off-topic",
    createdAt: new Date(now - 1000 * 60 * 60 * 2).toISOString(),
  },
];

export const initialMessages: ChatMessage[] = [
  {
    id: "M-001",
    roomId: "R-8A2F",
    sender: "Maya",
    content: "Morning everyone. Daily sync starts in 15 minutes.",
    sentAt: new Date(now - 1000 * 60 * 30).toISOString(),
  },
  {
    id: "M-002",
    roomId: "R-8A2F",
    sender: "Aarav",
    content: "Thanks for the heads-up. I posted blocker notes in docs.",
    sentAt: new Date(now - 1000 * 60 * 22).toISOString(),
  },
  {
    id: "M-003",
    roomId: "R-91KD",
    sender: "Lina",
    content: "I pushed a new navbar concept, please review when free.",
    sentAt: new Date(now - 1000 * 60 * 45).toISOString(),
  },
  {
    id: "M-004",
    roomId: "R-3PQX",
    sender: "Noah",
    content: "Friday playlist thread starts now. Drop your tracks.",
    sentAt: new Date(now - 1000 * 60 * 10).toISOString(),
  },
];
