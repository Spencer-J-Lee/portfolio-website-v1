import Link from "next/link";
import { FC, ReactNode } from "react";

interface NavbarLinkProps {
  href: string;
  children: ReactNode;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="rounded px-3 py-2 transition-colors hover:bg-slate-800/50 hover:text-accent"
    >
      {children}
    </Link>
  );
};
