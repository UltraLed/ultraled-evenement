import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
}

const Section = ({ children, className = "", id, gradient }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${gradient ? "section-gradient" : ""} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
