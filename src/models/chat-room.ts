import { ChatMessage } from "./chat-message";
import { ChatUser } from "./chat-user";

export interface ChatRoom {
  roomId: string;
  user: ChatUser;
  messages: ChatMessage[] | null;
}
