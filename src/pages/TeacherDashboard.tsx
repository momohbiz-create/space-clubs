import React from "react";
import { GlassCard, GlassCardContent, GlassCardFooter } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { Users, BookOpen, Plus, Search, Filter, Download, Upload, TrendingUp, Clock, Award, Star, Rocket, Settings, Mail, Bell, MoreVertical } from "lucide-react";

interface Student {
  id: number;
  name: string;
  email: string;
  level: number;
  xp: number;
  streak: number;
  coursesCompleted: number;
  lastActive: string;
  status: "active" | "inactive" | "pending";
}

const students: Student[] = [
  { id: 1, name: "Adaobi Nwosu", email: "adaobi@school.ng", level: 8, xp: 12500, streak: 7, coursesCompleted: 3, lastActive: "2 hours ago", status: "active" },
  { id: 2, name: "Chinedu Okafor", email: "chinedu@school.ng", level: 6, xp: 9800, streak: 5, coursesCompleted: 2, lastActive: "1 day ago", status: "active" },
  { id: 3, name: "Fatima Ibrahim", email: "fatima@school.ng", level: 5, xp: 7200, streak: 3, coursesCompleted: 1, lastActive: "3 days ago", status: "active" },
  { id: 4, name: "Emeka Nwankwo", email: "emeka@school.ng", level: 4, xp: 5600, streak: 2, coursesCompleted: 1, lastActive: "1 week ago", status: "inactive" },
  { id: 5, name: "Zainab Aliyu", email: "zainab@school.ng", level: 3, xp: 3400, streak: 1, coursesCompleted: 0, lastActive: "2 weeks ago", status: "pending" },
];

export default function TeacherDashboard() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navigation />
      <main className="lg:ml-72 min-h-screen">
        <TopBar />
        <div className="pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="heading-xl text-white mb-1">Teacher Dashboard</h1>
                <p className="text-sm text-white/50 font-dm-sans">Manage your classroom and track student progress</p>
              </div>
              <div className="flex gap-3">
                <button className="btn-secondary flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </button>
                <button className="btn-primary flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Student
                </button>
              </div>
            </div>

            {/* Class Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Total Students</p>
                    <p className="font-orbitron text-2xl font-bold text-white">24</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Active This Week</p>
                    <p className="font-orbitron text-2xl font-bold text-white">18</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Avg Class XP</p>
                    <p className="font-orbitron text-2xl font-bold text-white">6,200</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center">
                    <Star className="w-5 h-5 text-space-navy" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Courses Assigned</p>
                    <p className="font-orbitron text-2xl font-bold text-white">4</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-coral to-space-orange flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-white/10">
              {["Students", "Courses", "Assignments", "Analytics", "Settings"].map((tab) => (
                <button
                  key={tab}
                  className="px-4 py-3 text-sm font-orbitron font-medium text-white/50 hover:text-white border-b-2 border-transparent hover:border-space-green transition-all"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Students Table */}
            <GlassCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-orbitron text-lg font-semibold text-white">Class Roster</h3>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="text"
                        placeholder="Search students..."
                        className="input-space pl-10 pr-4 py-2 w-64"
                      />
                    </div>
                    <button className="btn-secondary flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Student</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Level</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">XP</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Streak</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Courses</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Last Active</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Status</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center">
                                <span className="text-xs font-orbitron font-bold text-white">{student.name.charAt(0)}</span>
                              </div>
                              <div>
                                <div className="font-orbitron font-medium text-white">{student.name}</div>
                                <div className="text-xs text-white/50 font-dm-sans">{student.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <Badge variant="gold" size="sm" icon={<Star className="w-3 h-3" />}>
                              Level {student.level}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <span className="font-mono font-medium text-white">{student.xp.toLocaleString()}</span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-space-gold" />
                              <span className="font-orbitron font-medium text-white">{student.streak}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="font-orbitron font-medium text-white">{student.coursesCompleted}</span>
                          </td>
                          <td className="py-4">
                            <span className="text-sm text-white/70 font-dm-sans">{student.lastActive}</span>
                          </td>
                          <td className="py-4">
                            <Badge
                              variant={student.status === "active" ? "green" : student.status === "inactive" ? "default" : "gold"}
                              size="sm"
                            >
                              {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </GlassCard>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassCard hover className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Create Quiz</h3>
                <p className="text-sm text-white/50 font-dm-sans mb-4">Generate AI-powered quizzes for your class</p>
                <button className="btn-primary px-6 py-2">Create Quiz</button>
              </GlassCard>

              <GlassCard hover className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Start Competition</h3>
                <p className="text-sm text-white/50 font-dm-sans mb-4">Launch a real-time class competition</p>
                <button className="btn-primary px-6 py-2">Start Now</button>
              </GlassCard>

              <GlassCard hover className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-space-navy" />
                </div>
                <h3 className="font-orbitron font-semibold text-white mb-2">Send Announcement</h3>
                <p className="text-sm text-white/50 font-dm-sans mb-4">Notify students and parents</p>
                <button className="btn-primary px-6 py-2">Compose</button>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}