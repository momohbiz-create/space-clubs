import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Rocket, Users, School, Award, TrendingUp, Shield, Mail, Settings, BarChart3, UserPlus } from "lucide-react";

interface School {
  id: string;
  name: string;
  location: string;
  students: number;
  teachers: number;
  status: "pending" | "approved" | "rejected";
  joined: string;
}

interface SystemStats {
  totalSchools: number;
  totalStudents: number;
  totalTeachers: number;
  totalXP: number;
  activeUsers: number;
}

const mockSchools: School[] = [
  { id: "1", name: "Greenfield College", location: "Lagos, Nigeria", students: 450, teachers: 12, status: "approved", joined: "2024-01-15" },
  { id: "2", name: "Lagos International School", location: "Lagos, Nigeria", students: 320, teachers: 8, status: "approved", joined: "2024-02-03" },
  { id: "3", name: "Crown International School", location: "Abuja, Nigeria", students: 280, teachers: 6, status: "pending", joined: "2024-03-10" },
  { id: "4", name: "Heritage House", location: "Port Harcourt, Nigeria", students: 190, teachers: 5, status: "approved", joined: "2024-01-20" },
  { id: "5", name: "Atlantic Hall", location: "Epe, Nigeria", students: 210, teachers: 7, status: "rejected", joined: "2024-02-28" },
];

