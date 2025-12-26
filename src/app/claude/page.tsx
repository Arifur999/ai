"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";
import ChatBox from "@/src/components/chat/ChatBox";
import ChatInput from "@/src/components/chat/ChatInput";


export default function ClaudePage() {
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
        model: "claude",
        messages: newMessages,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

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
