import { NextResponse } from "next/server";
import { chatRouter } from "../../../lib/ai-router";
import { ChatMessage } from "../../../types/chat";

export async function POST(req: Request) {
  const body = await req.json();

  const model: string = body.model;
  const messages: ChatMessage[] = body.messages;

  const reply = await chatRouter(model, messages);

  return NextResponse.json({ reply });
}
