import { useMemo } from "react";
import clsx from "clsx";

import { ButtonSize } from "@/components/common/buttons/types";

export const useButtonClassname = (size: ButtonSize) => {
  const sizeClassName = useMemo(() => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "md":
        return "px-10 py-3 text-base";
    }
  }, [size]);

  return clsx(
    "text-primary font-inter rounded tracking-widest transition-all from-accent/35 to-highlight/65 bg-gradient-to-r hover:hue-rotate-[15deg] font-semibold active:brightness-90",
    sizeClassName,
  );
};
