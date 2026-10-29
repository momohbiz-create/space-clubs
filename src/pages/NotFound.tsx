import React from "react";
import { Link } from "react-router-dom";
import { Starfield } from "@/components/Starfield";
import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import { Rocket, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navigation />
      <main className="lg:ml-72 min-h-screen flex items-center justify-center">
        <TopBar />
        <div className="w-full max-w-md mx-auto px-4 py-20 text-center">
          <GlassCard hover className="p-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-space-orange to-space-gold flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="heading-xl text-4xl font-bold text-white mb-4">404</h1>
            <p className="text-xl text-white/70 font-dm-sans mb-6">
              Mission Control Lost
            </p>
            <p className="text-white/50 font-dm-sans mb-8">
              The page you're looking for has drifted into deep space. Let's get you back on course.
            </p>
            <div className="flex flex-col gap-4">
              <Link to="/" className="btn-primary flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                Return to Mission Control
              </Link>
              <Link to="/courses" className="btn-secondary flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Browse Courses
              </Link>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}