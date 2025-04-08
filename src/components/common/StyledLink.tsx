import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type StyledLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  external?: boolean;
};

export const StyledLink = ({
  href,
  className,
  children,
  external,
  ...props
}: StyledLinkProps) => {
  const finalClassName = clsx(
    "font-semibold hover:text-accent text-primary transition-colors",
    className,
  );

  if (external) {
    return (
      <a
        href={String(href)}
        className={finalClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        <span className="ml-3">
          <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={finalClassName} {...props}>
      {children}
    </Link>
  );
};
