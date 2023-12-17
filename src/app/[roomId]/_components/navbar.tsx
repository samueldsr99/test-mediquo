import { useLoaderData } from "react-router";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";

import { RoomLoader } from "../loader";

export default function Navbar() {
  const { room } = useLoaderData() as RoomLoader;

  return (
    <header className="py-2 px-4 border-b flex justify-between">
      <div className="flex gap-3">
        <img className="h-12 w-12 rounded-sm" src={room.user.avatar} />
        <div>
          <h3 className="text-xl font-medium">{room.user.name}</h3>
          <p className="text-sm text-gray-400">
            {room.messages?.length ? `${room.messages.length} messages` : "No messages"}
          </p>
        </div>
      </div>

      <div className="place-self-center border-l border-l-gray-300 pl-4">
        <Select defaultValue="0">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Review" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Not Reviewed</SelectItem>
            <SelectItem value="1">Good</SelectItem>
            <SelectItem value="2">Bad</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
