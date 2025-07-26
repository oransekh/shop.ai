import React, { useState } from "react";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = ({ setfrom, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({
    email: "",
    password: "",
  });

  // Validation
  const validation = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    //  Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      toast.error("❌ Email is required!");
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailPattern.test(email)) {
      toast.error("❌ Enter a valid email!");
      newErrors.email = "Enter valid email";
      valid = false;
    }

    // Password validation
    if (!password) {
      toast.error("❌ Password is required!");
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 8) {
      toast.error("🔒 Password must be at least 8 characters!");
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle Submit
  function handelsubmit(e) {
    e.preventDefault();
    if (validation()) {
      toast.success("✅ Login successful!");

      const data = { email: email, password: password };
      console.log(data);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center px-4">
        {/* Main card */}
        <div className="relative w-full max-w-md min-w-xs lg:min-w-md md:min-w-sm bg-white rounded-xl shadow-lg p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={() => setUser && setUser(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800">
            Login to Your Account
          </h2>
          <p className="text-center text-gray-500 text-sm mt-2">
            Welcome back! Please login to continue.
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            {/* Email */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter your email"
              className={`w-full p-3 rounded-lg border ${
                error.email ? "border-red-400" : "border-gray-200"
              } text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none`}
            />
            {error.email && (
              <p className="text-xs text-red-500 ">{error.email}</p>
            )}

            {/* Password */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className={`w-full p-3 rounded-lg border ${
                error.password ? "border-red-400" : "border-gray-200"
              } text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none`}
            />
            {error.password && (
              <p className="text-xs text-red-500 ">{error.password}</p>
            )}

            {/* Submit Button */}
            <button
              onClick={handelsubmit}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white text-sm font-medium shadow-md"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center my-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="px-3 text-gray-400 text-xs">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                className="w-1/2 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 text-sm"
              >
                <FcGoogle className="h-4 w-4" />
                Google
              </button>
              <button
                type="button"
                className="w-1/2 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-blue-50 text-sm"
              >
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.515c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>

            {/* Sign-in link */}
            <p className="text-center text-xs text-gray-500 mt-3">
              Don’t have an account?{" "}
              <button
                onClick={() => setfrom(true)}
                className="text-purple-600 hover:underline font-medium"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
