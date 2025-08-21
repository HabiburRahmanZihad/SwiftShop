"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // TODO: Replace with real auth state (e.g., from context or a hook)
    const isUser = false; // Simulating a logged-in user

    // Helper for active route styling
    const navItemClass = (href) =>
        pathname === href
            ? "bg-primary text-white px-4 py-2 rounded-md"
            : "hover:text-white hover:bg-primary px-4 py-2 rounded-md";

    return (
        <nav className="navbar pl-2 bg-base-100 border-b-2 border-base-300 px-6 sticky top-0 z-50">
            {/* Brand */}
            <div className="flex-1">
                <Link href="/" className="text-2xl font-bold text-primary">
                    SwiftShop
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex-none hidden md:flex">
                <ul className="menu menu-horizontal px-3 lg:space-x-4 text-base">
                    <li>
                        <Link className={navItemClass("/")} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={navItemClass("/product")} href="/product">
                            Product
                        </Link>
                    </li>

                    {isUser && (
                        <li>
                            <Link className={navItemClass("/add-product")} href="/add-product">
                                Add Product
                            </Link>
                        </li>
                    )}

                    <li>
                        <Link className={navItemClass("/about")} href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={navItemClass("/contact")} href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Auth Buttons */}
            <div className="flex-none space-x-2">
                {!isUser && (
                    <>
                        <Link
                            href="/signin"
                            className={`btn border-none bg-[#E8EDF5] ${navItemClass("/signin")}`}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className={`btn border-none bg-[#E8EDF5] ${navItemClass("/signup")}`}
                        >
                            Sign Up
                        </Link>
                    </>
                )}

                {isUser && (
                    <Link
                        href="/signout"
                        className={`btn border-none bg-[#E8EDF5] ${navItemClass("/signout")}`}
                    >
                        Sign Out
                    </Link>
                )}
            </div>
        </nav>
    );
}