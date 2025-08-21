import React from "react";
import Link from "next/link";

export default function Banner() {
    return (
        <section className="relative bg-green-900 text-white rounded-lg overflow-hidden p-8 md:p-16 flex flex-col items-center justify-center mt-2 mb-5 lg:my-10">
            {/* Background image can be replaced */}
            <div className="absolute inset-0">
                <img
                    src="/assets/Banner.jpg"
                    alt="Banner Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 text-center mt-24 mb-28 sm:mt-32 sm:mb-36 md:mt-40 md:mb-44 lg:mt-48 lg:mb-52">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Welcome to SwiftShop
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6">
                    Find amazing products here
                </p>
                <Link
                    href="/product"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg transition"
                >
                    Explore Products
                </Link>
            </div>

        </section>
    );
}