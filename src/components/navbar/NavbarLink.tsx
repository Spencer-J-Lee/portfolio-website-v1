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
      className="hover:text-highlight hover:bg-background-hover cursor-pointer rounded px-4 py-2.5 font-semibold transition-colors"
    >
      {children}
    </a>
  );
};
