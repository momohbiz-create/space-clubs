import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Rocket, Users, BookOpen, Award, TrendingUp, Plus, UserPlus, BarChart3, Calendar } from "lucide-react";

interface Student {
  id: string;
  name: string;
  level: number;
  xp: number;
  maxXp: number;
  streak: number;
  coursesCompleted: number;
  status: "active" | "inactive";
}

const mockStudents: Student[] = [
  { id: "1", name: "Adaeze Okafor", level: 12, xp: 12500, maxXp: 15000, streak: 21, coursesCompleted: 8, status: "active" },
  { id: "2", name: "Tunde Bakare", level: 11, xp: 11200, maxXp: 15000, streak: 14, coursesCompleted: 7, status: "active" },
  { id: "3", name: "Fatima Ibrahim", level: 11, xp: 10800, maxXp: 15000, streak: 18, coursesCompleted: 7, status: "active" },
  { id: "4", name: "Chidi Nwosu", level: 10, xp: 9800, maxXp: 15000, streak: 9, coursesCompleted: 6, status: "active" },
  { id: "5", name: "Zainab Musa", level: 10, xp: 9400, maxXp: 15000, streak: 12, coursesCompleted: 6, status: "inactive" },
];

const Classroom = () => {
  const [activeTab, setActiveTab] = useState<"students" | "analytics" | "assignments">("students");

  const stats = [
    { icon: <Users className="w-5 h-5" />, title: "Students", value: "24", trend: "+3 this term" },
    { icon: <BookOpen className="w-5 h-5" />, title: "Active Courses", value: "5", trend: "2 new" },
    { icon: <Award className="w-5 h-5" />, title: "Avg. XP", value: "4,250", trend: "+12% this week" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Completion Rate", value: "78%", trend: "+5% this week" },
  ];

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <TopBar />
      <main className="relative z-10 pt-6 lg:pt-12 pb-24 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-space-purple/20 border border-space-purple/30">
                <Users className="w-6 h-6 text-space-purple" />
              </div>
              <Badge variant="purple" size="lg">Teacher Dashboard</Badge>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-2">
              Classroom <span className="text-gradient-cyan">Management</span>
            </h1>
            <p className="text-white/50 font-dm-sans">
              Manage your students, track progress, and assign courses.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <GlassCard key={stat.title} hover>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/5">{stat.icon}</div>
                    <Badge variant="purple" size="sm">{stat.trend}</Badge>
                  </div>
                  <p className="text-white/60 font-dm-sans text-sm mb-1">{stat.title}</p>
                  <p className="font-orbitron text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6">
            {[
              { id: "students", label: "Students", icon: <Users className="w-4 h-4" /> },
              { id: "analytics", label: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
              { id: "assignments", label: "Assignments", icon: <BookOpen className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl font-dm-sans font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-space-purple/20 text-space-purple border border-space-purple/30"
                    : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Students Tab */}
          {activeTab === "students" && (
            <GlassCard hover>
              <GlassCardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-orbitron text-xl font-semibold text-white">Students</h2>
                  <button className="btn-primary px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Add Student
                  </button>
                </div>
                <div className="space-y-3">
                  {mockStudents.map((student) => (
                    <div key={student.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-orbitron font-semibold text-white truncate">{student.name}</p>
                        <p className="text-sm text-white/50 font-dm-sans">Level {student.level} • {student.coursesCompleted} courses completed</p>
                      </div>
                      <div className="hidden md:block w-32">
                        <XPBar value={student.xp} max={student.maxXp} showLabel={false} size="sm" />
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-space-gold" />
                          <span className="font-mono text-space-gold">{student.xp.toLocaleString()}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-space-coral" />
                          <span className="font-mono text-space-coral">{student.streak}</span>
                        </span>
                        <Badge variant={student.status === "active" ? "green" : "default"} size="sm">
                          {student.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCardContent>
            </GlassCard>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <GlassCard hover>
              <GlassCardContent className="p-6">
                <h2 className="font-orbitron text-xl font-semibold text-white mb-6">Class Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "XP Distribution", value: "High", color: "bg-space-green" },
                    { title: "Course Completion", value: "78%", color: "bg-space-cyan" },
                    { title: "Streak Retention", value: "65%", color: "bg-space-purple" },
                    { title: "Quiz Performance", value: "82%", color: "bg-space-gold" },
                  ].map((item) => (
                    <div key={item.title} className="p-4 bg-white/5 rounded-xl">
                      <p className="text-sm text-white/60 font-dm-sans mb-2">{item.title}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", item.color)} style={{ width: item.value === "High" ? "90%" : item.value === "78%" ? "78%" : item.value === "65%" ? "65%" : "82%" }} />
                        </div>
                        <span className="font-mono text-sm text-white">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCardContent>
            </GlassCard>
          )}

          {/* Assignments Tab */}
          {activeTab === "assignments" && (
            <GlassCard hover>
              <GlassCardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-orbitron text-xl font-semibold text-white">Assignments</h2>
                  <button className="btn-primary px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    New Assignment
                  </button>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Gravity & Orbits Quiz", course: "Deep Space Navigation", due: "2024-12-15", status: "active" },
                    { title: "Rocket Physics Lab Report", course: "Rocket Propulsion", due: "2024-12-20", status: "draft" },
                    { title: "Solar System Project", course: "Solar System Exploration", due: "2024-12-28", status: "submitted" },
                  ].map((assignment) => (
                    <div key={assignment.title} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-orbitron font-semibold text-white truncate">{assignment.title}</p>
                        <p className="text-sm text-white/50 font-dm-sans">{assignment.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white/60 font-dm-sans">Due: {assignment.due}</p>
                        <Badge variant={assignment.status === "active" ? "green" : assignment.status === "submitted" ? "cyan" : "default"} size="sm">
                          {assignment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCardContent>
            </GlassCard>
          )}
        </div>
      </main>
    </div>
  );
};

export default Classroom;