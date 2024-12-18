export interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
}

export interface ChatResponse {
  content: string;
  suggestions?: string[];
}