import Login from "./Login";
import Register from "./Register";
import { ArrowRight } from "lucide-react";

export default function LoginAndSignup({
  isLogin,
  formData,
  handleInputChange,
  errors,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSubmit,
  isLoading,
}) {
  return (
    <div className="space-y-5">
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
  );
}
