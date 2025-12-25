import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY!,
  baseURL: "https://api.deepseek.com",
});

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export async function chatWithDeepSeek(
  messages: ChatMessage[]
) {
  const res = await client.chat.completions.create({
    model: "deepseek-chat",
    messages: messages.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  });

  return res.choices[0].message?.content ?? "";
}
