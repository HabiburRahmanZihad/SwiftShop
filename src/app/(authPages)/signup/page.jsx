"use client";

import React from "react";
import SignupForm from "./components/SignupForm";

export default function SignUpPage() {


    return (
        <div className="bg-base-200  flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2 gap-8">
                {/* Illustration */}
                <div className="hidden md:flex items-center justify-center bg-primary/10 p-6">
                    <img
                        src="/assets/signuppic.jpg"
                        alt="Sign up illustration"
                        className="w-full max-h-96 object-contain"
                        loading="lazy"
                    />
                </div>

                {/* Form */}
                <div className="p-6">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}