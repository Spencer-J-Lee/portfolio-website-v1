"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { ASSET_PATHS } from "@/constants/assetPaths";
import { SECTIONS } from "@/constants/sections";

import { NavbarLink } from "./NavbarLink";
import { AnchorButton } from "../common/buttons/AnchorButton";
import { Fade } from "../common/fades/Fade";

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
        <Fade direction="down" index={1}>
          <Link href={SECTIONS.HOME} className="block lg:p-2">
            <Image
              src={ASSET_PATHS.LOGO}
              alt="Logo of initials SL"
              style={{ objectFit: "contain" }}
              width={40}
              height={40}
              priority
            />
          </Link>
        </Fade>

        <div className="flex gap-6">
          <ul className="hidden items-center justify-between gap-2 lg:flex">
            <li>
              <Fade direction="down" index={2}>
                <NavbarLink id={SECTIONS.ABOUT}>About</NavbarLink>
              </Fade>
            </li>
            <li>
              <Fade direction="down" index={3}>
                <NavbarLink id={SECTIONS.EXPERIENCE}>Experience</NavbarLink>
              </Fade>
            </li>
            {/* <li
              className="animate-fade-down opacity-0"
              style={{ animationDelay: toMSStr(delay.nav[4]) }}
            >
              <NavbarLink id={SECTIONS.PROJECTS}>Projects</NavbarLink>
            </li> */}
          </ul>

          <Fade direction="down" index={4}>
            <AnchorButton
              size="sm"
              href="/Spencer_Lee_Software_Engineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </AnchorButton>
          </Fade>
        </div>
      </nav>
    </header>
  );
};
