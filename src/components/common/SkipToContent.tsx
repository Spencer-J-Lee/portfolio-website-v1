import { SECTIONS } from "@/constants/sections";
import { AnchorButton } from "./buttons/AnchorButton";

export const SkipToContent = () => {
  return (
    <AnchorButton
      href={`#${SECTIONS.CONTENT}`}
      className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-full rounded-t-none transition-all focus-visible:translate-y-0"
    >
      Skip to Content
    </AnchorButton>
  );
};
