import type { ChatRoom } from "./types";

type RoomHeaderProps = {
  room: ChatRoom;
  messageCount: number;
};

export default function RoomHeader({ room, messageCount }: RoomHeaderProps) {
  return (
    <header className="rounded-2xl border border-zinc-700/80 bg-zinc-900/80 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Room</p>
          <h1 className="mt-1 text-xl font-bold text-zinc-50 sm:text-2xl">{room.name}</h1>
          <p className="mt-1 text-sm text-zinc-300">{room.topic || "No room topic provided."}</p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Room ID</p>
          <p className="mt-1 text-sm font-semibold text-cyan-300">{room.id}</p>
          <p className="mt-1 text-xs text-zinc-400">{messageCount} message{messageCount === 1 ? "" : "s"}</p>
        </div>
      </div>
    </header>
  );
}
