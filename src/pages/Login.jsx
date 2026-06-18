import { useState } from "react";
import { FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <FaBuilding className="text-white text-3xl" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Sign in to your Property Manager account
          </p>

          {/* Form */}
          <form className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                Remember Me
              </label>

              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 font-semibold">
              Register
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2026 Property Manager System
        </p>
      </div>
    </div>
  );
}