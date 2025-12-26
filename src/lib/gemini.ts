import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatMessage } from "@/types/chat";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function chatWithGemini(messages: ChatMessage[]) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const lastUser = [...messages].reverse().find(m => m.role === "user");
  if (!lastUser) return "⚠️ No user message";

  const result = await model.generateContent(lastUser.content);
  return result.response.text() || "⚠️ Gemini returned empty response";
}
