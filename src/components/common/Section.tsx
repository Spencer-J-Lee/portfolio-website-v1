import { ReactNode } from "react";

import { ScrollAnchor } from "./ScrollAnchor";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export const Section = ({ title, children, id }: SectionProps) => {
  return (
    <section className="mx-auto max-w-[900px]">
      {id && <ScrollAnchor id={id} />}

      <div className="mb-6 flex items-center gap-2.5 lg:gap-5">
        <h4 className="text-3xl font-semibold lg:text-4xl">{title}</h4>
        <div className="flex max-w-80 flex-1 flex-col justify-between gap-1">
          <div className="border-accent/50 w-2/3 border-b border-dashed" />
          <div className="border-accent/70 w-full border-b" />
        </div>
      </div>
      {children}
    </section>
  );
};
