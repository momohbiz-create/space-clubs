import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Rocket,
  BookOpen,
  GraduationCap,
  Trophy,
  MessageCircle,
  User,
  Menu,
  X,
  Globe,
  Star,
} from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: "Mission Control", path: "/", icon: <Rocket className="w-5 h-5" /> },
  { name: "Courses", path: "/courses", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Academy", path: "/academy", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Leaderboard", path: "/leaderboard", icon: <Trophy className="w-5 h-5" /> },
  { name: "AI Tutor", path: "/ai-tutor", icon: <MessageCircle className="w-5 h-5" /> },
  { name: "Profile", path: "/profile", icon: <User className="w-5 h-5" /> },
];

export function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 min-h-screen">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-orbitron font-bold text-xl text-white">
                Space Clubs Nigeria
              </h1>
              <p className="text-xs text-white/50 font-dm-sans">
                Mission Control Dashboard
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl font-dm-sans font-medium transition-all duration-200",
                  isActive
                    ? "bg-space-green/20 text-space-green-light border border-space-green/30 shadow-[0_0_20px_rgba(0,196,111,0.2)]"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 text-white/70 font-dm-sans">
            <Globe className="w-5 h-5 text-space-cyan" />
            <span className="text-sm">spaceclubs.ng</span>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-orbitron font-bold text-lg text-white">
              Space Clubs Nigeria
            </h1>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-16 left-0 right-0 bg-space-navy/95 backdrop-blur-xl border-b border-white/10 z-50 lg:hidden">
            <nav className="p-2 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl font-dm-sans font-medium transition-all duration-200",
                      isActive
                        ? "bg-space-green/20 text-space-green-light border border-space-green/30"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export function TopBar() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-orbitron text-xl font-semibold text-white">
            Mission Control
          </h2>
          <div className="hidden md:flex items-center gap-2 text-sm text-white/50 font-dm-sans">
            <Star className="w-4 h-4 text-space-gold" />
            <span>Welcome back, Cadet!</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
                  <div className="p-3">
                    <p className="font-orbitron text-sm font-semibold text-white mb-2">
                      Mission Updates
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-white/70 font-dm-sans">
                        New course: "Deep Space Navigation" is now available!
                      </p>
                      <p className="text-sm text-white/70 font-dm-sans">
                        Your weekly streak is at 5 days!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
