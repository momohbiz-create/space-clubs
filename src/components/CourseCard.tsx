import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent, GlassCardFooter } from "./GlassCard";
import { XPBar } from "./XPBar";
import { Badge } from "./Badge";
import {
  Play,
  Clock,
  Users,
  Award,
  ArrowRight,
  Lock,
  Star,
  TrendingUp,
} from "lucide-react";

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
  isLocked?: boolean;
  thumbnail?: string;
  tags: string[];
}

interface CourseCardProps {
  course: Course;
  variant?: "default" | "compact" | "featured";
  onEnroll?: () => void;
}

export function CourseCard({
  course,
  variant = "default",
  onEnroll,
}: CourseCardProps) {
  const levelColors = {
    Beginner: "green",
    Intermediate: "cyan",
    Advanced: "purple",
  } as const;

  if (variant === "compact") {
    return (
      <Link
        to={`/courses/${course.id}`}
        className="group glass-card-hover p-4 flex gap-4"
      >
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-space-green/20 to-space-cyan/20 flex items-center justify-center flex-shrink-0">
          <Award className="w-8 h-8 text-space-green" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-orbitron font-semibold text-white truncate">
            {course.title}
          </h3>
          <p className="text-sm text-white/50 font-dm-sans truncate mt-1">
            {course.description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <Badge variant={levelColors[course.level]} size="sm">
              {course.level}
            </Badge>
            <span className="text-xs text-white/40 font-dm-sans">
              {course.lessons} lessons
            </span>
          </div>
          <XPBar
            value={course.progress}
            max={100}
            showLabel={false}
            size="sm"
            className="mt-2"
          />
        </div>
        <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-space-green transition-colors" />
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <GlassCard hover className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-space-green/10 via-transparent to-space-cyan/10" />
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Badge variant="gold" icon={<Star className="w-3 h-3" />}>
                Featured
              </Badge>
              <h3 className="font-orbitron text-2xl font-bold text-white mt-2">
                {course.title}
              </h3>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>

          <p className="text-white/70 font-dm-sans mb-6 leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {course.tags.map((tag) => (
              <Badge key={tag} variant="default" size="sm">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-white/5 rounded-xl">
              <p className="font-orbitron text-xl font-bold text-space-gold">
                {course.xpReward}
              </p>
              <p className="text-xs text-white/50 font-dm-sans">XP Reward</p>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-xl">
              <p className="font-orbitron text-xl font-bold text-space-cyan">
                {course.duration}
              </p>
              <p className="text-xs text-white/50 font-dm-sans">Duration</p>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-xl">
              <p className="font-orbitron text-xl font-bold text-space-purple">
                {course.enrolled.toLocaleString()}
              </p>
              <p className="text-xs text-white/50 font-dm-sans">Enrolled</p>
            </div>
          </div>

          <XPBar
            value={course.progress}
            max={100}
            label="Course Progress"
            className="mb-4"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              onEnroll?.();
            }}
            className={cn(
              "w-full btn-primary flex items-center justify-center gap-2",
              course.isLocked && "opacity-50 cursor-not-allowed"
            )}
            disabled={course.isLocked}
          >
            {course.isLocked ? (
              <>
                <Lock className="w-4 h-4" />
                Locked - Complete Prerequisites
              </>
            ) : course.progress > 0 ? (
              <>
                <Play className="w-4 h-4" />
                Continue Learning
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Start Course
              </>
            )}
          </button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard hover className="group h-full flex flex-col">
      <div className="relative aspect-video bg-gradient-to-br from-space-green/10 to-space-cyan/10">
        {course.isLocked && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Lock className="w-10 h-10 text-white/50" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant={levelColors[course.level]} size="sm">
            {course.level}
          </Badge>
        </div>
      </div>

      <GlassCardContent className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="cyan" size="sm">
            {course.category}
          </Badge>
          <span className="text-xs text-white/40 font-dm-sans">
            {course.lessons} lessons
          </span>
        </div>

        <h3 className="font-orbitron text-lg font-semibold text-white mb-2">
          {course.title}
        </h3>

        <p className="text-white/60 font-dm-sans text-sm mb-4 flex-1">
          {course.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-white/50 font-dm-sans mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {course.enrolled.toLocaleString()}
          </span>
        </div>

        <XPBar
          value={course.progress}
          max={100}
          showLabel={false}
          className="mb-4"
        />
      </GlassCardContent>

      <GlassCardFooter>
        <Link
          to={`/courses/${course.id}`}
          className={cn(
            "w-full btn-primary flex items-center justify-center gap-2",
            course.isLocked && "opacity-50 cursor-not-allowed"
          )}
        >
          {course.isLocked ? (
            <>
              <Lock className="w-4 h-4" />
              Locked
            </>
          ) : course.progress > 0 ? (
            <>
              <Play className="w-4 h-4" />
              Continue
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Start
            </>
          )}
        </Link>
      </GlassCardFooter>
    </GlassCard>
  );
}

export function CourseGrid({ courses, variant = "default" }: { courses: Course[]; variant?: "default" | "compact" | "featured" }) {
  return (
    <div
      className={cn(
        "grid gap-6",
        variant === "compact"
          ? "grid-cols-1"
          : variant === "featured"
          ? "grid-cols-1"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} variant={variant} />
      ))}
    </div>
  );
}