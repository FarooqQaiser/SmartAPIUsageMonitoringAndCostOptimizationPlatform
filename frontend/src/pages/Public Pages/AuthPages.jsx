import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFooter from "./auth/AuthFooter";
import axios from "axios";
import BackgroundLighting from "../../components/Background Lighting/BackgroundLighting";
import BackgroundSparkles from "../../components/Background Sparkles/BackgroundSparkles";
import WebsiteLogoAndName from "../../components/Auth Pages/WebsiteLogoAndName";
import SwitchForLoginAndSignup from "../../components/Auth Pages/SwitchForLoginAndSignup";
import LoginAndSignup from "../../components/Auth Pages/LoginAndSignup";
import GoogleAndGithub from "../../components/Auth Pages/GoogleAndGithub";
import APIKeyGeneration from "../../components/Auth Pages/APIKeyGeneration";

function AuthPages() {
  const navigate = useNavigate();
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
      try {
        setIsLoading(true);

        const response = await axios.post(
          `http://localhost:3000${isLogin ? "/login" : "/register"}`,
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          },
        );

        const result = response.data;
        console.log(result);
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: formData.name,
            email: formData.email,
          }),
        );
        navigate("/dashboard");
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setErrors({});
      }
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
      <BackgroundLighting />

      {/* Floating Icons */}
      <BackgroundSparkles />

      <div className="w-full max-w-md relative z-10 animate-slide-in">
        {/* Logo and Title */}
        <WebsiteLogoAndName isLogin={isLogin} />

        {/* Auth Card */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-8">
          {/* Tab Switcher */}
          <SwitchForLoginAndSignup setIsLogin={setIsLogin} isLogin={isLogin} />

          <LoginAndSignup
            isLogin={isLogin}
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Social Login Buttons */}
          <GoogleAndGithub />

          {/* Success Message (Sign Up) */}
          {!isLogin && <APIKeyGeneration />}
        </div>
        <AuthFooter isLogin={isLogin} toggleAuthMode={toggleAuthMode} />
      </div>
    </div>
  );
}

export default AuthPages;
