import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export const Section = ({ title, children, id }: SectionProps) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
