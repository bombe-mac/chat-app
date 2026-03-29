"use client";

import { useMemo, useState } from "react";
import ChatWindow from "@/components/chat/ChatWindow";
import CreateRoomSection from "@/components/chat/CreateRoomSection";
import MessageInput from "@/components/chat/MessageInput";
import RoomHeader from "@/components/chat/RoomHeader";
import Sidebar from "@/components/chat/Sidebar";
import { initialMessages, initialRooms } from "@/components/chat/mockData";
import type { ChatMessage, ChatRoom } from "@/components/chat/types";

const CURRENT_USER = "You";

function generateRoomId() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let token = "";

  for (let index = 0; index < 4; index += 1) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    token += alphabet[randomIndex];
  }

  return `R-${token}`;
}

function generateMessageId() {
  return `M-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export default function ChatPage() {
  const [rooms, setRooms] = useState<ChatRoom[]>(initialRooms);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(initialRooms[0]?.id ?? null);

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) ?? null,
    [rooms, selectedRoomId],
  );

  const selectedRoomMessages = useMemo(
    () => messages.filter((message) => message.roomId === selectedRoomId),
    [messages, selectedRoomId],
  );

  const handleCreateRoom = (roomName: string, topic: string) => {
    const roomId = generateRoomId();
    const newRoom: ChatRoom = {
      id: roomId,
      name: roomName,
      topic,
      createdAt: new Date().toISOString(),
    };

    setRooms((prevRooms) => [newRoom, ...prevRooms]);
    setSelectedRoomId(roomId);
  };

  const handleSendMessage = (content: string) => {
    if (!selectedRoomId) {
      return;
    }

    const newMessage: ChatMessage = {
      id: generateMessageId(),
      roomId: selectedRoomId,
      sender: CURRENT_USER,
      content,
      sentAt: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <main className="min-h-screen bg-[#05070b] text-zinc-100">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-6 lg:px-8">
        <div className="flex min-h-[75vh] flex-col gap-4">
          <CreateRoomSection onCreateRoom={handleCreateRoom} />
          <Sidebar
            rooms={rooms}
            selectedRoomId={selectedRoomId}
            messages={messages}
            onSelectRoom={setSelectedRoomId}
          />
        </div>

        <section className="flex min-h-[75vh] flex-col gap-4">
          {selectedRoom ? (
            <>
              <RoomHeader room={selectedRoom} messageCount={selectedRoomMessages.length} />
              <ChatWindow messages={selectedRoomMessages} currentUser={CURRENT_USER} />
              <MessageInput onSendMessage={handleSendMessage} />
            </>
          ) : (
            <div className="flex min-h-[75vh] items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/40 p-8 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">No room selected</p>
                <h1 className="mt-2 text-2xl font-bold text-zinc-100">Pick a room to start chatting</h1>
                <p className="mt-2 text-zinc-400">
                  Select a room from the sidebar or create a new one.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
