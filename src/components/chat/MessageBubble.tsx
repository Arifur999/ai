import Image from "next/image";
import { ChatMessage } from "@/types/chat";

export default function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`max-w-[80%] px-4 py-3 rounded-xl text-sm
        ${isUser ? "ml-auto bg-[#54FCF8] text-black" : "mr-auto bg-white/10 text-white"}`}
    >
      {message.images && (
        <div className="flex gap-2 mb-2">
          {message.images.map((img: string, i: number) => (
            <Image
              key={i}
              src={img}
              width={128}
              height={128}
              className="h-32 rounded-lg object-cover"
              alt=""
            />
          ))}
        </div>
      )}

      {message.content}
    </div>
  );
}
