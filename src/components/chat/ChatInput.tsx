"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string, images: File[]) => void;
}) {
  const [text, setText] = useState("");
  const [images, setImages] = useState<File[]>([]);

  return (
    <div className="p-4 border-t border-white/10">
      {/* IMAGE PREVIEW */}
      {images.length > 0 && (
        <div className="flex gap-3 mb-3 overflow-x-auto">
          {images.map((file, i) => (
            <img
              key={i}
              src={URL.createObjectURL(file)}
              className="h-20 w-20 rounded-lg object-cover border border-white/20"
              alt=""
            />
          ))}
        </div>
      )}

      <div className="flex gap-3">
        {/* IMAGE UPLOAD */}
        <label className="cursor-pointer flex items-center justify-center
                          w-12 h-12 rounded-xl border border-white/20
                          hover:border-[#54FCF8] text-white/70">
          📷
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) =>
              setImages(Array.from(e.target.files || []))
            }
          />
        </label>

        {/* TEXT INPUT */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-transparent border border-white/20
                     rounded-xl px-4 py-3 text-white
                     outline-none focus:border-[#54FCF8]"
        />

        {/* SEND */}
        <button
          onClick={() => {
            if (!text.trim() && images.length === 0) return;
            onSend(text, images);
            setText("");
            setImages([]);
          }}
          className="px-6 rounded-xl bg-[#54FCF8] text-black font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}
