"use client";

import Image from "next/image";
import { NavbarLink } from "./NavbarLink";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { SECTIONS } from "@/constants/sections";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [minify, setMinify] = useState(false);
  const prevPos = useRef(0);

  const handleScroll = () => {
    const currPos = window.scrollY;
    const nextShow = currPos < prevPos.current || currPos < 80;
    setShow(nextShow);
    prevPos.current = currPos;

    if (nextShow === false) {
      setMinify(true);
    } else if (currPos === 0) {
      setMinify(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "bg-background/90 fixed top-0 z-40 w-full px-11 backdrop-blur-[2px] transition-all",
        {
          "translate-y-0": show,
          "-translate-y-full": !show,
        },
        {
          "shadow-navbar py-2": minify,
          "py-5": !minify,
        },
      )}
    >
      <nav className="flex items-center justify-between gap-10">
        <Link href={SECTIONS.HOME} className="p-2">
          <Image
            src="/assets/logo.png"
            alt="Logo of initials SL"
            style={{ objectFit: "contain" }}
            width={40}
            height={40}
          />
        </Link>
        <ul className="flex items-center justify-between gap-1">
          <li>
            <NavbarLink id={SECTIONS.ABOUT}>About</NavbarLink>
          </li>
          <li>
            <NavbarLink id={SECTIONS.EXPERIENCE}>Experience</NavbarLink>
          </li>
          <li>
            <NavbarLink id={SECTIONS.PROJECTS}>Projects</NavbarLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
