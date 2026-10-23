import React from "react";
import { cn } from "@/lib/utils";

interface XPBarProps {
  value: number;
  max: number;
  showLabel?: boolean;
  label?: string;
  className?: string;
  color?: "green" | "cyan" | "gold" | "purple";
  size?: "sm" | "md" | "lg";
}

export function XPBar({
  value,
  max,
  showLabel = true,
  label,
  className,
  color = "green",
  size = "md",
}: XPBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses = {
    green: "bg-gradient-to-r from-space-green to-space-green-light",
    cyan: "bg-gradient-to-r from-space-cyan to-space-purple",
    gold: "bg-gradient-to-r from-space-gold to-yellow-400",
    purple: "bg-gradient-to-r from-space-purple to-purple-600",
  };

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={cn("w-full", className)}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-orbitron font-medium text-white">
            {label || "Progress"}
          </span>
          <span className="text-sm font-orbitron font-medium text-space-cyan">
            {value} / {max} XP
          </span>
        </div>
      )}
      <div className={cn("xp-bar rounded-full overflow-hidden", sizeClasses[size])}>
        <div
          className={cn("xp-bar-fill rounded-full transition-all duration-700 ease-out", colorClasses[color])}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label || "Progress"}
        />
      </div>
    </div>
  );
}

interface CircularXPProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
}

export function CircularXP({
  value,
  max,
  size = 80,
  strokeWidth = 6,
  className,
  showValue = true,
}: CircularXPProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          className="text-white/10"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-space-green transition-all duration-700 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            filter: "drop-shadow(0 0 8px rgba(0, 196, 111, 0.6))",
          }}
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-orbitron font-bold text-white">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
}