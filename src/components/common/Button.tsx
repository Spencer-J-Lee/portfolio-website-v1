import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="border-accent text-accent font-ibm-plex-mono rounded border px-10 py-3 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#6da2ff]">
      {children}
    </button>
  );
};
