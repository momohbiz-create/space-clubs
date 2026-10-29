import React from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { Rocket, Mail, Lock, User, School, Calendar, MapPin, Loader2, AlertCircle } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    if (error) return;

    // Redirect to dashboard after registration
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
              <h1 className="heading-xl text-white mb-2">Join Space Clubs</h1>
              <p className="text-sm text-white/50 font-dm-sans">Create your account to start your space journey</p>
            </div>

            {/* Register Form */}
            <GlassCard hover className="p-8">
              {error && (
                <div className="mb-4 p-3 rounded-lg bg-space-coral/10 border border-space-coral/30 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-space-coral" />
                  <span className="text-sm text-space-coral font-dm-sans">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      placeholder="Adaobi Nwosu"
                      className="input-space w-full pl-10 pr-4 py-3"
                      required
                    />
                  </div>
                </div>

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

                {/* School */}
                <div>
                  <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">School</label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      placeholder="Queen's College, Lagos"
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
                      placeholder="Create a strong password"
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

                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">I am a</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="btn-secondary p-3 rounded-lg flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Student
                    </button>
                    <button className="btn-secondary p-3 rounded-lg flex items-center gap-2">
                      <School className="w-4 h-4" />
                      Teacher
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-space-orange focus:ring-space-orange"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-white/70 font-dm-sans">
                    I agree to the <a href="#" className="text-space-orange hover:text-space-gold">Terms of Service</a> and <a href="#" className="text-space-orange hover:text-space-gold">Privacy Policy</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Rocket className="w-4 h-4" />}
                  {isLoading ? "Creating account..." : "Create Account"}
                </button>
              </form>

              {/* Login Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-white/50 font-dm-sans mb-4">
                  Already have an account?{" "}
                  <Link to="/login" className="text-space-orange hover:text-space-gold font-semibold">
                    Sign in
                  </Link>
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}

function EyeOff() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.85m-5.84 5.84a3 3 0 1 0-4.24-4.24 3 3 0 0 0 4.24 4.24Zm9.88 4.88c-.46.46-.8 1-1.16 1.48-.17.2-.34.4-.51.6-.17.2-.38.37-.57.53-.2.16-.42.28-.65.38-.23.1-.48.17-.73.22-.25.05-.5.09-.76.12-.26.03-.52.04-.79.04a6 6 0 0 1-.79 0c-.26-.03-.52-.04-.79-.04-.25-.05-.5-.09-.76-.12-.24-.05-.49-.12-.72-.22-.23-.1-.45-.22-.65-.38-.19-.16-.4-.33-.57-.53-.17-.2-.34-.4-.51-.6-.36-.48-.7-1.02-1.16-1.48" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function Eye() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}