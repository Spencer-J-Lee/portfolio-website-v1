import { ReactNode } from "react";
import { ScrollAnchor } from "./ScrollAnchor";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export const Section = ({ title, children, id }: SectionProps) => {
  return (
    <>
      {id && <ScrollAnchor id={id} />}
      <section>
        <h4 className="mb-6 text-4xl font-semibold">{title}</h4>
        {children}
      </section>
    </>
  );
};
