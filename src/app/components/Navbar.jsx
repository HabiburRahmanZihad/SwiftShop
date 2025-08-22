"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const { data: session } = useSession();
    const pathname = usePathname();
    const isUser = !!session;

    // Navigation item styles
    const navItemClass = (href) =>
        pathname === href
            ? "bg-primary text-content px-4 py-2 rounded-md"
            : "text-black hover:text-neutral hover:bg-primary px-4 py-2 rounded-md";

    // Handle sign-out action
    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/signin" });
    };

    const links = (
        <div className="flex flex-col lg:flex-row gap-2">
            <Link href="/" className={navItemClass("/")}>
                Home
            </Link>
            <Link href="/product" className={navItemClass("/product")}>
                Product
            </Link>
            {isUser && (
                <Link href="/dashboard" className={navItemClass("/dashboard")}>
                    Dashboard
                </Link>
            )}
            <Link href="/about" className={navItemClass("/about")}>
                About
            </Link>
            <Link href="/contact" className={navItemClass("/contact")}>
                Contact
            </Link>
        </div>
    );

    return (
        <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50 border-b-2 border-base-300 px-6">
            {/* Navbar left: mobile menu + brand name */}
            <div className="navbar-start flex items-center gap-2">
                <div className="dropdown lg:hidden">
                    <button
                        tabIndex={0}
                        role="button"
                        className="flex items-center text-primary"
                        aria-label="Toggle Menu"
                    >
                        <GiHamburgerMenu size={24} />
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box w-52 p-2 shadow mt-3"
                    >
                        {links}
                    </ul>
                </div>

                {/* Brand name text */}
                <Link href="/" className="text-2xl font-bold text-primary">
                    SwiftShop
                </Link>
            </div>

            {/* Navbar center: desktop links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* Navbar right: auth buttons */}
            <div className="navbar-end flex gap-2 items-center">
                {/* Auth Buttons */}
                {!isUser ? (
                    <>
                        <Link href="/signin">
                            <button className="btn border-none bg-[#E8EDF5] text-primary flex items-center gap-2 p-2 rounded-md">
                                Sign In <FiLogIn size={20} />
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button className="btn border-none bg-[#E8EDF5] text-primary flex items-center gap-2 p-2 rounded-md">
                                Sign Up
                            </button>
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleSignOut}
                        className="btn bg-primary text-white hover:bg-red-500 rounded-md flex items-center gap-2 p-2"
                        aria-label="Sign Out"
                    >
                        Sign Out <FiLogOut size={20} />
                    </button>
                )}
            </div>
        </nav>
    );
}