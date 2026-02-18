"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import useOutsideClick from "../hooks/useOutsideClick";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useOutsideClick(dropdownRef, () => setIsOpen(false), buttonRef);

    const close = () => setIsOpen(false);

    const links = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#technologies", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#education", label: "Education" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-base font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
                        A. Urrea
                    </Link>

                    {/* Desktop nav links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {links.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors duration-200 rounded-md"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Social links + mobile menu */}
                    <div className="flex items-center gap-3">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/jose-urrea-profile"
                            className="text-black dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <CiLinkedin className="w-5 md:w-7 md:h-7 h-5" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.github.com/JoseAUrrea/"
                            className="text-black dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-5 md:w-6 md:h-6 h-5" />
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            ref={buttonRef}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <IoClose className="w-5 h-5" />
                            ) : (
                                <RxHamburgerMenu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div ref={dropdownRef} className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
                    <nav className="max-w-6xl mx-auto px-4 py-3 space-y-1">
                        {links.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={close}
                                className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default NavBar;
