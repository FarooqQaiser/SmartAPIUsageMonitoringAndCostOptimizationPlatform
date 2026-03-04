import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Github,
  Chrome,
} from "lucide-react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import AuthFooter from "./Auth/AuthFooter";

function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        alert(
          isLogin ? "Login successful!" : "Account created! API key generated.",
        );
      }, 2000);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Icons */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-purple-500 opacity-20 animate-float">
          <Sparkles className="w-8 h-8" />
        </div>
        <div
          className="absolute top-40 right-32 text-pink-500 opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Sparkles className="w-6 h-6" />
        </div>
        <div
          className="absolute bottom-32 left-40 text-blue-500 opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Sparkles className="w-10 h-10" />
        </div>
        <div
          className="absolute bottom-20 right-20 text-purple-500 opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        >
          <Sparkles className="w-7 h-7" />
        </div>
      </div>

      <div className="w-full max-w-md relative z-10 animate-slide-in">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl mb-4 animate-float">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            API Observatory
          </h1>
          <p className="text-gray-400 text-sm">
            {isLogin
              ? "Welcome back! Monitor your APIs effortlessly."
              : "Start monitoring your API usage and costs today."}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-8">
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8 bg-gray-800 bg-opacity-50 rounded-xl p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                isLogin
                  ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                !isLogin
                  ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          <div className="space-y-5">
            {/* Name Field (Sign Up Only) */}
            {isLogin ? (
              <Login
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            ) : (
              <Register
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showConfirmPassword={showConfirmPassword}
                setShowConfirmPassword={setShowConfirmPassword}
              />
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all duration-300 group cursor-pointer">
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-gray-400 group-hover:text-white transition-colors">
                GitHub
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all duration-300 group cursor-pointer">
              <Chrome className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-gray-400 group-hover:text-white transition-colors">
                Google
              </span>
            </button>
          </div>

          {/* Success Message (Sign Up) */}
          {!isLogin && (
            <div className="mt-6 p-4 bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-sm text-green-400 font-semibold mb-1">
                    API Key Auto-Generated
                  </p>
                  <p className="text-xs text-gray-400">
                    Your unique API key will be generated upon account creation.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <AuthFooter isLogin={isLogin} toggleAuthMode={toggleAuthMode} />
      </div>
    </div>
  );
}

export default AuthPages;
