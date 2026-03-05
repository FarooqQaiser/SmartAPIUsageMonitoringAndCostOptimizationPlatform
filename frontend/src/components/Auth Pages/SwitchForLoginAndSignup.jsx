export default function SwitchForLoginAndSignup({ setIsLogin, isLogin }) {
  return (
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
  );
}
