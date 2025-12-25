"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative z-20 w-full py-32">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT / TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold leading-tight"
          >
            One Platform. <br />
            All AI Models.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg text-white/70 max-w-xl"
          >
            ChatGPT, Gemini, Grok, Claude, DeepSeek and more —
            all accessible from one powerful interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex gap-8"
          >
            <a
              href="/chatgpt"
              className="text-[#54FCF8] text-lg font-semibold"
            >
              Start Chatting →
            </a>

            <a
              href="/dashboard"
              className="text-white/70 hover:text-[#54FCF8]"
            >
              View Dashboard
            </a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT / IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/hero.png"   
            alt="AI Platform"
            width={520}
            height={420}
            priority
            className="w-full max-w-md rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
