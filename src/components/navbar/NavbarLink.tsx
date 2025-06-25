import { FC, ReactNode } from "react";

import { SectionId } from "@/constants/sections";

interface NavbarLinkProps {
  id: SectionId;
  children: ReactNode;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ id, children }) => {
  return (
    <a
      href={`#${id}`}
      className="hover:text-highlight hover:bg-background-hover rounded px-4 py-2.5 font-semibold transition-colors"
    >
      {children}
    </a>
  );
};
