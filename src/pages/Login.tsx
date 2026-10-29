import React from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { Rocket, Mail, Lock, User, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    if (error) return;

    // Redirect to dashboard after login
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 500);
  };

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navigation />
      <main className="lg:ml-72 min-h-screen">
        <TopBar />
        <div className="pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-space-orange to-space-gold mb-4 animate-pulse-slow">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h1 className="heading-xl text-white mb-2">Welcome Back</h1>
              <p className="text-sm text-white/50 font-dm-sans">Sign in to continue your space journey</p>
            </div>

            {/* Login Form */}
            <GlassCard hover className="p-8">
              {error && (
                <div className="mb-4 p-3 rounded-lg bg-space-coral/10 border border-space-coral/30 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-space-coral" />
                  <span className="text-sm text-space-coral font-dm-sans">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      placeholder="student@school.ng"
                      className="input-space w-full pl-10 pr-4 py-3"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="input-space w-full pl-10 pr-10 py-3"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Rocket className="w-4 h-4" />}
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
              </form>

              {/* Forgot Password */}
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-space-teal hover:text-space-gold font-dm-sans">
                  Forgot your password?
                </a>
              </div>

              {/* Register Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-white/50 font-dm-sans mb-4">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-space-orange hover:text-space-gold font-semibold">
                    Register now
                  </Link>
                </p>
              </div>

              {/* Social Login */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-xs text-white/40 font-dm-sans mt-3 text-center">
                  Or continue with email
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}