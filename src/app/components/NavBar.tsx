import React from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
            <div className = "flex justify-between h-[60px] border-b border-cyan-200">
                <div className="rounded pt-4 px-2 text-[14px]">
                    <Link href="/">
                        Jose Urrea | Portfolio
                    </Link>
                </div>
                <div className = "flex gap-2">
                    <div className="rounded pt-4 px-2">
                        <Link href="/">
                            <CiLinkedin className="w-[35px] h-[35px]"/>
                        </Link>
                    </div>
                    <div className="rounded pt-4 px-2">
                        <Link href="/">
                            <FaGithub className="w-[30px] h-[30px]"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;