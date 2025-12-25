import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function chatWithOpenAI(
  messages: ChatMessage[]
) {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini", // ChatGPT Go 5.2
    messages: messages.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  });

  return res.choices[0].message?.content ?? "";
}
