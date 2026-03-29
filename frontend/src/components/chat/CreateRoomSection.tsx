"use client";

import { useState } from "react";

type CreateRoomSectionProps = {
  onCreateRoom: (roomName: string, topic: string) => void;
};

export default function CreateRoomSection({ onCreateRoom }: CreateRoomSectionProps) {
  const [roomName, setRoomName] = useState("");
  const [topic, setTopic] = useState("");

  const handleCreate = () => {
    const trimmedName = roomName.trim();
    if (!trimmedName) {
      return;
    }

    onCreateRoom(trimmedName, topic.trim());
    setRoomName("");
    setTopic("");
  };

  return (
    <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">Create room</p>
      <div className="mt-3 space-y-2">
        <input
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Room name"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-300 focus:outline-none"
        />
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic (optional)"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-300 focus:outline-none"
        />
      </div>
      <button
        type="button"
        onClick={handleCreate}
        className="mt-3 w-full rounded-lg bg-emerald-400 px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
      >
        Create room
      </button>
    </section>
  );
}
