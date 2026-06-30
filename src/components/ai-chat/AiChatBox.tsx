"use client";

import { useState, useRef, useEffect } from "react";
import type { ChatMessage } from "@/types";
import { CHAT_MESSAGES } from "@/constants/constants";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import QuickButton from "./QuickButton";
import ChatInput from "./ChatInput";
import LoadingDots from "./LoadingDots";

interface AiChatBoxProps {
  stockName: string;
}

const QUICK_QUESTIONS = [
  "최근 어닝 서프라이즈 있었나?",
  "Blackwell 우유 전망은?",
  "경정사 대비 마진 수준은?",
];

export default function AiChatBox({ stockName }: AiChatBoxProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(CHAT_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string = inputValue) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      message_id: messages.length + 1,
      user: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        message_id: messages.length + 2,
        user: "assistant",
        content: `"${content}"에 대한 분석입니다.\nNVIDIA는 현재 강력한 AI 칩 수요로 인해 매출이 증가하고 있습니다.\n자세한 내용은 차트와 분석 데이터를 참고해주세요.`,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="fixed z-10 bottom-[100px] right-[40px] w-[400px] h-[500px] bg-[#0e1f38] rounded-[12px] border border-[#1a3a6a] flex flex-col p-[20px]">
      <ChatHeader stockName={stockName} />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto mb-[16px] pr-[8px]">
        {messages.map((message) => (
          <MessageBubble
            key={message.message_id}
            content={message.content}
            isUser={message.user === "user"}
          />
        ))}
        {isLoading && <LoadingDots />}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="flex flex-wrap gap-[8px] mb-[16px]">
        {QUICK_QUESTIONS.map((question, index) => (
          <QuickButton
            key={index}
            label={question}
            onClick={() => handleQuickQuestion(question)}
          />
        ))}
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
