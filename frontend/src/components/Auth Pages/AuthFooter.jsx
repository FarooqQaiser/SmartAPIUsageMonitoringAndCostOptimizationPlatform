export default function AuthFooter({ isLogin, toggleAuthMode }) {
  return (
    <>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleAuthMode}
            className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
          >
            {isLogin ? "Sign up for free" : "Sign in"}
          </button>
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-600">
          By continuing, you agree to our{" "}
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </>
  );
}
