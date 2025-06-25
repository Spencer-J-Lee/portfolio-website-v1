import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

import { useButtonClassname } from "./hooks";
import { ButtonSize } from "./types";

interface AnchorButtonProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  size?: ButtonSize;
}

export const AnchorButton = ({
  children,
  size = "md",
  className,
  ...props
}: AnchorButtonProps) => {
  const baseClassName = useButtonClassname(size);

  return (
    <a className={clsx(baseClassName, className)} {...props}>
      {children}
    </a>
  );
};
