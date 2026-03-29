import type { ChatMessage, ChatRoom } from "./types";

type SidebarProps = {
  rooms: ChatRoom[];
  selectedRoomId: string | null;
  messages: ChatMessage[];
  onSelectRoom: (roomId: string) => void;
};

function getLastMessageForRoom(messages: ChatMessage[], roomId: string) {
  const roomMessages = messages.filter((message) => message.roomId === roomId);
  return roomMessages[roomMessages.length - 1];
}

export default function Sidebar({ rooms, selectedRoomId, messages, onSelectRoom }: SidebarProps) {
  return (
    <aside className="flex h-full flex-col rounded-2xl border border-zinc-700/80 bg-zinc-900/80 p-3 sm:p-4">
      <h2 className="px-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Rooms</h2>

      <div className="mt-3 space-y-2 overflow-y-auto pr-1">
        {rooms.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900 p-4 text-sm text-zinc-400">
            No rooms yet. Create your first room.
          </div>
        ) : (
          rooms.map((room) => {
            const isActive = room.id === selectedRoomId;
            const lastMessage = getLastMessageForRoom(messages, room.id);

            return (
              <button
                key={room.id}
                type="button"
                onClick={() => onSelectRoom(room.id)}
                className={`w-full rounded-xl border p-3 text-left transition ${
                  isActive
                    ? "border-cyan-300/70 bg-cyan-300/10"
                    : "border-zinc-700 bg-zinc-950/80 hover:border-zinc-500 hover:bg-zinc-900"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-semibold text-zinc-100">{room.name}</p>
                  <span className="rounded-md border border-zinc-600 px-1.5 py-0.5 text-[10px] text-zinc-400">
                    {room.id}
                  </span>
                </div>
                <p className="mt-1 truncate text-xs text-zinc-400">
                  {lastMessage ? lastMessage.content : room.topic || "No messages yet"}
                </p>
              </button>
            );
          })
        )}
      </div>
    </aside>
  );
}
