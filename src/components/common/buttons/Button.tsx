import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { useButtonClassname } from "./hooks";
import { ButtonSize } from "./types";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSize;
}

export const Button = ({ children, size = "md" }: ButtonProps) => {
  const className = useButtonClassname(size);

  return <button className={className}>{children}</button>;
};
