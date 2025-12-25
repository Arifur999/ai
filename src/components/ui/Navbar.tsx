"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { 
  SiOpenai, 
  SiGoogle, 
//   SiX, 
  SiAnthropic 
} from "react-icons/si";
import { RiRobot2Fill } from "react-icons/ri";

const navItems = [
  { name: "ChatGPT", href: "/chatgpt", icon: <SiOpenai /> },
  { name: "Gemini", href: "/gemini", icon: <SiGoogle /> },
//   { name: "Grok", href: "/grok", icon: <SiX /> },
  { name: "Claude", href: "/claude", icon: <SiAnthropic /> },
  { name: "Perplexity", href: "/replicate", icon: <RiRobot2Fill /> },
  { name: "DeepSeek", href: "/replicate", icon: <RiRobot2Fill /> },
];

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `flex items-center gap-2 px-3 py-2 transition-all ${
      pathname === href
        ? "text-[#54FCF8]"
        : "text-white/80 hover:text-[#54FCF8]"
    }`;

  return (
    <div className="backdrop-blur-md bg-[#3641533b]">
      <div className="navbar w-10/12 mx-auto">

        {/* LEFT */}
        <div className="navbar-start">
          {/* MOBILE MENU */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-56 bg-base-100 rounded-box shadow"
            >
              {navItems.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClass(item.href)}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="text-[#54FCF8]">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={32}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>

        {/* CENTER (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 text-lg">
            {navItems.map(item => (
              <li key={item.name}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <Link
            href="/dashboard"
            className={`px-4 py-2 ${
              pathname === "/dashboard"
                ? "text-[#54FCF8]"
                : "text-white/80 hover:text-[#54FCF8]"
            }`}
          >
            Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}
