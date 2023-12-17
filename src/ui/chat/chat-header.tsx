import { format } from "date-fns";

export interface ChatHeaderProps {
  type: "sent" | "received";
  datetime?: string;
}

export const ChatHeader = ({ datetime }: ChatHeaderProps) => {
  return (
    <div className="flex gap-1 items-center">
      <span className="text-gray-400 font-semibold text-xs">
        {datetime ? format(new Date(datetime), "eee, HH:mm a") : ""}
      </span>
    </div>
  );
};
