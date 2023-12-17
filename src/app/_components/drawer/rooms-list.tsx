import { memo } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { ChatRoom } from "@/models/chat-room";

import ChatEntry from "./chat-entry";

export interface RoomsListProps {
  rooms: ChatRoom[];
}

const RoomsList = ({ rooms }: RoomsListProps) => {
  const { roomId } = useParams();
  const location = useLocation();

  const isCurrent = (roomId_: string) => roomId_ === roomId;

  return (
    <div className="mt-4 space-y-0.5 overflow-y-auto">
      {rooms.length === 0 ? (
        <p className="text-center text-sm text-gray-400">No rooms found</p>
      ) : (
        rooms.map((room) => (
          <Link
            key={room.roomId}
            to={{
              pathname: `/rooms/${room.roomId}`,
              search: location.search,
            }}
          >
            <ChatEntry isCurrent={isCurrent(room.roomId)} user={room.user} message={room.messages?.at(-1)} />
          </Link>
        ))
      )}
    </div>
  );
};

export default memo(RoomsList);
