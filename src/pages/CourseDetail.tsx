import React from "react";
import { Link, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent, GlassCardFooter } from "@/components/GlassCard";
import { XPBar } from "@/components/XPBar";
import { Badge } from "@/components/Badge";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Rocket, BookOpen, Award, Lock, Play, Clock, Users, TrendingUp, Flame, Target, Medal, User, Star } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  progress: number;
  xpReward: number;
  enrolled: number;
  isLocked: boolean;
  thumbnail?: string;
  tags: string[];
  prerequisites?: string[];
  instructor?: string;
  rating?: number;
  reviews?: number;
}

const course: Course = {
  id: "deep-space-navigation",
  title: "Deep Space Navigation",
  description: "Learn the fundamentals of celestial navigation and orbital mechanics. This course covers the mathematics and physics behind plotting trajectories, understanding gravitational influences, and navigating between celestial bodies.",
  category: "Astronomy",
  level: "Intermediate",
  duration: "6 weeks",
  lessons: 24,
  progress: 45,
  xpReward: 500,
  enrolled: 1247,
  isLocked: false,
  tags: ["Orbital Mechanics", "Celestial Navigation"],
  prerequisites: ["Basic Physics"],
  instructor: "Dr. Adeola Olabisi",
  rating: 4.8,
  reviews: 234,
};

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <TopBar />
      <main className="relative z-10 pt-6 lg:pt-12 pb-24 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Header */}
          <GlassCard hover className="mb-8">
            <GlassCardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-space-green/10 to-space-cyan/10 flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-space-green" />
                </div>
                <div className="flex-1">
                  <h1 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-2">
                    {course.title}
                  </h1>
                  <p className="text-white/60 font-dm-sans mb-4">{course.description}</p>

                  {/* Course metadata */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm font-dm-sans">
                    <div className="flex items-center gap-2">
                      <Badge variant={course.level === "Beginner" ? "green" : course.level === "Intermediate" ? "cyan" : "purple"} size="sm">
                        {course.level}
                      </Badge>
                      <span className="text-white/50">·</span>
                      <span className="text-white/50">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-space-gold" />
                      <span className="text-white/50">{course.enrolled.toLocaleString()} enrolled</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3 text-space-gold" />
                      <span className="text-white/50">{course.rating?.toFixed(1)} ({course.reviews}+)</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>

          {/* Course Content */}
          <GlassCard hover>
            <GlassCardContent className="p-6">
              <h2 className="font-orbitron text-xl font-semibold text-white mb-6">Course Modules</h2>

              <div className="space-y-4">
                {[
                  "Introduction to Celestial Mechanics",
                  "Gravitational Forces",
                  "Orbital Trajectories",
                  "Trajectory Planning",
                  "Mission Execution",
                  "Final Project & Certification",
                ].map((module, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center flex-shrink-0">
                      <span className="font-orbitron font-bold text-white">{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-orbitron font-medium text-white">{module}</h3>
                      <p className="text-xs text-white/50 font-dm-sans">{module === "Final Project & Certification" ? "Capstone project" : "Lesson content"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCardContent>
          </GlassCard>

          {/* Progress & Enrollment */}
          <GlassCard hover className="mt-6">
            <GlassCardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md-items-end gap-4">
                <div className="flex-1">
                  <XPBar value={course.progress} max={100} label="Course Progress" className="mb-4" />
                  <div className="flex items-center gap-3 text-sm font-dm-sans">
                    <span className="text-white/60">Progress</span>
                    <span className="font-mono text-space-cyan font-bold">{course.progress}%</span>
                  </div>
                </div>
                <div className="text-right md:text-left">
                  <XPBar value={course.progress} max={100} showLabel={false} size="sm" className="w-32" />
                  <div className="mt-2">
                    <p className="text-xs text-white/50 font-dm-sans">XP Reward</p>
                    <p className="font-orbitron font-bold text-space-gold">{course.xpReward.toLocaleString()} XP</p>
                  </div>
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>

          {/* Enrollment CTA */}
          {course.isLocked ? (
            <GlassCard hover className="mt-6">
              <GlassCardContent className="p-6">
                <p className="text-sm text-white/60 font-dm-sans mb-4">
                  <Lock className="w-4 h-4 mr-2" /> Locked - Complete prerequisites to enroll
                </p>
                <div className="flex gap-3">
                  <Badge variant="default" size="sm">Basic Physics</Badge>
                  <Badge variant="default" size="sm">Algebra</Badge>
                </div>
              </GlassCardContent>
            </GlassCard>
          ) : (
            <GlassCard hover className="mt-6">
              <GlassCardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-space-green" />
                    <span className="font-orbitron font-medium text-white">Continue Learning</span>
                  </div>
                  <XPBar value={course.progress} max={100} showLabel={false} size="sm" className="w-24" />
                </div>
                <button
                  onClick={() => alert("Enroll in course!")}
                  className="btn-primary w-full py-3 px-6 rounded-xl font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(0,196,111,0.4)]"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Continue Course
                </button>
              </GlassCardContent>
            </GlassCard>
          )}

          {/* Instructor & Reviews */}
          <GlassCard hover className="mt-6">
            <GlassCardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-orbitron font-semibold text-white">{course.instructor}</p>
                    <p className="text-xs text-white/50 font-dm-sans">Space Scientist & Educator</p>
                  </div>
                </div>
                <div className="flex gap-2">
                                  {[1, 2, 3, 4, 5].map((i) => (
                                    <Badge variant="gold" size="sm" key={i}>
                                      {i >= (course.rating || 0) ? "★" : "☆"}
                                    </Badge>
                                  ))}
                                </div>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;