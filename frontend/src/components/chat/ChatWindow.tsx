"use client";

import { useEffect, useRef } from "react";
import type { ChatMessage } from "./types";

type ChatWindowProps = {
  messages: ChatMessage[];
  currentUser: string;
};

function formatTime(isoDate: string) {
  return new Date(isoDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ChatWindow({ messages, currentUser }: ChatWindowProps) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <section className="flex min-h-75 flex-1 items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/50 p-6 text-center text-zinc-400">
        No messages yet. Be the first to say hi.
      </section>
    );
  }

  return (
    <section className="min-h-75 flex-1 overflow-y-auto rounded-2xl border border-zinc-700/80 bg-zinc-900/50 p-4 sm:p-5">
      <div className="space-y-3">
        {messages.map((message) => {
          const isCurrentUser = message.sender === currentUser;

          return (
            <article
              key={message.id}
              className={`max-w-[90%] rounded-2xl border p-3 sm:max-w-[75%] ${
                isCurrentUser
                  ? "ml-auto border-cyan-300/60 bg-cyan-300/10"
                  : "border-zinc-700 bg-zinc-900"
              }`}
            >
              <div className="mb-1 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">
                  {message.sender}
                </p>
                <time className="text-xs text-zinc-500">{formatTime(message.sentAt)}</time>
              </div>
              <p className="text-sm leading-relaxed text-zinc-100">{message.content}</p>
            </article>
          );
        })}
      </div>
      <div ref={endRef} />
    </section>
  );
}
