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
      className="hover:text-accent rounded px-3 py-2 transition-colors hover:bg-slate-800/50"
    >
      {children}
    </a>
  );
};
