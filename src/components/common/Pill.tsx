import { FC } from "react";

interface PillProps {
  text: string;
}

export const Pill = ({ text }: PillProps) => {
  return (
    <div className="flex justify-center items-center bg-accent text-xs rounded-full py-1 px-3">
      {text}
    </div>
  );
};
