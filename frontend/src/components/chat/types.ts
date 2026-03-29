export type ChatRoom = {
  id: string;
  name: string;
  topic?: string;
  createdAt: string;
};

export type ChatMessage = {
  id: string;
  roomId: string;
  sender: string;
  content: string;
  sentAt: string;
};
