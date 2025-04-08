import { SectionId } from "@/constants/sections";
import { FC, ReactNode } from "react";

interface NavbarLinkProps {
  id: SectionId;
  children: ReactNode;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ id, children }) => {
  return (
    <a
      href={`#${id}`}
      className="hover:text-accent hover:bg-slate-800/ cursor-pointer50 rounded px-3 py-2 font-semibold transition-colors"
    >
      {children}
    </a>
  );
};
