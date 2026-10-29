import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { DashboardStats, Achievements } from "@/components/DashboardStats";
import { CourseGrid } from "@/components/CourseCard";
import { AITutor } from "@/components/AITutor";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { Star, Zap, BookOpen, Rocket, MessageCircle, Users, Trophy, Shield, GraduationCap } from "lucide-react";

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

        {/* Hero Section - AfroFuturist */}
        <section className="relative z-10 pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Headline */}
            <div className="text-center mb-12 animate-delay-200">
              <Badge badge-orange mb-4>
                <Rocket className="w-3 h-3 mr-1" />
                Nigeria's Premier Space Education Platform
              </Badge>
              <h1 className="heading-xl text-white md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Space Clubs Nigeria
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/60 font-dm-sans max-w-2xl mx-auto leading-relaxed">
                An educational platform where Nigerian secondary-school students learn space science through gamification, AI-powered quizzes, and real-time competition.
              </p>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto mb-12 animate-delay-300">
              <Link
                to="/login"
                className={cn(
                  "btn-primary w-full text-base py-4 rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(255,107,26,0.4)] transition-all duration-300",
                  location.pathname === "/login" && "ring-2 ring-space-orange"
                )}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link
                to="/register"
                className={cn(
                  "btn-secondary w-full text-base py-4 rounded-xl border-2 border-space-purple/30 hover:border-space-purple/50 transition-all duration-300",
                  location.pathname === "/register" && "ring-2 ring-space-purple"
                )}
              >
                Join Now
              </Link>
            </div>

            {/* Hero Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-delay-400">
              <div className="glass-card p-5 text-center">
                <div className="text-3xl font-orbitron font-bold text-space-orange">2,450+</div>
                <div className="text-sm text-white/50 font-dm-sans mt-1">Students Enrolled</div>
              </div>
              <div className="glass-card p-5 text-center">
                <div className="text-3xl font-orbitron font-bold text-space-teal">7 Levels</div>
                <div className="text-sm text-white/50 font-dm-sans mt-1">XP Progression</div>
              </div>
              <div className="glass-card p-5 text-center">
                <div className="text-3xl font-orbitron font-bold text-space-gold">12,500+</div>
                <div className="text-sm text-white/50 font-dm-sans mt-1">Total XP Earned</div>
              </div>
              <div className="glass-card p-5 text-center">
                <div className="text-3xl font-orbitron font-bold text-space-purple">98%</div>
                <div className="text-sm text-white/50 font-dm-sans mt-1">Completion Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 bg-nebula py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-xl text-white md:text-4xl font-bold">Mission Features</h2>
              <p className="text-white/50 font-dm-sans mt-3 max-w-2xl mx-auto">
                Everything Nigerian students need to explore the cosmos — powered by AI and gamified learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1: AI Quiz Generator */}
              <GlassCard hover className="text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-orange to-space-gold flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">AI Quiz Generator</h3>
                    <p className="text-xs text-white/40 font-dm-sans mt-1">Generate custom quizzes on any space topic</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/70 font-dm-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-space-orange mt-0.5">▸</span>
                    AI-powered question generation tailored to student level
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-orange mt-0.5">▸</span>
                    Real-time scoring and instant feedback
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-orange mt-0.5">▸</span>
                    Adaptive difficulty based on performance
                  </li>
                </ul>
              </GlassCard>

              {/* Feature 2: AI Tutor Chat */}
              <GlassCard hover className="text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">AI Tutor Chat</h3>
                    <p className="text-xs text-white/40 font-dm-sans mt-1">Ask questions anytime, get instant answers</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/70 font-dm-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-space-purple mt-0.5">▸</span>
                    24/7 AI tutor available for homework help
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-purple mt-0.5">▸</span>
                    Context-aware explanations in simple terms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-purple mt-0.5">▸</span>
                    Track conversation history per session
                  </li>
                </ul>
              </GlassCard>

              {/* Feature 3: National Leaderboard */}
              <GlassCard hover className="text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-teal to-space-gold flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">National Leaderboard</h3>
                    <p className="text-xs text-white/40 font-dm-sans mt-1">Compete nationally for top rankings</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/70 font-dm-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-space-teal mt-0.5">▸</span>
                    Live national rankings across all schools
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-teal mt-0.5">▸</span>
                    Weekly and monthly leaderboards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-teal mt-0.5">▸</span>
                    School vs. school competitions
                  </li>
                </ul>
              </GlassCard>

              {/* Feature 4: Badges & Streaks */}
              <GlassCard hover className="text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-space-navy" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">Badges & Streaks</h3>
                    <p className="text-xs text-white/40 font-dm-sans mt-1">Earn medals for achievements and daily streaks</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/70 font-dm-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-space-gold mt-0.5">▸</span>
                    Collectible medal badges for milestones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-gold mt-0.5">▸</span>
                    Daily streak rewards for consistent practice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-gold mt-0.5">▸</span>
                    Level progression with XP system
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Student Dashboard Preview */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-xl text-white md:text-4xl font-bold">Student Dashboard</h2>
              <p className="text-white/50 font-dm-sans mt-3 max-w-2xl mx-auto">
                Track your progress, compete on the leaderboard, earn badges, and stay on track with daily streaks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <Achievements />
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-xl text-white md:text-4xl font-bold">Featured Courses</h2>
              <p className="text-white/50 font-dm-sans mt-3 max-w-2xl mx-auto">
                Explore our latest space science courses designed for Nigerian students
              </p>
            </div>
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
        </section>

        {/* Teacher & Admin Section */}
        <section className="relative z-10 bg-nebula py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-xl text-white md:text-4xl font-bold">For Educators</h2>
              <p className="text-white/50 font-dm-sans mt-3 max-w-2xl mx-auto">
                Teachers and school administrators can manage classrooms, track student progress, and run competitions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Teacher Dashboard */}
              <GlassCard hover className="text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">Teacher Dashboard</h3>
                    <p className="text-xs text-white/40 font-dm-sans mt-1">Manage classrooms, assign quizzes, track progress</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/70 font-dm-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-space-purple mt-0.5">▸</span>
                    Create and manage multiple classrooms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-purple mt-0.5">▸</span>
                    Assign AI-generated quizzes to students
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-purple mt-0.5">▸</span>
                    View individual and class-wide progress
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-purple mt-0.5">▸</span>
                    Run real-time classroom competitions
                  </li>
                </ul>
              </GlassCard>

              {/* Admin Panel */}
              <GlassCard hover className="text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-space-navy" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-white">Admin Panel</h3>
                    <p className="text-xs text-white/40 font-dm-sans mt-1">User management, role control, platform analytics</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/70 font-dm-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-space-gold mt-0.5">▸</span>
                    User registration and role assignment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-gold mt-0.5">▸</span>
                    Monitor platform usage and engagement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-gold mt-0.5">▸</span>
                    Automated email notifications for parents
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-space-gold mt-0.5">▸</span>
                    School registration and verification
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-xl text-white md:text-4xl font-bold mb-6">
              Ready to Launch Your Space Career?
            </h2>
            <p className="text-white/50 font-dm-sans mb-8 max-w-2xl mx-auto">
              Join thousands of Nigerian students who are mastering space science today. Sign up now and start your journey to becoming a space scientist!
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/register"
                className={cn(
                  "btn-primary w-full text-base py-4 rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(255,107,26,0.4)] transition-all duration-300",
                  location.pathname === "/register" && "ring-2 ring-space-orange"
                )}
              >
                Join Now — Free Trial
              </Link>
              <Link
                to="/login"
                className={cn(
                  "btn-secondary w-full text-base py-4 rounded-xl border-2 border-space-purple/30 hover:border-space-purple/50 transition-all duration-300",
                  location.pathname === "/login" && "ring-2 ring-space-purple"
                )}
              >
                Already Have an Account? Login
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
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
