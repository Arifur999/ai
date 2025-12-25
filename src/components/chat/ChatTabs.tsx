import Link from "next/link";

const tabs = [
  { name: "ChatGPT", href: "/chatgpt" },
  { name: "Gemini", href: "/gemini" },
  { name: "Claude", href: "/claude" },
  { name: "DeepSeek", href: "/deepseek" },
  { name: "Perplexity", href: "/perplexity" },
];

export default function ChatTabs() {
  return (
    <div className="flex gap-6 px-6 py-4 border-b border-white/10">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className="text-white/60 hover:text-[#54FCF8]"
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
