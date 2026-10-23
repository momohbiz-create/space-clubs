import React, { useMemo } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  type: "cyan" | "gold" | "green" | "white";
}

interface ShootingStar {
  id: number;
  left: string;
  top: string;
  duration: number;
}

export function Starfield() {
  const stars = useMemo<Star[]>(() => {
    const types: Star["type"][] = ["cyan", "gold", "green", "white"];
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4,
      type: types[Math.floor(Math.random() * types.length)],
    }));
  }, []);

  const shootingStars = useMemo<ShootingStar[]>(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 40}%`,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.type === "white" ? "" : `star-${star.type}`}`}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
