import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-130px)] flex flex-col items-center justify-center text-center px-4 bg-base-200">
            <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
            <p className="text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link
                href="/"
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
            >
                Go Home
            </Link>
        </div>
    );
}