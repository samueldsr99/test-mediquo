export interface ChatMessage {
  messageId: string;
  senderId: string;
  message: string;
  professional: {
    userId: string;
    name: string;
  };
  patient: {
    userId: string;
    name: string;
  };
  sentAt: string;
}
