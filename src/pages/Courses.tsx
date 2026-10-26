import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent, GlassCardFooter } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { CourseGrid } from "@/components/CourseCard";
import { Rocket, BookOpen, GraduationCap, Trophy, MessageCircle, User } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Deep Space Navigation",
    description: "Learn the fundamentals of celestial navigation and orbital mechanics",
    category: "Astronomy",
    level: "Intermediate" as const,
    duration: "6 weeks",
    lessons: 24,
    progress: 45,
    xpReward: 500,
    enrolled: 1247,
    tags: ["Orbital Mechanics", "Celestial Navigation"],
  },
  {
    id: "2",
    title: "Rocket Propulsion",
    description: "Understand the physics of rocket engines and thrust",
    category: "Physics",
    level: "Beginner" as const,
    duration: "4 weeks",
    lessons: 18,
    progress: 80,
    xpReward: 350,
    enrolled: 2156,
    tags: ["Rocket Science", "Thermodynamics"],
  },
  {
    id: "3",
    title: "Solar System Exploration",
    description: "Explore planets, moons, and beyond in our solar system",
    category: "Astronomy",
    level: "Beginner" as const,
    duration: "8 weeks",
    lessons: 32,
    progress: 20,
    xpReward: 600,
    enrolled: 3021,
    tags: ["Planets", "Moons", "Space Missions"],
  },
  {
    id: "4",
    title: "Space Mission Planning",
    description: "Plan and execute realistic space missions",
    category: "Engineering",
    level: "Advanced" as const,
    duration: "10 weeks",
    lessons: 40,
    progress: 10,
    xpReward: 800,
    enrolled: 892,
    tags: ["Mission Design", "Trajectory", "Payload"],
  },
];

const Courses = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <TopBar />
      <main className="relative z-10 pt-6 lg:pt-12 pb-24 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-space-cyan/20 border border-space-cyan/30">
                <BookOpen className="w-6 h-6 text-space-cyan" />
              </div>
              <Badge variant="cyan" size="lg">Mission Courses</Badge>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Space <span className="text-gradient-cyan">Academy</span>
            </h1>
            <p className="text-white/50 font-dm-sans max-w-2xl">
              Interactive courses designed by Nigerian space scientists and educators. Earn XP and badges as you progress through the cosmos.
            </p>
          </div>

          <CourseGrid courses={courses} variant="default" />

          {/* Course categories */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <Rocket className="w-6 h-6" />, title: "Astronomy", desc: "Explore the universe" },
              { icon: <GraduationCap className="w-6 h-6" />, title: "Physics", desc: "Rocket science basics" },
              { icon: <Trophy className="w-6 h-6" />, title: "Engineering", desc: "Mission design" },
            ].map((cat) => (
              <GlassCard key={cat.title} hover>
                <GlassCardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5">{cat.icon}</div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">{cat.title}</h3>
                    <p className="text-sm text-white/50 font-dm-sans">{cat.desc}</p>
                  </div>
                </GlassCardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              Space Clubs Nigeria
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all">
              <Rocket className="w-4 h-4" />
              <span className="hidden md:inline">Mission Control</span>
            </button>
            <button className="flex-1 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all">
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">Courses</span>
            </button>
            <button className="flex-1 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">AI Tutor</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Courses;
