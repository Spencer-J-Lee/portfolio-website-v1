"use client";

import Image from "next/image";
import { NavbarLink } from "./NavbarLink";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

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
        "bg-background/90 backdrop-blur-xs fixed top-0 w-full px-11 transition-all",
        {
          "translate-y-0": show,
          "-translate-y-full": !show,
        },
        {
          "py-2 shadow-2xl": minify,
          "py-5": !minify,
        },
      )}
    >
      <nav className="flex items-center justify-between gap-10">
        <Link href="/">
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
