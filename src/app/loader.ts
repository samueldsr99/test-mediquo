import { ChatRoom } from "@/models/chat-room";
import chatService from "@/services/chat";

export interface HomeLoader {
  rooms: ChatRoom[];
}

export default async function homeLoader(): Promise<HomeLoader> {
  const rooms = await chatService.getAll();

  return { rooms };
}
