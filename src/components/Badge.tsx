import React from "react";
import { cn } from "@/lib/utils";
import { XPBar } from "./XPBar";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "green" | "cyan" | "purple" | "coral" | "default";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  icon,
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    gold: "bg-space-gold/20 text-space-gold border border-space-gold/30",
    green: "bg-space-green/20 text-space-green-light border border-space-green/30",
    cyan: "bg-space-cyan/20 text-space-cyan border border-space-cyan/30",
    purple: "bg-space-purple/20 text-space-purple border border-space-purple/30",
    coral: "bg-space-coral/20 text-space-coral border border-space-coral/30",
    default: "bg-white/10 text-white/70 border border-white/10",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-semibold rounded-full",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}

interface LevelBadgeProps {
  level: number;
  xp: number;
  maxXp: number;
  className?: string;
}

export function LevelBadge({ level, xp, maxXp, className }: LevelBadgeProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center">
          <span className="font-orbitron font-bold text-space-navy text-lg">
            {level}
          </span>
        </div>
        <div>
          <p className="font-orbitron font-semibold text-white">Level {level}</p>
          <p className="text-xs text-white/50 font-dm-sans">
            {xp} / {maxXp} XP
          </p>
        </div>
      </div>
      <XPBar value={xp} max={maxXp} showLabel={false} size="sm" className="w-32" />
    </div>
  );
}
