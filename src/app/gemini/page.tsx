"use client";

import { useState } from "react";
import { ChatMessage } from "../../types/chat";
import ChatBox from "../../components/chat/ChatBox";
import ChatInput from "../../components/chat/ChatInput";

export default function GeminiPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  async function sendMessage(text: string) {
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemini",
        messages: newMessages,
      }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.reply },
    ]);
  }

  return (
    <div className="h-[calc(100vh-80px)] max-w-6xl mx-auto
                    bg-[#0B0F19]/70 backdrop-blur
                    border border-white/10 rounded-2xl
                    flex flex-col overflow-hidden">

      <ChatBox messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
