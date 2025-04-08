import { SECTIONS } from "@/constants/sections";

export const SkipToContent = () => {
  return (
    <a
      href={`#${SECTIONS.CONTENT}`}
      className="from-accent/50 to-highlight/80 absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-full rounded-b bg-gradient-to-r px-6 py-2 text-lg font-bold transition-transform focus-visible:translate-y-0"
    >
      Skip to Content
    </a>
  );
};
