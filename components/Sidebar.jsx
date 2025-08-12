'use client';

import Link from "next/link";
import { Briefcase, PlusCircle, Settings, User } from "lucide-react";

export default function Sidebar({ user }) {
    const navItems = [
        { href: "/dashboard", label: "Dashboard", icon: <Briefcase size={18} /> },
        { href: "/jobs", label: "Jobs", icon: <Briefcase size={18} /> },
        { href: "/jobs/new", label: "Create Job", icon: <PlusCircle size={18} /> },
        { href: "/notes", label: "Notes", icon: <User size={18} /> },
        { href: "/resume", label: "Resume", icon: <User size={18} /> },
        { href: "/chat", label: "Chat", icon: <User size={18} /> },
        { href: "/settings", label: "Settings", icon: <Settings size={18} /> },
    ];

    return (
        <div className="bg-gray-900 text-white w-64 h-screen p-4 flex flex-col fixed">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Job Portal</h1>
                <p className="mt-1 text-gray-300">Hello, {user?.name || 'Guest'}</p>
            </div>
            <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
