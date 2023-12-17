import { ChatRoom } from "@/models/chat-room";
import { Chat, ChatContent, ChatMessage } from "@/ui/chat";

export interface ChatInterfaceProps {
  room: ChatRoom;
}

export default function ChatInterface({ room }: ChatInterfaceProps) {
  return (
    <Chat>
      <ChatContent className="h-[calc(100vh_-_97px)] overflow-auto">
        {room.messages?.map((message) => (
          <ChatMessage
            key={message.messageId}
            type={message.senderId === message.professional.userId ? "sent" : "received"}
            datetime={message.sentAt}
            message={message.message}
          />
        ))}
      </ChatContent>
    </Chat>
  );
}