const systemStats: SystemStats = {
  totalSchools: 124,
  totalStudents: 12450,
  totalTeachers: 890,
  totalXP: 45000000,
  activeUsers: 3420,
};

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "schools" | "users" | "settings">("overview");

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <TopBar />
      <main className="relative z-10 pt-6 lg:pt-12 pb-24 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-space-gold/20 border border-space-gold/30">
                <Shield className="w-6 h-6 text-space-gold" />
              </div>
              <Badge variant="gold" size="lg">Admin Panel</Badge>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-2">
              Space Clubs <span className="text-gradient-gold">Admin</span>
            </h1>
            <p className="text-white/50 font-dm-sans">
              Manage schools, users, and platform settings for spaceclubs.ng
            </p>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { icon: <School className="w-5 h-5" />, title: "Schools", value: systemStats.totalSchools.toLocaleString(), color: "text-space-gold" },
              { icon: <Users className="w-5 h-5" />, title: "Students", value: systemStats.totalStudents.toLocaleString(), color: "text-space-cyan" },
              { icon: <UserPlus className="w-5 h-5" />, title: "Teachers", value: systemStats.totalTeachers.toLocaleString(), color: "text-space-purple" },
              { icon: <Award className="w-5 h-5" />, title: "Total XP", value: systemStats.totalXP.toLocaleString(), color: "text-space-green" },
              { icon: <BarChart3 className="w-5 h-5" />, title: "Active Users", value: systemStats.activeUsers.toLocaleString(), color: "text-space-rocket-orange" },
            ].map((stat) => (
              <GlassCard key={stat.title} hover>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/5">{stat.icon}</div>
                  </div>
                  <p className="text-white/60 font-dm-sans text-sm mb-1">{stat.title}</p>
                  <p className={cn("font-orbitron text-3xl font-bold text-white", stat.color)}>{stat.value}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6">
            {[
              { id: "overview", label: "Overview", icon: <BarChart3 className="w-4 h-4" /> },
              { id: "schools", label: "Schools", icon: <School className="w-4 h-4" /> },
              { id: "users", label: "Users", icon: <Users className="w-4 h-4" /> },
              { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl font-dm-sans font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-space-gold/20 text-space-gold border border-space-gold/30"
                    : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <GlassCard hover className="lg:col-span-2">
                <GlassCardContent className="p-6">
                  <h2 className="font-orbitron text-xl font-semibold text-white mb-6">Recent School Activity</h2>
                  <div className="space-y-4">
                    {mockSchools.map((school) => (
                      <div key={school.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center flex-shrink-0">
                          <School className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-orbitron font-semibold text-white truncate">{school.name}</p>
                          <p className="text-sm text-white/50 font-dm-sans">{school.location}</p>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="font-mono text-white">{school.students}</span>
                          <span className="text-white/50 font-dm-sans">students</span>
                          <Badge variant={school.status === "approved" ? "green" : school.status === "pending" ? "cyan" : "default"} size="sm">
                            {school.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCardContent>
              </GlassCard>

              <GlassCard hover>
                <GlassCardContent className="p-6">
                  <h2 className="font-orbitron text-xl font-semibold text-white mb-6">Platform Health</h2>
                  <div className="space-y-6">
                    {[
                      { title: "Uptime", value: "99.9%", color: "bg-space-green" },
                      { title: "API Response Time", value: "145ms", color: "bg-space-cyan" },
                      { title: "Database Size", value: "2.4 GB", color: "bg-space-purple" },
                      { title: "Pending Approvals", value: "3", color: "bg-space-gold" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-white/60 font-dm-sans mb-1">{item.title}</p>
                          <p className="font-orbitron font-bold text-white">{item.value}</p>
                        </div>
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", item.color)} style={{ width: item.value === "99.9%" ? "99%" : item.value === "145ms" ? "70%" : item.value === "2.4 GB" ? "40%" : "60%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCardContent>
              </GlassCard>
            </div>
          )}

          {/* Schools Tab */}
          {activeTab === "schools" && (
            <GlassCard hover>
              <GlassCardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-orbitron text-xl font-semibold text-white">Registered Schools</h2>
                  <button className="btn-primary px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Add School
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="pb-3 text-sm text-white/50 font-dm-sans">School Name</th>
                        <th className="pb-3 text-sm text-white/50 font-dm-sans">Location</th>
                        <th className="pb-3 text-sm text-white/50 font-dm-sans">Students</th>
                        <th className="pb-3 text-sm text-white/50 font-dm-sans">Teachers</th>
                        <th className="pb-3 text-sm text-white/50 font-dm-sans">Status</th>
                        <th className="pb-3 text-sm text-white/50 font-dm-sans">Joined</th>
                        <th className="pb-3 text-sm text-white/50 font-dm-sans">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockSchools.map((school) => (
                        <tr key={school.id} className="border-b border-white/10 hover:bg-white/5 transition-all">
                          <td className="py-4 text-white font-dm-sans">{school.name}</td>
                          <td className="py-4 text-white/70 font-dm-sans">{school.location}</td>
                          <td className="py-4 font-mono text-white">{school.students}</td>
                          <td className="py-4 font-mono text-white">{school.teachers}</td>
                          <td className="py-4">
                            <Badge variant={school.status === "approved" ? "green" : school.status === "pending" ? "cyan" : "default"} size="sm">
                              {school.status}
                            </Badge>
                          </td>
                          <td className="py-4 text-white/60 font-dm-sans text-sm">{school.joined}</td>
                          <td className="py-4">
                            <button className="text-white/60 hover:text-space-green transition-colors">
                              <Mail className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCardContent>
            </GlassCard>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <GlassCard hover>
              <GlassCardContent className="p-6">
                <h2 className="font-orbitron text-xl font-semibold text-white mb-6">User Management</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { role: "Student", count: "12,450", color: "text-space-cyan" },
                    { role: "Teacher", count: "890", color: "text-space-purple" },
                    { role: "Admin", count: "12", color: "text-space-gold" },
                  ].map((item) => (
                    <div key={item.role} className="p-4 bg-white/5 rounded-xl">
                      <p className="text-sm text-white/60 font-dm-sans mb-2">{item.role}s</p>
                      <p className={cn("font-orbitron text-2xl font-bold text-white", item.color)}>{item.count}</p>
                    </div>
                  ))}
                </div>
              </GlassCardContent>
            </GlassCard>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <GlassCard hover>
              <GlassCardContent className="p-6">
                <h2 className="font-orbitron text-xl font-semibold text-white mb-6">Platform Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="font-orbitron font-medium text-white">AI Quiz Generation</p>
                      <p className="text-xs text-white/50 font-dm-sans">Enable AI-powered quiz generation for all courses</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-space-green flex items-center justify-center transition-all">
                      <span className="w-4 h-4 bg-white rounded-full transform translate-x-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="font-orbitron font-medium text-white">Email Notifications</p>
                      <p className="text-xs text-white/50 font-dm-sans">Send automated emails for streaks and achievements</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-space-green flex items-center justify-center transition-all">
                      <span className="w-4 h-4 bg-white rounded-full transform translate-x-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="font-orbitron font-medium text-white">Maintenance Mode</p>
                      <p className="text-xs text-white/50 font-dm-sans">Temporarily disable platform access</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all">
                      <span className="w-4 h-4 bg-white/50 rounded-full" />
                    </button>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;