import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY!,
  baseURL: "https://api.perplexity.ai",
});

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function chatWithPerplexity(
  messages: ChatMessage[]
) {
  const res = await client.chat.completions.create({
    model: "sonar-small-chat",
    messages: messages.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  });

  return res.choices[0].message?.content ?? "";
}
