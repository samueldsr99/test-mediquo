import { type LoaderFunctionArgs } from "react-router";

import { ChatRoom } from "@/models/chat-room";
import chatService from "@/services/chat";

export interface RoomLoader {
  room: ChatRoom;
}

export default async function roomLoader(ctx: LoaderFunctionArgs): Promise<RoomLoader> {
  if (ctx.params.roomId) {
    const room = await chatService.get(ctx.params.roomId);
    return { room };
  }
  throw new Error("Room not found");
}
