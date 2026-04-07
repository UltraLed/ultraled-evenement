interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  className?: string;
}

const SectionHeader = ({ title, subtitle, gradient = true, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-12 lg:mb-16 ${className}`}>
      <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${gradient ? "gradient-text" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
