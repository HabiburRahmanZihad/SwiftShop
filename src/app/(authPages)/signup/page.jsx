'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";

export default function SignUpPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        setLoading(true);

        const res = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        setLoading(false);

        if (!res.ok) {
            if (result.error === "User already exists") {
                alert("You are already our member. Redirecting to sign in.");
                router.push("/signin");
            } else {
                alert(result.error);
            }
            return;
        }

        reset(); // Clear form fields after success

        // Auto sign-in
        const signInResult = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (signInResult?.ok) {
            router.push("/");
        } else {
            router.push("/signin");
        }
    };

    return (
        <div className="bg-base-200 flex items-center justify-center px-4 py-12">
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
                <div className="w-full p-6 md:p-10">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center md:text-left">
                        Create Your Account
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Enter your name"
                                    className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    placeholder="Enter your email"
                                    className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: "Password is required" })}
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-10 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
                                    aria-label="Toggle Password Visibility"
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white font-semibold rounded-lg py-3 hover:bg-primary/90 transition"
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>
                    </form>



                    {/* Switch to Login */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}