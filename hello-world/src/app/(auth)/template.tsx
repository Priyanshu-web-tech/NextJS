"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [input, setInput] = useState("");

  return (
    <div>
      <div className="p-2">
        <input
        className="
        border
        border-gray-300
        rounded-md
        px-3
        py-2
        w-72
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        focus:border-transparent
        "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </nav>
      {children}
    </div>
  );
}
