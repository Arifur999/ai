import Anthropic from "@anthropic-ai/sdk";
import { ChatMessage } from "@/types/chat";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY!,
});

export async function chatWithClaude(messages: ChatMessage[]) {
  const lastUser = [...messages].reverse().find(m => m.role === "user");
  if (!lastUser) return "⚠️ No user message";

  const res = await client.messages.create({
    model: "claude-3-haiku-20240307", // fast + cheap
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: lastUser.content,
      },
    ],
  });

  return res.content?.[0]?.text ?? "⚠️ Claude returned empty response";
}
