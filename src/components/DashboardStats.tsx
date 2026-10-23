import React from "react";
import { GlassCard } from "./GlassCard";
import { Badge } from "./Badge";
import {
  TrendingUp,
  Award,
  Zap,
  Calendar,
  Clock,
  Star,
  Trophy,
  BookOpen,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: { value: string; positive: boolean };
  badge?: { text: string; variant: "gold" | "green" | "cyan" | "purple" };
  className?: string;
}

function StatCard({ title, value, icon, trend, badge, className }: StatCardProps) {
  return (
    <GlassCard hover className={className}>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 rounded-lg bg-white/5">
            {icon}
          </div>
          {badge && <Badge variant={badge.variant} size="sm">{badge.text}</Badge>}
        </div>
        <p className="text-white/60 font-dm-sans text-sm mb-1">{title}</p>
        <p className="font-orbitron text-3xl font-bold text-white">{value}</p>
        {trend && (
          <div className={cn(
            "flex items-center gap-1 mt-2 text-sm font-dm-sans",
            trend.positive ? "text-space-green-light" : "text-space-coral"
          )}>
            <TrendingUp className={cn("w-4 h-4", !trend.positive && "rotate-180")} />
            {trend.value}
          </div>
        )}
      </div>
    </GlassCard>
  );
}

interface DashboardStatsProps {
  stats: {
    level: number;
    xp: number;
    maxXp: number;
    streak: number;
    coursesCompleted: number;
    totalXP: number;
    rank: number;
    totalStudents: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatCard
        title="Current Level"
        value={stats.level}
        icon={<Award className="w-5 h-5 text-space-gold" />}
        badge={{ text: "Cadet", variant: "gold" }}
      />
      <StatCard
        title="Total XP"
        value={stats.totalXP.toLocaleString()}
        icon={<Zap className="w-5 h-5 text-space-cyan" />}
        trend={{ value: "+250 this week", positive: true }}
      />
      <StatCard
        title="Streak"
        value={stats.streak}
        icon={<Calendar className="w-5 h-5 text-space-green" />}
        trend={{ value: "+1 day", positive: true }}
        badge={{ text: "Active", variant: "green" }}
      />
      <StatCard
        title="Courses Completed"
        value={stats.coursesCompleted}
        icon={<BookOpen className="w-5 h-5 text-space-purple" />}
      />
    </div>
  );
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  progress?: number;
  maxProgress?: number;
}

export function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "First Launch",
      description: "Complete your first course",
      icon: <Rocket className="w-6 h-6" />,
      earned: true,
    },
    {
      id: "2",
      title: "Star Explorer",
      description: "Earn 1000 XP",
      icon: <Star className="w-6 h-6" />,
      earned: true,
    },
    {
      id: "3",
      title: "Mission Commander",
      description: "Complete 5 courses",
      icon: <Trophy className="w-6 h-6" />,
      earned: false,
      progress: 3,
      maxProgress: 5,
    },
    {
      id: "4",
      title: "Space Scholar",
      description: "Maintain 7-day streak",
      icon: <Clock className="w-6 h-6" />,
      earned: false,
      progress: 5,
      maxProgress: 7,
    },
  ];

  return (
    <GlassCard hover>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-orbitron text-lg font-semibold text-white">
            Achievements
          </h3>
          <Badge variant="cyan" size="sm">
            {achievements.filter((a) => a.earned).length} / {achievements.length}
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={cn(
                "p-4 rounded-xl border transition-all",
                achievement.earned
                  ? "bg-space-gold/10 border-space-gold/30"
                  : "bg-white/5 border-white/10"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center mb-2",
                  achievement.earned
                    ? "bg-gradient-to-br from-space-gold to-yellow-400"
                    : "bg-white/10"
                )}
              >
                {achievement.icon}
              </div>
              <p className="font-orbitron font-semibold text-white text-sm">
                {achievement.title}
              </p>
              <p className="text-xs text-white/50 font-dm-sans">
                {achievement.description}
              </p>
              {achievement.progress !== undefined && achievement.maxProgress && (
                <XPBar
                  value={achievement.progress}
                  max={achievement.maxProgress}
                  showLabel={false}
                  size="sm"
                  className="mt-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";