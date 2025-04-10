import { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
}

export const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="group relative flex flex-col gap-2 lg:grid lg:grid-cols-[1fr_6fr] lg:gap-8">
      <div className="group-hover:bg-background-hover absolute -inset-4 hidden rounded transition-colors lg:block" />
      {children}
    </div>
  );
};
