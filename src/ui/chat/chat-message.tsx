import { cn } from "@/utils/tailwind";

import { ChatHeader, ChatHeaderProps } from "./chat-header";

export interface ChatMessageProps extends ChatHeaderProps {
  message?: string;
}

export const ChatMessage = ({ type, datetime, message }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "max-w-[550px] bg-gray-200 py-2 px-3 rounded-xl",
        type === "sent" ? "place-self-end ml-6 rounded-br-none" : "place-self-start mr-6 rounded-bl-none",
      )}
    >
      <ChatHeader type={type} datetime={datetime} />
      <p className="text-gray-800 font-normal text-sm leading-6">{message}</p>
    </div>
  );
};

export default ChatMessage;
