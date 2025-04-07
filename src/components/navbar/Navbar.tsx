"use client";

import Image from "next/image";
import { NavbarLink } from "./NavbarLink";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const prevPos = useRef(0);

  const handleScroll = () => {
    const currPos = window.scrollY;
    setShow(currPos < prevPos.current || currPos < 50);
    prevPos.current = currPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full bg-background/90 backdrop-blur-xs transition-transform",
        {
          "translate-y-0": show,
          "-translate-y-full": !show,
        },
      )}
    >
      <nav className="flex items-center justify-between gap-10 px-11 py-5">
        <Image
          src="/vercel.svg"
          alt="logo" // TODO
          style={{ objectFit: "contain" }}
          width={40}
          height={40}
        />
        <ul className="flex items-center justify-between gap-1">
          <li>
            <NavbarLink href="#about">About</NavbarLink>
          </li>
          <li>
            <NavbarLink href="#experience">Experience</NavbarLink>
          </li>
          <li>
            <NavbarLink href="#projects">Projects</NavbarLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
