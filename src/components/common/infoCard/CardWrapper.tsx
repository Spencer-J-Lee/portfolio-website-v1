import { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
}

export const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    // TODO add mobile styling
    <div className="group relative grid grid-cols-[1fr_6fr] gap-8">
      <div className="group-hover:bg-background-hover absolute -inset-4 rounded transition-colors" />
      {children}
    </div>
  );
};
