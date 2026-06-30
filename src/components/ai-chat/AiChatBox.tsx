"use client";

import { useState, useRef, useEffect } from "react";
import type { ChatMessage, ChatResponse } from "@/types";
import { CHAT_MESSAGES } from "@/constants/constants";
import apiClient from "@/api/apiClient";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import LoadingDots from "./LoadingDots";

interface AiChatBoxProps {
  stockName: string;
}

const generateSessionId = () => `session_${Date.now()}`;

export default function AiChatBox({ stockName }: AiChatBoxProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(CHAT_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(generateSessionId());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string = inputValue) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      message_id: messages.length + 1,
      user: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await apiClient<ChatResponse>('/chat', {
        method: 'POST',
        body: JSON.stringify({
          ticker: stockName,
          query: content,
          session_id: sessionId,
        }),
      });

      const assistantMessage: ChatMessage = {
        message_id: messages.length + 2,
        user: "assistant",
        content: response.answer,
        sources: response.sources,
        chunks_used: response.chunks_used,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage: ChatMessage = {
        message_id: messages.length + 2,
        user: "assistant",
        content: "죄송합니다. 요청을 처리하는 중에 오류가 발생했습니다. 다시 시도해주세요.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed z-10 bottom-[100px] right-[40px] w-[400px] h-[500px] bg-[#0e1f38] rounded-[12px] border border-[#1a3a6a] flex flex-col p-[20px]">
      <ChatHeader stockName={stockName} />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto mb-[16px] pr-[8px]">
        {messages.map((message) => (
          <MessageBubble
            key={message.message_id}
            message={message}
          />
        ))}
        {isLoading && <LoadingDots />}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSubmit={() => handleSendMessage()}
        onKeyPress={handleKeyPress}
        isLoading={isLoading}
      />
    </div>
  );
}
