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

const _sortMessagesBySentDate = (messages: NonNullable<ChatRoom["messages"]>) => {
  messages.sort((a, b) => {
    const dateA = new Date(a.sentAt);
    const dateB = new Date(b.sentAt);

    return dateA.getTime() - dateB.getTime();
  });
};

const _sortRoomsByLastMessageSentDate = (rooms: ChatRoom[]) => {
  rooms.sort((a, b) => {
    if (!a.messages || !b.messages) return 0;

    const dateA = new Date(a.messages.at(-1)!.sentAt);
    const dateB = new Date(b.messages.at(-1)!.sentAt);

    return dateB.getTime() - dateA.getTime();
  });
};

const getAll = async (request?: GetAllChatRoomsRequest): Promise<GetAllChatRoomsResponse> => {
  const rooms = (await _loadChatRoomsFromFile()).data.filter((e) => {
    if (!request?.search) return true;

    const search = request.search.toLowerCase();
    const userName = e.user.name.toLowerCase();

    return userName.includes(search);
  });

  // Sort messages for every room
  rooms.forEach((e) => e.messages && _sortMessagesBySentDate(e.messages));

  // Sort rooms by last message sent date
  _sortRoomsByLastMessageSentDate(rooms);

  return rooms;
};

const get = async (id: string): Promise<GetChatRoomResponse> => {
  const response = await _loadChatRoomsFromFile();

  const chatRoom = response.data.find((e) => e.roomId === id);
  if (!chatRoom) throw new Error("Chat room not found");
  if (chatRoom.messages) {
    _sortMessagesBySentDate(chatRoom.messages);
  }

  return chatRoom;
};

export default {
  getAll,
  get,
};
