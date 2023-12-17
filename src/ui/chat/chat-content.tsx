import { cn } from "@/utils/tailwind";

export type ChatContentProps = JSX.IntrinsicElements["div"];

export const ChatContent = ({ children, className }: ChatContentProps) => {
  return <div className={cn("flex flex-col gap-8", className)}>{children}</div>;
};
