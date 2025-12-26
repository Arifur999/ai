import { NextResponse } from "next/server";
import { chatRouter } from "../../../lib/ai-router";
import { ChatMessage } from "../../../types/chat";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const model: string = body.model;
    const messages: ChatMessage[] = body.messages;

    const reply = await chatRouter(model, messages);

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    console.error("API ERROR:", err);

    const errorMessage = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
