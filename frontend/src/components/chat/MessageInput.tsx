"use client";

import { useState } from "react";

type MessageInputProps = {
  disabled?: boolean;
  onSendMessage: (content: string) => void;
};

export default function MessageInput({ disabled, onSendMessage }: MessageInputProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) {
      return;
    }

    onSendMessage(trimmed);
    setValue("");
  };

  return (
    <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/80 p-3 sm:p-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={disabled}
          placeholder={disabled ? "Select a room to send messages" : "Type your message..."}
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={disabled}
          className="rounded-lg bg-cyan-300 px-4 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Send
        </button>
      </div>
    </div>
  );
}
