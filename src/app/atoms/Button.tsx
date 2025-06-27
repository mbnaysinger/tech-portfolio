import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  download,
  onClick,
  className = "",
  "aria-label": ariaLabel,
  type = "button",
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  
  const variantClasses = {
    primary: "bg-accent text-bg hover:scale-105 focus-visible:ring-accent",
    secondary: "bg-text-light text-bg hover:scale-105 focus-visible:ring-text-light",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-bg focus-visible:ring-accent",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button; 