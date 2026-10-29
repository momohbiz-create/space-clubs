import React from "react";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X, Award, Star, Trophy, Clock, TrendingUp, Crown, Medal } from "lucide-react";

export default function Profile() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navigation />
      <main className="lg:ml-72 min-h-screen">
        <TopBar />
        <div className="pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="heading-xl text-white mb-2">Student Profile</h1>
              <p className="text-white/50 font-dm-sans">
                Manage your account and track your space journey
              </p>
            </div>

            {/* Profile Card */}
            <GlassCard hover className="p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Avatar */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center mb-4">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <button className="btn-secondary text-sm px-4 py-2 flex items-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit Avatar
                  </button>
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">Full Name</label>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <User className="w-5 h-5 text-white/40" />
                        <span className="text-white font-dm-sans">Adaobi Nwosu</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">Email</label>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <Mail className="w-5 h-5 text-white/40" />
                        <span className="text-white font-dm-sans">adaobi@spaceclubs.ng</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">Phone</label>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <Phone className="w-5 h-5 text-white/40" />
                        <span className="text-white font-dm-sans">+234 801 234 5678</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">School</label>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <MapPin className="w-5 h-5 text-white/40" />
                        <span className="text-white font-dm-sans">Queen's College, Lagos</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">Member Since</label>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <Calendar className="w-5 h-5 text-white/40" />
                        <span className="text-white font-dm-sans">January 15, 2024</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-orbitron font-medium text-white/70 mb-2">Account Status</label>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="w-5 h-5 rounded-full bg-space-green" />
                        <span className="text-space-green font-dm-sans">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button className="btn-primary flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                    <button className="btn-secondary flex items-center gap-2">
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <GlassCard hover className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Current Level</p>
                    <p className="font-orbitron text-2xl font-bold text-white">Level 8</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-space-navy" />
                  </div>
                </div>
                <div className="mt-4">
                  <XPBar value={3450} max={5000} showLabel={false} color="gold" />
                </div>
              </GlassCard>

              <GlassCard hover className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 font-dm-sans text-sm mb-1">Total XP</p>
                    <p className="font-orbitron text-2xl font-bold text-white">12,500</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <XPBar value={12500} max={50000} showLabel={false} color="purple" />
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

            {/* Badges Collection */}
            <div className="mb-8">
              <h2 className="heading-lg text-white mb-6">Badges Collection</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "First Launch", icon: <Rocket className="w-6 h-6" />, earned: true, rarity: "Common" },
                  { name: "Star Explorer", icon: <Star className="w-6 h-6" />, earned: true, rarity: "Rare" },
                  { name: "Mission Commander", icon: <Trophy className="w-6 h-6" />, earned: false, rarity: "Epic" },
                  { name: "Space Scholar", icon: <Award className="w-6 h-6" />, earned: false, rarity: "Legendary" },
                ].map((badge) => (
                  <GlassCard key={badge.name} hover className={cn("p-4 text-center", !badge.earned && "opacity-50")}>                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${badge.earned ? "bg-gradient-to-br from-space-gold to-yellow-400" : "bg-white/10"}`}>                      {badge.icon}</div>
                    <h3 className="font-orbitron font-semibold text-white text-sm">{badge.name}</h3>
                    <p className="text-xs text-white/40 font-dm-sans mt-1">{badge.rarity}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="heading-lg text-white mb-6">Recent Activity</h2>
              <GlassCard>
                <div className="p-6">
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
              </GlassCard>
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