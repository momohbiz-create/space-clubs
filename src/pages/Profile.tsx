import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { LevelBadge } from "@/components/Badge";
import {
  User,
  Award,
  Zap,
  Flame,
  Calendar,
  BookOpen,
  Trophy,
  Star,
  Rocket,
  Medal,
  Target,
  TrendingUp,
} from "lucide-react";

interface Badge {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  rarity?: "common" | "rare" | "epic" | "legendary";
}

const badges: Badge[] = [
  { id: "1", title: "First Launch", description: "Complete your first course", icon: <Rocket className="w-6 h-6" />, earned: true, rarity: "common" },
  { id: "2", title: "Star Explorer", description: "Earn 1000 XP", icon: <Star className="w-6 h-6" />, earned: true, rarity: "common" },
  { id: "3", title: "Mission Commander", description: "Complete 5 courses", icon: <Trophy className="w-6 h-6" />, earned: false, rarity: "epic" },
  { id: "4", title: "Space Scholar", description: "Maintain 7-day streak", icon: <Calendar className="w-6 h-6" />, earned: false, rarity: "rare" },
  { id: "5", title: "Orbit Pioneer", description: "Reach Level 5", icon: <Medal className="w-6 h-6" />, earned: true, rarity: "rare" },
  { id: "6", title: "Black Hole Master", description: "Score 100% on AI quiz", icon: <Target className="w-6 h-6" />, earned: false, rarity: "legendary" },
];

const Profile = () => {
  const userStats = {
    level: 8,
    xp: 3450,
    maxXp: 5000,
    streak: 7,
    coursesCompleted: 3,
    totalXP: 12500,
    rank: 42,
    totalStudents: 2450,
  };

  const earnedBadges = badges.filter((b) => b.earned);

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <TopBar />
      <main className="relative z-10 pt-6 lg:pt-12 pb-24 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <GlassCard hover className="mb-8">
            <GlassCardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                    <h1 className="font-orbitron text-2xl md:text-3xl font-bold text-white">
                      Cadet Space Explorer
                    </h1>
                    <Badge variant="gold" size="lg">
                      <Award className="w-4 h-4" />
                      Level {userStats.level}
                    </Badge>
                  </div>
                  <p className="text-white/50 font-dm-sans mb-4">
                    Lagos, Nigeria • Student • Greenfield College
                  </p>
                  <XPBar
                    value={userStats.xp}
                    max={userStats.maxXp}
                    label="Level Progress"
                    className="max-w-md"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="font-orbitron text-2xl font-bold text-space-gold">{userStats.totalXP.toLocaleString()}</p>
                    <p className="text-xs text-white/50 font-dm-sans">Total XP</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="font-orbitron text-2xl font-bold text-space-cyan">{userStats.streak}</p>
                    <p className="text-xs text-white/50 font-dm-sans">Day Streak</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="font-orbitron text-2xl font-bold text-space-green">{userStats.coursesCompleted}</p>
                    <p className="text-xs text-white/50 font-dm-sans">Courses Done</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="font-orbitron text-2xl font-bold text-space-purple">{userStats.rank}</p>
                    <p className="text-xs text-white/50 font-dm-sans">National Rank</p>
                  </div>
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Badges */}
            <div className="lg:col-span-2">
              <GlassCard hover>
                <GlassCardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-orbitron text-xl font-semibold text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-space-gold" />
                      Badge Collection
                    </h2>
                    <Badge variant="gold" size="sm">
                      {earnedBadges.length} / {badges.length} Earned
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {badges.map((badge) => (
                      <div
                        key={badge.id}
                        className={cn(
                          "p-4 rounded-xl border text-center transition-all",
                          badge.earned
                            ? "bg-space-gold/10 border-space-gold/30"
                            : "bg-white/5 border-white/10 opacity-60"
                        )}
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",
                            badge.earned
                              ? "bg-gradient-to-br from-space-gold to-yellow-400"
                              : "bg-white/10"
                          )}
                        >
                          {badge.icon}
                        </div>
                        <p className="font-orbitron font-semibold text-white text-sm">{badge.title}</p>
                        <p className="text-xs text-white/50 font-dm-sans mb-2">{badge.description}</p>
                        {badge.earned ? (
                          <Badge variant="gold" size="sm">Earned</Badge>
                        ) : (
                          <Badge variant="default" size="sm">Locked</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </GlassCardContent>
              </GlassCard>
            </div>

            {/* Right Column - Level & Stats */}
            <div className="space-y-6">
              <GlassCard hover>
                <GlassCardContent className="p-6">
                  <h3 className="font-orbitron text-lg font-semibold text-white mb-4">Level Details</h3>
                  <LevelBadge level={userStats.level} xp={userStats.xp} maxXp={userStats.maxXp} />
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm font-dm-sans">
                      <span className="text-white/60">Current Level</span>
                      <span className="font-orbitron text-white">{userStats.level}</span>
                    </div>
                    <div className="flex justify-between text-sm font-dm-sans">
                      <span className="text-white/60">XP to Next Level</span>
                      <span className="font-orbitron text-space-cyan">{userStats.maxXp - userStats.xp} XP</span>
                    </div>
                  </div>
                </GlassCardContent>
              </GlassCard>

              <GlassCard hover>
                <GlassCardContent className="p-6">
                  <h3 className="font-orbitron text-lg font-semibold text-white mb-4">Weekly Activity</h3>
                  <div className="space-y-3">
                    {[
                      { day: "Mon", xp: 450, color: "bg-space-green" },
                      { day: "Tue", xp: 320, color: "bg-space-cyan" },
                      { day: "Wed", xp: 580, color: "bg-space-purple" },
                      { day: "Thu", xp: 410, color: "bg-space-rocket-orange" },
                      { day: "Fri", xp: 520, color: "bg-space-gold" },
                      { day: "Sat", xp: 280, color: "bg-space-green" },
                      { day: "Sun", xp: 350, color: "bg-space-cyan" },
                    ].map((day) => (
                      <div key={day.day} className="flex items-center gap-3">
                        <span className="w-8 text-sm text-white/60 font-dm-sans">{day.day}</span>
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", day.color)} style={{ width: `${(day.xp / 600) * 100}%` }} />
                        </div>
                        <span className="w-12 text-right font-mono text-sm text-white">{day.xp} XP</span>
                      </div>
                    ))}
                  </div>
                </GlassCardContent>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;