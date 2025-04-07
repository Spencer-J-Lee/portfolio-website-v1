import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export const Section = ({ title, children, id }: SectionProps) => {
  return (
    <section id={id}>
      <h4 className="text-4xl font-semibold">{title}</h4>
      {children}
    </section>
  );
};
