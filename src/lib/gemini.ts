import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function chatWithGemini(
  messages: { role: string; content: string }[]
) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro", // Gemini 3 (latest stable)
  });

  const prompt = messages
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n");

  const result = await model.generateContent(prompt);
  return result.response.text();
}
