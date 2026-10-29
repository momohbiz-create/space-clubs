import React from "react";
import { GlassCard, GlassCardContent, GlassCardFooter } from "@/components/GlassCard";
import { CourseGrid } from "@/components/CourseCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { BookOpen, Search, Filter, Clock, Users, Award, Rocket, TrendingUp, Star, Crown, Medal } from "lucide-react";

export default function Courses() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navigation />
      <main className="lg:ml-72 min-h-screen">
        <TopBar />
        <div className="pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="heading-xl text-white mb-2">Space Science Courses</h1>
              <p className="text-white/50 font-dm-sans">
                Explore our comprehensive space science curriculum designed for Nigerian students
              </p>
            </div>

            {/* Filters */}
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="input-space w-full pl-10"
                  />
                </div>
                <div className="flex gap-3">
                  <button className="btn-secondary flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="btn-primary flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    Start Mission
                  </button>
                </div>
              </div>
            </div>

            {/* Course Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <GlassCard hover className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Astronomy</h3>
                <p className="text-sm text-white/50 font-dm-sans mb-3">
                  12 courses covering celestial bodies and space phenomena
                </p>
                <Badge variant="green" size="sm">1,247 students</Badge>
              </GlassCard>

              <GlassCard hover className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Rocket Science</h3>
                <p className="text-sm text-white/50 font-dm-sans mb-3">
                  8 courses on propulsion and spacecraft design
                </p>
                <Badge variant="purple" size="sm">892 students</Badge>
              </GlassCard>

              <GlassCard hover className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-space-navy" />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Engineering</h3>
                <p className="text-sm text-white/50 font-dm-sans mb-3">
                  6 courses on space technology and systems
                </p>
                <Badge variant="gold" size="sm">456 students</Badge>
              </GlassCard>
            </div>

            {/* Featured Courses */}
            <div className="mb-8">
              <h2 className="heading-lg text-white mb-6">Featured Courses</h2>
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
                  {
                    id: "5",
                    title: "Black Holes & Neutron Stars",
                    description: "Explore the most extreme objects in the universe",
                    category: "Astronomy",
                    level: "Advanced",
                    duration: "5 weeks",
                    lessons: 20,
                    progress: 0,
                    xpReward: 750,
                    enrolled: 567,
                    tags: ["Relativity", "Black Holes", "Neutron Stars"],
                  },
                  {
                    id: "6",
                    title: "Spacecraft Systems",
                    description: "Learn about spacecraft design and engineering",
                    category: "Engineering",
                    level: "Intermediate",
                    duration: "7 weeks",
                    lessons: 28,
                    progress: 0,
                    xpReward: 650,
                    enrolled: 789,
                    tags: ["Systems", "Design", "Engineering"],
                  },
                ]}
                variant="featured"
              />
            </div>

            {/* Popular Courses */}
            <div className="mb-8">
              <h2 className="heading-lg text-white mb-6">Popular Courses</h2>
              <CourseGrid
                courses={[
                  {
                    id: "7",
                    title: "Introduction to Space",
                    description: "Your first step into space science",
                    category: "Beginner",
                    level: "Beginner",
                    duration: "4 weeks",
                    lessons: 16,
                    progress: 0,
                    xpReward: 200,
                    enrolled: 5678,
                    tags: ["Beginner", "Introduction"],
                  },
                  {
                    id: "8",
                    title: "Mars Exploration",
                    description: "The journey to Mars and beyond",
                    category: "Astronomy",
                    level: "Intermediate",
                    duration: "6 weeks",
                    lessons: 22,
                    progress: 0,
                    xpReward: 450,
                    enrolled: 2345,
                    tags: ["Mars", "Exploration"],
                  },
                  {
                    id: "9",
                    title: "Satellite Technology",
                    description: "Understanding communication and observation satellites",
                    category: "Engineering",
                    level: "Intermediate",
                    duration: "5 weeks",
                    lessons: 20,
                    progress: 0,
                    xpReward: 400,
                    enrolled: 1234,
                    tags: ["Satellites", "Technology"],
                  },
                ]}
                variant="default"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}