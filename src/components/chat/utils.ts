import { ChatResponse } from './types';

export const getBotResponse = (userMessage: string, responses: Record<string, ChatResponse>): ChatResponse => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('service')) return responses.services;
  if (lowerMessage.includes('grant')) return responses.grants;
  if (lowerMessage.includes('location') || lowerMessage.includes('address')) return responses.location;
  
  return responses.default;
};