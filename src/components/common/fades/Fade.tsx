import { ReactNode, useMemo } from "react";
import clsx from "clsx";

interface FadeProps {
  children: ReactNode;
  index: number;
  direction: "up" | "down";
  className?: string;
}

export const Fade = ({ children, index, direction, className }: FadeProps) => {
  const delay = index * 100;
  const animationClass = useMemo(() => {
    switch (direction) {
      case "up":
        return "animate-fade-up";
      case "down":
      default:
        return "animate-fade-down";
    }
  }, [direction]);

  return (
    <div
      className={clsx(className, "opacity-0", animationClass)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
