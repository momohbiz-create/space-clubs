import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  border?: boolean;
}

export function GlassCard({ className, hover = false, border = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-xl rounded-2xl",
        border && "border border-white/10",
        hover && "transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(0,196,111,0.1)]",
        className
      )}
      {...props}
    />
  );
}

interface GlassCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCardHeader({ className, ...props }: GlassCardHeaderProps) {
  return (
    <div
      className={cn("flex flex-col space-y-2 p-6 pb-4", className)}
      {...props}
    />
  );
}

interface GlassCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function GlassCardTitle({ className, ...props }: GlassCardTitleProps) {
  return (
    <h3
      className={cn(
        "text-xl font-orbitron font-semibold leading-none tracking-tight text-white",
        className
      )}
      {...props}
    />
  );
}

interface GlassCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function GlassCardDescription({ className, ...props }: GlassCardDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-white/60 font-dm-sans", className)}
      {...props}
    />
  );
}

interface GlassCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCardContent({ className, ...props }: GlassCardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  );
}

interface GlassCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCardFooter({ className, ...props }: GlassCardFooterProps) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
}
