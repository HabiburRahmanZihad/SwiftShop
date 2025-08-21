export default function GlobalLoading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-130px)]  bg-base-100 text-center px-4">
            {/* Spinner */}
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 blur-sm" />
            </div>

            {/* Text */}
            <div className="mt-6">
                <p className="text-lg text-gray-700 font-semibold animate-pulse">Please wait...</p>
                <p className="text-sm text-gray-500 mt-1">We're preparing something awesome for you.</p>
            </div>
        </div>
    );
}