import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { DashboardStats, Achievements } from "@/components/DashboardStats";
import { CourseGrid } from "@/components/CourseCard";
import { AITutor } from "@/components/AITutor";
import { GlassCard } from "@/components/GlassCard";
import { Star, Zap, BookOpen, Rocket, MessageCircle } from "lucide-react";

export default function Home() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      {/* Starfield Background */}
      <Starfield />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen">
        {/* Top Bar */}
        <TopBar />

        {/* Dashboard Content */}
        <div className="pt-6 lg:pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link
                    to="/"
                    className={cn(
                      "text-white/60 hover:text-white transition-colors font-dm-sans",
                      location.pathname === "/" && "text-space-green font-orbitron"
                    )}
                  >
                    Mission Control
                  </Link>
                </li>
                <li className="text-white/40 font-dm-sans">
                  {location.pathname === "/" ? "Dashboard" : "Courses"}
                </li>
              </ol>
            </nav>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <DashboardStats
                stats={{
                  level: 8,
                  xp: 3450,
                  maxXp: 5000,
                  streak: 7,
                  coursesCompleted: 3,
                  totalXP: 12500,
                  rank: 12,
                  totalStudents: 2450,
                }}
              />
            </div>

            {/* Achievements */}
            <Achievements />

            {/* Featured Courses */}
            <div className="mt-8">
              <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
                Featured Courses
              </h2>
              <p className="text-white/50 font-dm-sans mb-6">
                Explore our latest space science courses
              </p>
              <CourseGrid
                courses={[
                  {
                    id: "1",
                    title: "Deep Space Navigation",
                    description: "Learn the fundamentals of celestial navigation and orbital mechanics",
                    category: "Astronomy",
                    level: "Intermediate",
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
                    level: "Beginner",
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
                    level: "Beginner",
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
                    level: "Advanced",
                    duration: "10 weeks",
                    lessons: 40,
                    progress: 10,
                    xpReward: 800,
                    enrolled: 892,
                    tags: ["Mission Design", "Trajectory", "Payload"],
                  },
                ]}
                variant="featured"
              />
            </div>

            {/* Quick Stats / Recent Activity */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <GlassCard hover>
                  <div className="p-5">
                    <h3 className="font-orbitron text-lg font-semibold text-white mb-4">
                      Recent Activity
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center flex-shrink-0">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-orbitron font-medium text-white">New Course Added</p>
                          <p className="text-xs text-white/40 font-dm-sans">
                            "Deep Space Navigation" is now available for enrollment!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-cyan to-space-purple flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-orbitron font-medium text-white">AI Tutor Active</p>
                          <p className="text-xs text-white/40 font-dm-sans">
                            15 students helped this session
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-purple to-space-cyan flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-orbitron font-medium text-white">New Enrollments</p>
                          <p className="text-xs text-white/40 font-dm-sans">
                            23 students joined this week
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* AI Tutor Quick Access */}
              <AITutor />
            </div>
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
            <button
              onClick={() => window.location.href = "/"}
              className={cn(
                "flex-1 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all",
                  location.pathname === "/" && "bg-space-green text-white"
                )}
            >
              <Rocket className="w-4 h-4" />
              <span className="hidden md:inline">Mission Control</span>
            </button>
            <button
              onClick={() => window.location.href = "/courses"}
              className={cn(
                "flex-1 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all",
                  location.pathname === "/courses" && "bg-space-green text-white"
                )}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">Courses</span>
            </button>
            <button
              onClick={() => window.location.href = "/ai-tutor"}
              className={cn(
                "flex-1 p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all",
                  location.pathname === "/ai-tutor" && "bg-space-green text-white"
                )}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">AI Tutor</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}