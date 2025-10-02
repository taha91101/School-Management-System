import { useState } from "react";
import { useAuth } from "../Context.jsx/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const Onsubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (isAuthenticated) {
      navigate("/profile");
      alert("Login Successfully");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4 sm:p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <img
            src="/reshot-illustration-website-design-U3PZXDSEVY 1.png"
            alt="Website Illustration"
            className="w-full max-w-sm h-auto object-contain md:h-[350px]"
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6">
            Welcome to School Login !
          </h2>

          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-indigo-600 hover:underline focus:outline-none"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
              onClick={Onsubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
