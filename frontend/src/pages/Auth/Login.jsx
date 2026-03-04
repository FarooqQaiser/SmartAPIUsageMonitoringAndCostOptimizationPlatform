import { AlertCircle, Eye, EyeOff, Lock, Mail } from "lucide-react";
import React from "react";

export default function Login({
  formData,
  handleInputChange,
  errors,
  showPassword,
  setShowPassword,
}) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full pl-12 pr-4 py-3 bg-gray-800 bg-opacity-50 border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
          )}
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full pl-12 pr-12 py-3 bg-gray-800 bg-opacity-50 border ${
              errors.password ? "border-red-500" : "border-gray-700"
            } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300`}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.password}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded bg-gray-800 border-gray-700 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-900"
          />
          <span className="text-sm text-gray-400">Remember me</span>
        </label>
        <button
          type="button"
          className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Forgot password?
        </button>
      </div>
    </>
  );
}
