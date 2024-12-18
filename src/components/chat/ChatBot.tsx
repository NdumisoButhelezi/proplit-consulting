import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { ChatMessage } from './types';
import ChatMessageItem from './ChatMessageItem';
import ChatSuggestions from './ChatSuggestions';
import { responses } from './responses';
import { getBotResponse } from './utils';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      content: "Hello! I'm Gemini, PropLit's virtual assistant. How can I help you today?",
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      type: 'user',
      content: message,
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(message, responses);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: response.content,
      }]);
    }, 1000);
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setMessage(suggestion);
    handleSend();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition-colors z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">PropLit Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <ChatMessageItem key={index} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Suggestions */}
            <ChatSuggestions
              suggestions={['Our Services', 'Grant Applications', 'Location']}
              onSelect={handleSuggestionSelect}
            />
          </div>
        </div>
      )}
    </>
  );
}