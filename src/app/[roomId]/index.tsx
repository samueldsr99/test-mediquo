import { useLoaderData } from "react-router";

import ChatInterface from "./_components/chat-interface";
import { RoomLoader } from "./loader";

const EmptyState = () => (
  <div className="grid place-items-center min-h-max h-full">
    <span className="text-sm text-gray-400">No messages</span>
  </div>
);

export default function RoomPage() {
  const { room } = useLoaderData() as RoomLoader;

  if (!room.messages) {
    return <EmptyState />;
  }

  return <ChatInterface room={room} />;
}
