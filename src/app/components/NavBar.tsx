"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import useOutsideClick from "../hooks/useOutsideClick";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useOutsideClick(dropdownRef, () => setIsDropdownOpen(false), buttonRef);
    return (
        <>
            <div className = "fixed flex justify-between h-[60px] border-b border-cyan-200 z-20 w-full bg-inherit px-2">
                <div className="rounded pt-4 px-2 text-[16px]">
                    <Link href="/">
                        Jose Urrea
                    </Link>
                </div>
                <div className = "flex items-center">
                    <div className="rounded px-2">
                        <Link href="/"
                        >
                            <IoHomeOutline className="w-[30px] h-[30px]"/>
                        </Link>
                    </div>
                    <div className="rounded px-2">
                        <a 
                            target="_blank"
                            href="https://www.linkedin.com/in/jose-urrea-profile"
                        >
                            <CiLinkedin className="w-[40px] h-[40px]"/>
                        </a>
                    </div>
                    <div className="rounded px-2">
                        <a 
                            target="_blank"
                            href="https://www.github.com/JoseAUrrea/"
                        >
                            <FaGithub className="w-[30px] h-[30px]"/>
                        </a>
                    </div>
                    <div className="flex items-center">
                    <button 
                        ref={buttonRef}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="rounded px-2"
                    >
                        <RxDropdownMenu className="w-[35px] h-[35px] md:ml-2 "/>
                    </button>
                </div>
                {isDropdownOpen && (
                        <div ref={dropdownRef} className="absolute right-5 w-40 y-5 bg-gray-500 bg-opacity-100 shadow-md rounded top-[60px]">
                            <a href="#about" className="block px-4 py-2 hover:bg-gray-700">About</a>
                            <a href="#technologies" className="block px-4 py-2 hover:bg-gray-700">Technologies</a>
                            <a href="#projects" className="block px-4 py-2 hover:bg-gray-700">Projects</a>
                            <a href="#education" className=" block px-4 py-2 hover:bg-gray-700">Education</a>
                            <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default NavBar;