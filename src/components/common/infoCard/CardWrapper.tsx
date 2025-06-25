import clsx from "clsx";
import { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
  variant: "experience" | "project";
}

export const CardWrapper = ({ children, variant }: CardWrapperProps) => {
  return (
    <div
      className={clsx(
        "group relative flex flex-col gap-2 lg:grid",
        variant === "experience"
          ? "lg:grid-cols-[1fr_6fr] lg:gap-8"
          : "lg:grid-cols-[1fr_4fr] lg:gap-5",
      )}
    >
      <div className="group-hover:bg-background-hover absolute -inset-4 hidden rounded transition-colors lg:block" />
      {children}
    </div>
  );
};
