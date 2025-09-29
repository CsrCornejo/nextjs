"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type something..."
                style={{ marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={
                            isActive(link.href)
                                ? "text-white bg-blue-600 underline px-2 py-1 rounded"
                                : "text-blue-600 underline"
                        }
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <div style={{ marginBottom: '1rem', color: '#555' }}>
                <span>Current route: {pathname}</span>
            </div>
            {children}
            <h2>special layout</h2>
        </>
    );
}
