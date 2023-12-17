import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

import { HomeLoader } from "@/app/loader";

import ChatEntry from "./chat-entry";
import SearchInput from "./search-input";

export default function Drawer() {
  const { rooms } = useLoaderData() as HomeLoader;

  return (
    <aside className="w-72 px-4 py-2 border-r min-h-screen">
      <SearchInput placeholder="Search" />

      <div className="mt-4 space-y-0.5 overflow-y-auto">
        {rooms.map((room, i) => (
          <Link key={room.roomId} to={`/rooms/${room.roomId}`}>
            <ChatEntry isCurrent={i === 2} user={room.user} message={room.messages?.at(-1)} />
          </Link>
        ))}
      </div>
    </aside>
  );
}
