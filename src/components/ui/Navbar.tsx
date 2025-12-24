"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" backdrop-blur-md bg-[#c3bfbf57] ">

        <div className="navbar w-10/12 mx-auto">
      
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* MOBILE MENU */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/chatgpt">ChatGPT</Link></li>
            <li><Link href="/gemini">Gemini</Link></li>
            <li><Link href="/grok">Grok</Link></li>
            <li><Link href="/claude">Claude</Link></li>
            <li><Link href="/replicate">Replicate</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/" className=" text-xl">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={32}
            className="h-28 w-auto"
            priority
          />
        </Link>
      </div>

      {/* CENTER (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/chatgpt">ChatGPT</Link></li>
          <li><Link href="/gemini">Gemini</Link></li>
          <li><Link href="/grok">Grok</Link></li>
          <li><Link href="/claude">Claude</Link></li>
          <li><Link href="/replicate">Replicate</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <Link href="/dashboard" className="btn btn-primary btn-sm">
          Dashboard
        </Link>
      </div>

      </div>
    </div>
  );
}
