"use client";

import Image from "next/image";
import { NavbarLink } from "./NavbarLink";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { SECTIONS } from "@/constants/sections";
import { useAnimationDelay } from "./hooks";
import { AnchorButton } from "../common/buttons/AnchorButton";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [minify, setMinify] = useState(false);
  const prevPos = useRef(0);
  const { delay, toMSStr } = useAnimationDelay();

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
        "fixed top-0 z-40 w-full px-5 transition-all lg:px-11",
        {
          "translate-y-0": show,
          "-translate-y-full": !show,
        },
        {
          "shadow-navbar bg-background/90 py-3 backdrop-blur-[2px] lg:py-2":
            minify,
          "py-5": !minify,
        },
      )}
    >
      <nav className="flex items-center justify-between gap-10">
        <Link
          href={SECTIONS.HOME}
          className="animate-fade-down opacity-0 lg:p-2"
          style={{ animationDelay: toMSStr(delay.nav[1]) }}
        >
          <Image
            src="/assets/logo.png"
            alt="Logo of initials SL"
            style={{ objectFit: "contain" }}
            width={40}
            height={40}
            priority
          />
        </Link>

        <div className="flex gap-6">
          <ul className="hidden items-center justify-between gap-2 lg:flex">
            <li
              className="animate-fade-down opacity-0"
              style={{ animationDelay: toMSStr(delay.nav[2]) }}
            >
              <NavbarLink id={SECTIONS.ABOUT}>About</NavbarLink>
            </li>
            <li
              className="animate-fade-down opacity-0"
              style={{ animationDelay: toMSStr(delay.nav[3]) }}
            >
              <NavbarLink id={SECTIONS.EXPERIENCE}>Experience</NavbarLink>
            </li>
            {/* <li
              className="animate-fade-down opacity-0"
              style={{ animationDelay: toMSStr(delay.nav[4]) }}
            >
              <NavbarLink id={SECTIONS.PROJECTS}>Projects</NavbarLink>
            </li> */}
          </ul>

          <AnchorButton
            className="animate-fade-down opacity-0"
            style={{ animationDelay: toMSStr(delay.nav[4]) }}
            size="sm"
            href="/Spencer_Lee_Software_Engineer_Resume.pdf" // TODO Update this with new resume that has website link
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </AnchorButton>
        </div>
      </nav>
    </header>
  );
};
