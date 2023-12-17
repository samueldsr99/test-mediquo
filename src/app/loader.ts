import { LoaderFunctionArgs } from "react-router";

import { ChatRoom } from "@/models/chat-room";
import chatService from "@/services/chat";

export interface HomeLoader {
  rooms: ChatRoom[];
}

export default async function homeLoader(ctx: LoaderFunctionArgs): Promise<HomeLoader> {
  const search = new URL(ctx.request.url).searchParams.get("search");

  const rooms = await chatService.getAll({ search: search || undefined });

  return { rooms };
}
