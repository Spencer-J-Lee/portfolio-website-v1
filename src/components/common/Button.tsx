import clsx from "clsx";
import { ReactNode, useMemo } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md";
}

export const Button = ({ children, size = "md" }: ButtonProps) => {
  const sizeClassName = useMemo(() => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "md":
        return "px-10 py-3 text-base";
    }
  }, [size]);

  return (
    // TODO change this animation
    <button
      className={clsx(
        "border-accent text-accent font-ibm-plex-mono rounded border font-medium transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#6da2ff]",
        sizeClassName,
      )}
    >
      {children}
    </button>
  );
};
