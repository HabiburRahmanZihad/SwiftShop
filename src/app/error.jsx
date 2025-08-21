// app/error.jsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error("💥 App crashed:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-700 mb-6">We’re sorry, but an unexpected error occurred.</p>

            <div className="flex space-x-4">
                <button
                    onClick={() => reset()}
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
                >
                    Try Again
                </button>

                <Link
                    href="/"
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}