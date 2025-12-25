import { chatWithOpenAI } from "./openai";
import { chatWithGemini } from "./gemini";
import { chatWithClaude } from "./claude";
import { chatWithDeepSeek } from "./deepseek";
import { chatWithPerplexity } from "./perplexity";
import { ChatMessage } from "@/types/chat";

export async function chatRouter(
  model: string,
  messages: ChatMessage[]
) {
  switch (model) {
    case "chatgpt":
      return chatWithOpenAI(messages);

    case "gemini":
      return chatWithGemini(messages);

    case "claude":
      return chatWithClaude(messages);

    case "deepseek":
      return chatWithDeepSeek(messages);

    case "perplexity":
      return chatWithPerplexity(messages);

    default:
      throw new Error("Unsupported model");
  }
}
