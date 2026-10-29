import React from "react";
import { GlassCard, GlassCardContent, GlassCardFooter } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { Users, Building, Shield, Settings, Mail, Calendar, TrendingUp, Award, Star, Clock, ArrowUpDown, UsersOff, LogOut, Search, Filter, Plus, Delete, Check, X, MoreVertical } from "lucide-react";

interface School {
  id: number;
  name: string;
  location: string;
  principal: string;
  students: number;
  level: number;
  xp: number;
  status: "active" | "pending" | "suspended";
  verified: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: "student" | "teacher" | "admin";
  status: "active" | "inactive" | "pending";
  level?: number;
  xp?: number;
  schoolId?: number;
}

const schools: School[] = [
  { id: 1, name: "Queen's College, Lagos", location: "Lagos", principal: "Dr. Adeyemi", students: 2400, level: 8, xp: 125000, status: "active", verified: true },
  { id: 2, name: "King's College, Lagos", location: "Lagos", principal: "Prof. Okonkwo", students: 1850, level: 7, xp: 98000, status: "active", verified: true },
  { id: 3, name: "Loyola Jesuit College, Abuja", location: "Abuja", principal: "Fr. Michael", students: 1200, level: 6, xp: 62000, status: "active", verified: true },
  { id: 4, name: "Federal Government College, Enugu", location: "Enugu", principal: "Mrs. Chukwu", students: 950, level: 5, xp: 45000, status: "pending", verified: false },
  { id: 5, name: "Briggs Kenny College, Port Harcourt", location: "Port Harcourt", principal: "Dr. Peters", students: 780, level: 4, xp: 32000, status: "active", verified: true },
];

const users: User[] = [
  { id: 1, name: "Adaobi Nwosu", email: "adaobi@school.ng", role: "student", status: "active", level: 8, xp: 12500, schoolId: 1 },
  { id: 2, name: "Chinedu Okafor", email: "chinedu@school.ng", role: "student", status: "active", level: 6, xp: 9800, schoolId: 1 },
  { id: 3, name: "Fatima Ibrahim", email: "fatima@school.ng", role: "student", status: "active", level: 5, xp: 7200, schoolId: 2 },
  { id: 4, name: "Emeka Nwankwo", email: "emeka@school.ng", role: "student", status: "inactive", level: 4, xp: 5600, schoolId: 3 },
  { id: 5, name: "Zainab Aliyu", email: "zainab@school.ng", role: "student", status: "pending", level: 3, xp: 3400, schoolId: 1 },
  { id: 6, name: "Mr. Adebayo", email: "adebayo@school.ng", role: "teacher", status: "active", schoolId: 1 },
  { id: 7, name: "Mrs. Okonkwo", email: "okonkwo@school.ng", role: "teacher", status: "active", schoolId: 2 },
  { id: 8, name: "Admin User", email: "admin@spaceclubs.ng", role: "admin", status: "active" },
];

export default function AdminDashboard() {
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
                <h1 className="heading-xl text-white mb-1">Admin Panel</h1>
                <p className="text-sm text-white/50 font-dm-sans">Platform management and user administration</p>
              </div>
              <div className="flex gap-3">
                <button className="btn-secondary flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Search
                </button>
                <button className="btn-primary flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add User
                </button>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Total Users</p>
                    <p className="font-orbitron text-2xl font-bold text-white">1,247</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Active Schools</p>
                    <p className="font-orbitron text-2xl font-bold text-white">12</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Total XP Earned</p>
                    <p className="font-orbitron text-2xl font-bold text-white">1,250,000</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center">
                    <Award className="w-5 h-5 text-space-navy" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Verified Schools</p>
                    <p className="font-orbitron text-2xl font-bold text-white">9</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Admin Actions</p>
                    <p className="font-orbitron text-2xl font-bold text-white">2,450</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-coral to-space-orange flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Users Table */}
            <GlassCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-orbitron text-lg font-semibold text-white">User Management</h3>
                  <button className="btn-secondary text-sm px-4 py-2">Invite New User</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Name</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Email</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Role</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">School</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Status</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Level</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">XP</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              {user.role === "admin" && (
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                  <Shield className="w-4 h-4 text-space-gold" />
                                </div>
                              )}
                              {user.role !== "admin" && (
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center">
                                  <Users className="w-4 h-4 text-white" />
                                </div>
                              )}
                              <div>
                                <div className="font-orbitron font-medium text-white">{user.name}</div>
                                <div className="text-xs text-white/50 font-dm-sans">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="text-sm text-white/70 font-dm-sans">{user.email}</span>
                          </td>
                          <td className="py-4">
                            <Badge variant={user.role} size="sm">
                              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4">
                            {user.schoolId && schools.filter((s) => s.id === user.schoolId)[0] ? (
                              <span className="text-sm text-white/70 font-dm-sans">
                                {schools.filter((s) => s.id === user.schoolId)[0].name}
                              </span>
                            ) : (
                              <span className="text-sm text-white/70 font-dm-sans">No School</span>
                            )}
                          </td>
                          <td className="py-4">
                            <Badge
                              variant={user.status === "active" ? "green" : user.status === "inactive" ? "default" : "gold"}
                              size="sm"
                            >
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4">
                            {user.level && <span className="font-orbitron font-medium text-white">Lv {user.level}</span>}
                          </td>
                          <td className="py-4">
                            {user.xp && <span className="font-mono font-medium text-white">{user.xp.toLocaleString()}</span>}
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

            {/* Schools Management */}
            <div className="mt-8">
              <h2 className="heading-lg text-white mb-6">School Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schools.map((school) => (
                  <GlassCard key={school.id} hover className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${school.verified ? "bg-green-100" : "bg-red-100"}`}>
                          {school.verified ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-red-600" />}</div>
                        <div>
                          <div className="font-orbitron font-semibold text-white text-sm">{school.name}</div>
                          <div className="text-xs text-white/50 font-dm-sans">{school.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-white text-lg">{school.students.toLocaleString()}</div>
                        <div className="text-xs text-white/40 font-dm-sans">Students</div>
                      </div>
                    </div>
                    <XPBar value={school.xp} max={200000} showLabel={false} size="sm" color="purple" />
                    <div className="mt-3">
                      <button className="btn-secondary text-sm px-3 py-1">Verify School</button>
                      <button className="btn-secondary text-sm px-3 py-1 ml-2">Suspend</button>
                    </div>
                  </GlassCard>
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