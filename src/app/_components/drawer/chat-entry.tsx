import { format } from "date-fns";

import { ChatMessage } from "@/models/chat-message";
import { ChatUser } from "@/models/chat-user";
import { cn } from "@/utils/tailwind";

export interface ChatEntryProps {
  user: ChatUser;
  isCurrent?: boolean;
  message?: ChatMessage;
}

export default function ChatEntry({ user, message, isCurrent }: ChatEntryProps) {
  return (
    <div className={cn("flex justify-between gap-2 p-2 rounded-sm", isCurrent && "bg-[#6090b1]")}>
      <div className="flex gap-2 min-w-0">
        <img src={user.avatar} alt={user.name} className="object-cover w-11 h-11 rounded-sm" height={48} width={48} />
        <div className="min-w-0">
          <p
            className={cn(
              "font-semibold whitespace-nowrap overflow-hidden text-ellipsis",
              isCurrent ? "text-white" : "text-gray-800",
            )}
          >
            {user.name}
          </p>
          <p
            className={cn(
              "text-sm whitespace-nowrap overflow-hidden text-ellipsis",
              isCurrent ? "text-gray-100" : "text-gray-500",
            )}
          >
            {message?.message}
          </p>
        </div>
      </div>
      <div>
        {!!message?.sentAt && (
          <span className={cn("text-xs", isCurrent ? "text-gray-300" : "text-gray-400")}>
            {format(new Date(message?.sentAt), "hh:mm")}
          </span>
        )}
      </div>
    </div>
  );
}
