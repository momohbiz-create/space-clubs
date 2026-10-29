import React from "react";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { BookOpen, Star, Trophy, Clock, Users, Award, Rocket, TrendingUp, Play, Lock } from "lucide-react";

interface CourseProgress {
  id: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
  xpReward: number;
  xpEarned: number;
  lessonsCompleted: number;
  totalLessons: number;
  isLocked: boolean;
  lastAccessed: string;
}

const courseProgress: CourseProgress[] = [
  {
    id: "1",
    title: "Deep Space Navigation",
    category: "Astronomy",
    level: "Intermediate",
    progress: 45,
    xpReward: 500,
    xpEarned: 225,
    lessonsCompleted: 11,
    totalLessons: 24,
    isLocked: false,
    lastAccessed: "2 hours ago",
  },
  {
    id: "2",
    title: "Rocket Propulsion",
    category: "Physics",
    level: "Beginner",
    progress: 80,
    xpReward: 350,
    xpEarned: 280,
    lessonsCompleted: 14,
    totalLessons: 18,
    isLocked: false,
    lastAccessed: "1 day ago",
  },
  {
    id: "3",
    title: "Solar System Exploration",
    category: "Astronomy",
    level: "Beginner",
    progress: 20,
    xpReward: 600,
    xpEarned: 120,
    lessonsCompleted: 6,
    totalLessons: 32,
    isLocked: false,
    lastAccessed: "3 days ago",
  },
  {
    id: "4",
    title: "Space Mission Planning",
    category: "Engineering",
    level: "Advanced",
    progress: 10,
    xpReward: 800,
    xpEarned: 80,
    lessonsCompleted: 4,
    totalLessons: 40,
    isLocked: true,
    lastAccessed: "Never",
  },
];

export default function Academy() {
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
              <h1 className="heading-xl text-white mb-2">Academy</h1>
              <p className="text-white/50 font-dm-sans">
                Your learning journey through space science
              </p>
            </div>

            {/* Progress Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <GlassCard hover className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Total XP</p>
                    <p className="font-orbitron text-2xl font-bold text-white">12,500</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center">
                    <Award className="w-6 h-6 text-space-navy" />
                  </div>
                </div>
                <div className="mt-4">
                  <XPBar value={3450} max={5000} showLabel={false} color="green" />
                </div>
              </GlassCard>

              <GlassCard hover className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Current Level</p>
                    <p className="font-orbitron text-2xl font-bold text-white">Level 8</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <XPBar value={3450} max={5000} showLabel={false} color="purple" />
                </div>
              </GlassCard>

              <GlassCard hover className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Daily Streak</p>
                    <p className="font-orbitron text-2xl font-bold text-white">7 days</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-coral to-space-orange flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <XPBar value={7} max={30} showLabel={false} color="coral" />
                </div>
              </GlassCard>
            </div>

            {/* Active Courses */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-lg text-white">Active Courses</h2>
                <button className="btn-secondary text-sm px-4 py-2">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseProgress.map((course) => (
                  <GlassCard key={course.id} hover className="group h-full flex flex-col">
                    <div className="relative aspect-video bg-gradient-to-br from-space-green/10 to-space-cyan/10 mb-4">
                      {course.isLocked && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Lock className="w-10 h-10 text-white/50" />
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <Badge variant={course.level === "Beginner" ? "green" : course.level === "Intermediate" ? "cyan" : "purple"} size="sm">
                          {course.level}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="cyan" size="sm">{course.category}</Badge>
                        <span className="text-xs text-white/40 font-dm-sans">
                          {course.lessonsCompleted}/{course.totalLessons} lessons
                        </span>
                      </div>

                      <h3 className="font-orbitron font-semibold text-white mb-2">{course.title}</h3>

                      <p className="text-white/60 font-dm-sans text-sm mb-4 flex-1">
                        Continue your journey through {course.category.toLowerCase()}
                      </p>

                      <XPBar
                        value={course.progress}
                        max={100}
                        showLabel={false}
                        className="mb-4"
                      />

                      <div className="flex items-center justify-between text-xs text-white/50 font-dm-sans mb-4">
                        <span>{course.xpEarned} / {course.xpReward} XP</span>
                        <span>{course.lastAccessed}</span>
                      </div>

                      <button
                        className={cn(
                          "w-full btn-primary flex items-center justify-center gap-2",
                          course.isLocked && "opacity-50 cursor-not-allowed"
                        )}
                        disabled={course.isLocked}
                      >
                        {course.isLocked ? (
                          <>
                            <Lock className="w-4 h-4" />
                            Locked
                          </>
                        ) : course.progress > 0 ? (
                          <>
                            <Play className="w-4 h-4" />
                            Continue
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4" />
                            Start
                          </>
                        )}
                      </button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-8">
              <h2 className="heading-lg text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: "Completed lesson", course: "Rocket Propulsion", xp: "+50 XP", time: "2 hours ago", icon: <Play className="w-4 h-4 text-space-green" /> },
                  { action: "Earned badge", course: "Star Explorer", xp: "+100 XP", time: "1 day ago", icon: <Star className="w-4 h-4 text-space-gold" /> },
                  { action: "Started course", course: "Space Mission Planning", xp: "0 XP", time: "3 days ago", icon: <Rocket className="w-4 h-4 text-space-purple" /> },
                  { action: "Completed quiz", course: "Deep Space Navigation", xp: "+75 XP", time: "5 days ago", icon: <Trophy className="w-4 h-4 text-space-cyan" /> },
                ].map((activity) => (
                  <div key={activity.action} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-orbitron font-medium text-white">{activity.action}</span>
                        <span className="text-xs text-space-green-light">{activity.xp}</span>
                      </div>
                      <div className="text-sm text-white/70 font-dm-sans">{activity.course}</div>
                    </div>
                    <span className="text-xs text-white/40 font-dm-sans">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}