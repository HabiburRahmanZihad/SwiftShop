"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // Function to handle active class
    const navItemClass = (href) =>
        pathname === href
            ? "bg-primary text-white px-4 py-2 rounded-md"
            : "hover:text-white hover:bg-primary px-4 py-2 rounded-md";

    return (
        <div className="navbar pl-2 bg-base-100 border-b-2 border-base-300 px-6 sticky top-0 z-50">
            {/* <div className="container mx-auto flex items-center justify-between "> */}
                {/* Logo / Brand */}
                <div className="flex-1">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        SwiftShop
                    </Link>
                </div>

                {/* Menu */}
                <div className="flex-none hidden md:flex">
                    <ul className="menu menu-horizontal px-3 lg:space-x-8 text-base">
                        <li>
                            <Link className={navItemClass("/")} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={navItemClass("/product")} href="/product">Product</Link>
                        </li>
                        <li>
                            <Link className={navItemClass("/about")} href="/about">About</Link>
                        </li>
                        <li>
                            <Link className={navItemClass("/contact")} href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Right side buttons */}
                <div className="flex-none space-x-2">
                    <Link className={`btn border-none bg-[#E8EDF5] ${navItemClass("/signin")}`} href="/signin">Sign In</Link>
                    <Link className={`btn border-none bg-[#E8EDF5] ${navItemClass("/signup")}`} href="/signup">Sign Up</Link>
                </div>
            </div>
        // </div>
    );
}