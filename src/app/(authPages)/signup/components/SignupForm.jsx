"use client";

import React, { useState } from 'react'
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";

export default function SignupForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = (data) => {
        console.log("✅ Sign Up Data:", data);
        reset();
    };

    const [showPassword, setShowPassword] = useState(false);




    return (
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

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold rounded-lg py-3 hover:bg-primary/90 transition"
                >
                    Sign Up
                </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-500">or</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Button */}
            <button className="w-full flex items-center justify-center gap-3 bg-gray-100 border border-gray-300 py-2 rounded-lg hover:bg-gray-200 transition">
                <FaGoogle className="text-red-500" />
                <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
            </button>

            {/* Switch to Login */}
            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-600 hover:underline">
                    Login here
                </Link>
            </p>
        </div>
    )
}
