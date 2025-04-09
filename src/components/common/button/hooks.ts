import { ButtonSize } from "@/components/common/button/types";
import clsx from "clsx";
import { useMemo } from "react";

export const useButtonClassname = (size: ButtonSize) => {
  const sizeClassName = useMemo(() => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm tracking-widest";
      case "md":
        return "px-10 py-3 text-base tracking-widest";
    }
  }, [size]);

  // TODO change this animation
  return clsx(
    "border-accent text-accent font-inter rounded border font-medium tracking-wider transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#6da2ff]",
    sizeClassName,
  );
};
