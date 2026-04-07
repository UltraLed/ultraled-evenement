import { ReactNode } from "react";

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "pink";
}

const glowClasses = {
  blue: "hover:border-neon-blue/40 hover:shadow-[0_0_25px_hsl(193_100%_50%/0.15)]",
  purple: "hover:border-neon-purple/40 hover:shadow-[0_0_25px_hsl(274_87%_53%/0.15)]",
  pink: "hover:border-neon-pink/40 hover:shadow-[0_0_25px_hsl(310_100%_59%/0.15)]",
};

const NeonCard = ({ children, className = "", glowColor = "blue" }: NeonCardProps) => {
  return (
    <div
      className={`rounded-xl bg-card border border-border/50 p-6 transition-all duration-500 ${glowClasses[glowColor]} ${className}`}
    >
      {children}
    </div>
  );
};

export default NeonCard;
