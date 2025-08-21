'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

export default function SignInPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // ✅ Form submit handler
  const onSubmit = async (data) => {
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    if (res?.error) {
      if (res.error === "EMAIL_NOT_FOUND") {
        // ⚠️ Email not found – redirect to sign up
        await Swal.fire({
          icon: "warning",
          title: "Email Not Found",
          text: "No account found with that email. Redirecting to Sign Up...",
          confirmButtonColor: "#3085d6",
        });
        // router.push("/signup");
      } else if (res.error === "INVALID_PASSWORD") {
        // ❌ Invalid password
        await Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid password. Please try again.",
          confirmButtonColor: "#d33",
        });
      } else {
        // ❌ Unknown error
        await Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#d33",
        });
      }
    } else {
      // ✅ Login successful
      await Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: "You have logged in successfully.",
        confirmButtonColor: "#3085d6",
      });

      router.push("/");
    }
  };

  return (
    <div className="bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2 gap-8">
        {/* Left: Illustration */}
        <div className="hidden md:flex items-center justify-center bg-primary/10 p-6">
          <img
            src="/assets/signinpic.png"
            alt="Sign in illustration"
            className="w-full max-h-96 object-contain"
            loading="lazy"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full p-6 md:p-10">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center md:text-left">
            Login to SwiftShop
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  aria-label="Toggle password visibility"
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
              className="w-full bg-primary text-white font-semibold rounded-lg py-3 hover:bg-primary/90 transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Switch to Sign Up */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}