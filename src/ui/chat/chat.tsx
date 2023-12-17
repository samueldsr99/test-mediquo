export interface ChatProps {
  children: React.ReactNode;
}

export const Chat = ({ children }: ChatProps) => {
  return <div className="flex flex-col justify-between overflow-auto">{children}</div>;
};
