import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { XPBar } from "@/components/XPBar";
import {
  Trophy,
  Medal,
  Crown,
  Rocket,
  Flame,
  Target,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  school: string;
  points: number;
  xp: number;
  streak: number;
  badges: number;
  level: number;
  trend?: "up" | "down" | "same";
}

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Adaeze Okafor", school: "Lagos International School", points: 12500, xp: 12500, streak: 21, badges: 12, level: 12, trend: "up" },
  { rank: 2, name: "Tunde Bakare", school: "Crown International School", points: 11200, xp: 11200, streak: 14, badges: 10, level: 11, trend: "up" },
  { rank: 3, name: "Fatima Ibrahim", school: "Greenfield College", points: 10800, xp: 10800, streak: 18, badges: 11, level: 11, trend: "same" },
  { rank: 4, name: "Chidi Nwosu", school: "Atlantic Hall", points: 9800, xp: 9800, streak: 9, badges: 8, level: 10, trend: "up" },
  { rank: 5, name: "Zainab Musa", school: "Heritage House", points: 9400, xp: 9400, streak: 12, badges: 9, level: 10, trend: "down" },
  { rank: 6, name: "Ibrahim Danjuma", school: "Dowen College", points: 8900, xp: 8900, streak: 7, badges: 7, level: 9, trend: "up" },
  { rank: 7, name: "Aisha Bello", school: "Babcock School", points: 8500, xp: 8500, streak: 15, badges: 8, level: 9, trend: "up" },
  { rank: 8, name: "Emeka Eze", school: "International School", points: 8100, xp: 8100, streak: 5, badges: 6, level: 8, trend: "same" },
  { rank: 9, name: "Ngozi Okonkwo", school: "Lead British International", points: 7700, xp: 7700, streak: 11, badges: 7, level: 8, trend: "up" },
  { rank: 10, name: "Yusuf Ali", school: "Cheetah International", points: 7300, xp: 7300, streak: 6, badges: 5, level: 7, trend: "down" },
];

const rankStyles = [
  "from-space-gold to-yellow-400 text-space-navy",
  "from-space-cyan to-space-purple text-space-navy",
  "from-orange-400 to-space-gold text-space-navy",
];

const Leaderboard = () => {
  const topThree = mockLeaderboard.slice(0, 3);
  const rest = mockLeaderboard.slice(3);

  const getTrendIcon = (trend?: string) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-space-green-light" />;
    if (trend === "down") return <TrendingUp className="w-4 h-4 text-space-coral rotate-180" />;
    return <Target className="w-4 h-4 text-white/40" />;
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) {
      return (
        <div className={cn("w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center", rankStyles[rank - 1])}>
          <Medal className="w-5 h-5" />
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
        <span className="font-orbitron font-bold text-white/70">{rank}</span>
      </div>
    );
  };

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
                <Trophy className="w-6 h-6 text-space-gold" />
              </div>
              <Badge variant="gold" size="lg">Live Mission Leaderboard</Badge>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              National <span className="text-gradient-gold">XP Leaderboard</span>
            </h1>
            <p className="text-white/50 font-dm-sans max-w-2xl">
              The top Nigerian space cadets ranked by total XP earned across all courses. Rankings update in real-time as missions complete.
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {topThree.map((entry, index) => (
              <GlassCard hover key={entry.rank} className="relative overflow-hidden">
                {index === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-space-gold to-yellow-400" />
                )}
                <GlassCardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{getRankBadge(entry.rank)}</div>
                    {index === 0 && (
                      <Crown className="w-6 h-6 text-space-gold mb-2" />
                    )}
                    <h3 className="font-orbitron font-bold text-xl text-white">{entry.name}</h3>
                    <p className="text-sm text-white/50 font-dm-sans mb-4">{entry.school}</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-orbitron text-3xl font-bold text-space-gold">{entry.points.toLocaleString()}</span>
                      <span className="text-sm text-white/50 font-dm-sans">XP</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60 font-dm-sans">
                      <span className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-space-coral" />
                        {entry.streak} day streak
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-space-purple" />
                        {entry.badges} badges
                      </span>
                    </div>
                  </div>
                </GlassCardContent>
              </GlassCard>
            ))}
          </div>

          {/* Full Leaderboard */}
          <GlassCard hover>
            <GlassCardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-orbitron text-xl font-semibold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-space-cyan" />
                  Top Cadets
                </h2>
                <Badge variant="cyan" size="sm">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-space-green rounded-full animate-pulse" />
                    LIVE
                  </span>
                </Badge>
              </div>

              <div className="space-y-2">
                {rest.map((entry) => (
                  <Link
                    key={entry.rank}
                    to={`/profile/${entry.rank}`}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-orbitron font-bold text-white/70">{entry.rank}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-orbitron font-semibold text-white truncate group-hover:text-space-green-light transition-colors">
                        {entry.name}
                      </p>
                      <p className="text-sm text-white/50 font-dm-sans truncate">{entry.school}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-space-coral" />
                        <span className="font-mono text-space-coral">{entry.streak}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-space-purple" />
                        <span className="font-mono text-space-purple">{entry.badges}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Rocket className="w-4 h-4 text-space-cyan" />
                        <span className="font-mono text-space-cyan">{entry.level}</span>
                      </div>
                      <div className="text-right min-w-[80px]">
                        <p className="font-orbitron font-bold text-space-gold">{entry.points.toLocaleString()}</p>
                        <p className="text-xs text-white/40 font-dm-sans">XP</p>
                      </div>
                      {getTrendIcon(entry.trend)}
                    </div>
                  </Link>
                ))}
              </div>
            </GlassCardContent>
          </GlassCard>

          {/* Your Rank */}
          <GlassCard hover className="mt-6">
            <GlassCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50 font-dm-sans mb-1">Your Rank</p>
                  <p className="font-orbitron text-4xl font-bold text-space-green-light">42</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/50 font-dm-sans mb-1">Points to next rank</p>
                  <p className="font-orbitron text-4xl font-bold text-space-cyan">1,250 XP</p>
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
