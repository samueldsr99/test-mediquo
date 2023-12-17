import { camelizeKeys } from "humps";

import { ChatRoom } from "@/models/chat-room";

type GetAllChatRoomsRequest = {
  search?: string;
};
type GetAllChatRoomsResponse = ChatRoom[];

type GetChatRoomResponse = ChatRoom;

const _loadChatRoomsFromFile = async () => {
  const data = await fetch("/json/list.json").then((e) => e.json());
  return camelizeKeys(data) as { data: ChatRoom[] };
};

const getAll = async (request?: GetAllChatRoomsRequest): Promise<GetAllChatRoomsResponse> => {
  const rooms = (await _loadChatRoomsFromFile()).data.filter((e) => {
    if (!request?.search) return true;

    const search = request.search.toLowerCase();
    const userName = e.user.name.toLowerCase();

    return userName.includes(search);
  });
  return rooms;
};

const get = async (id: string): Promise<GetChatRoomResponse> => {
  const response = await _loadChatRoomsFromFile();

  const chatRoom = response.data.find((e) => e.roomId === id);
  if (!chatRoom) throw new Error("Chat room not found");

  return chatRoom;
};

export default {
  getAll,
  get,
};
