import React from "react";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { Trophy, Star, Medal, Crown, TrendingUp, TrendingDown, Clock, Users, Rocket } from "lucide-react";

interface LeaderboardEntry {
  id: number;
  rank: number;
  name: string;
  school: string;
  level: number;
  xp: number;
  streak: number;
  badge: string;
  change: number;
  isCurrentUser?: boolean;
}

const leaderboardData: LeaderboardEntry[] = [
  { id: 1, rank: 1, name: "Adaobi Nwosu", school: "Queen's College, Lagos", level: 7, xp: 12500, streak: 14, badge: "gold", change: 0 },
  { id: 2, rank: 2, name: "Chinedu Okafor", school: "King's College, Lagos", level: 6, xp: 11800, streak: 12, badge: "silver", change: 1 },
  { id: 3, rank: 3, name: "Fatima Ibrahim", school: "Federal Government College, Abuja", level: 6, xp: 11200, streak: 10, badge: "bronze", change: -1 },
  { id: 4, rank: 4, name: "Emeka Nwankwo", school: "Loyola Jesuit College, Abuja", level: 5, xp: 9800, streak: 8, badge: "none", change: 2 },
  { id: 5, rank: 5, name: "Zainab Aliyu", school: "Vivian Fowler Memorial College, Lagos", level: 5, xp: 9200, streak: 7, badge: "none", change: 0 },
  { id: 6, rank: 6, name: "Tunde Adebayo", school: "King's College, Lagos", level: 4, xp: 8500, streak: 6, badge: "none", change: -2 },
  { id: 7, rank: 7, name: "Ngozi Chukwu", school: "Federal Government College, Enugu", level: 4, xp: 7900, streak: 5, badge: "none", change: 1 },
  { id: 8, rank: 8, name: "Ibrahim Musa", school: "Briggs Kenny College, Port Harcourt", level: 4, xp: 7400, streak: 4, badge: "none", change: -1 },
  { id: 9, rank: 9, name: "Amina Hassan", school: "Federal Government College, Kaduna", level: 3, xp: 6800, streak: 3, badge: "none", change: 0 },
  { id: 10, rank: 10, name: "Kelechi Nnamdi", school: "Loyola Jesuit College, Abuja", level: 3, xp: 6200, streak: 2, badge: "none", change: 1 },
];

export default function Leaderboard() {
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-space-navy" />
                </div>
                <div>
                  <h1 className="heading-xl text-white mb-1">National Leaderboard</h1>
                  <p className="text-sm text-white/50 font-dm-sans">Compete with students across Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/40" />
                  <span className="text-sm text-white/60 font-dm-sans">Weekly Leaderboard</span>
                </div>
                <div className="flex gap-2">
                  <button className="btn-secondary px-4 py-2 rounded-lg text-sm">This Week</button>
                  <button className="btn-secondary px-4 py-2 rounded-lg text-sm">This Month</button>
                  <button className="btn-secondary px-4 py-2 rounded-lg text-sm">All Time</button>
                </div>
              </div>
            </div>

            {/* Top 3 Podium */}
            <div className="flex justify-center items-end gap-4 mb-8">
              {[leaderboardData[2], leaderboardData[1], leaderboardData[0]].map((entry) => {
                const isWinner = entry.rank === 1;
                const isRunnerUp = entry.rank === 2;
                const isThird = entry.rank === 3;
                return (
                  <div key={entry.id} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-2">
                      <Crown className="w-6 h-6 text-space-gold" />
                    </div>
                    <div className="text-center">
                      <div className={`font-orbitron font-bold ${isWinner ? "text-space-gold text-2xl" : isRunnerUp ? "text-white/60 text-xl" : "text-white/40 text-lg"}`}>
                        #{entry.rank}
                      </div>
                      <div className="font-orbitron font-semibold text-white text-sm">{entry.name}</div>
                      <div className="text-xs text-white/40 font-dm-sans">{entry.school}</div>
                      <div className="mt-2 w-24">
                        <XPBar value={entry.xp} max={15000} showLabel={false} size="sm" color="gold" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full Leaderboard Table */}
            <GlassCard>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Rank</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Student</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">School</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Level</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">XP</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Streak</th>
                        <th className="pb-3 text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.map((entry) => (
                        <tr
                          key={entry.id}
                          className={cn(
                            "border-b border-white/5 hover:bg-white/5 transition-colors",
                            entry.isCurrentUser && "bg-space-green/10"
                          )}
                        >
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              {entry.rank <= 3 ? (
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${entry.rank === 1 ? "bg-space-gold text-space-navy" : entry.rank === 2 ? "bg-white/20 text-white" : "bg-white/10 text-white/50"}`}>
                                  <span className="font-orbitron font-bold text-xs">{entry.rank}</span>
                                </div>
                              ) : (
                                <span className="font-orbitron font-medium text-white/40">{entry.rank}</span>
                              )}
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center flex-shrink-0">
                                <span className="text-[10px] font-orbitron font-bold text-white">{entry.name.charAt(0)}</span>
                              </div>
                              <div>
                                <div className="font-orbitron font-medium text-white">{entry.name}</div>
                                <div className="text-xs text-white/50 font-dm-sans">{entry.school}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="font-orbitron font-medium text-white">{entry.level}</span>
                          </td>
                          <td className="py-4">
                            <span className="font-mono text-white">{entry.xp.toLocaleString()}</span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-space-gold" />
                              <span className="font-orbitron font-medium text-white">{entry.streak}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className={cn(
                              "font-orbitron font-medium text-xs",
                              entry.change > 0 ? "text-space-green-light" : entry.change < 0 ? "text-space-coral" : "text-white/50"
                            )}>
                              {entry.change > 0 ? "+" : ""}{entry.change}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </GlassCard>

            {/* School Rankings */}
            <div className="mt-8">
              <h2 className="heading-lg text-white mb-6">Top Schools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "King's College, Lagos", students: 45, avgXp: 8500, rank: 1 },
                  { name: "Queen's College, Lagos", students: 38, avgXp: 8200, rank: 2 },
                  { name: "Loyola Jesuit College, Abuja", students: 52, avgXp: 7900, rank: 3 },
                  { name: "Federal Government College, Abuja", students: 41, avgXp: 7600, rank: 4 },
                  { name: "Vivian Fowler Memorial College, Lagos", students: 29, avgXp: 7200, rank: 5 },
                  { name: "Briggs Kenny College, Port Harcourt", students: 33, avgXp: 6900, rank: 6 },
                ].map((school) => (
                  <GlassCard key={school.name} hover className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${school.rank === 1 ? "bg-space-gold" : school.rank === 2 ? "bg-white/20" : "bg-white/10"}`}>
                          <span className={`font-orbitron font-bold text-xs ${school.rank === 1 ? "text-space-navy" : "text-white"}`}>
                            #{school.rank}
                          </span>
                        </div>
                        <div>
                          <div className="font-orbitron font-semibold text-white text-sm">{school.name}</div>
                          <div className="text-xs text-white/50 font-dm-sans">{school.students} students</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-white text-lg">{school.avgXp.toLocaleString()}</div>
                        <div className="text-xs text-white/40 font-dm-sans">Avg XP</div>
                      </div>
                    </div>
                    <XPBar value={school.avgXp} max={10000} showLabel={false} size="sm" color="teal" />
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