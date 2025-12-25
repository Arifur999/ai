"use client";

import { ChatMessage } from "@/types/chat";
import MessageBubble from "./MessageBubble";

export default function ChatBox({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
      {messages.map((msg, i) => (
        <MessageBubble key={i} message={msg} />
      ))}
    </div>
  );
}
