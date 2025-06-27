import React from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = "",
  "aria-label": ariaLabel,
}) => {
  const baseClasses = "font-bold text-text-light";
  
  const levelClasses = {
    1: "text-4xl md:text-6xl lg:text-7xl",
    2: "text-3xl md:text-4xl lg:text-5xl",
    3: "text-2xl md:text-3xl lg:text-4xl",
    4: "text-xl md:text-2xl lg:text-3xl",
    5: "text-lg md:text-xl lg:text-2xl",
    6: "text-base md:text-lg lg:text-xl",
  };
  
  const classes = `${baseClasses} ${levelClasses[level]} ${className}`;
  
  switch (level) {
    case 1:
      return <h1 className={classes} aria-label={ariaLabel}>{children}</h1>;
    case 2:
      return <h2 className={classes} aria-label={ariaLabel}>{children}</h2>;
    case 3:
      return <h3 className={classes} aria-label={ariaLabel}>{children}</h3>;
    case 4:
      return <h4 className={classes} aria-label={ariaLabel}>{children}</h4>;
    case 5:
      return <h5 className={classes} aria-label={ariaLabel}>{children}</h5>;
    case 6:
      return <h6 className={classes} aria-label={ariaLabel}>{children}</h6>;
    default:
      return <h2 className={classes} aria-label={ariaLabel}>{children}</h2>;
  }
};

export default Heading; 