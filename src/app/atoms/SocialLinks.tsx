import React from "react";
import { Linkedin, GithubIcon, Twitter } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className = "", iconSize = 24 }: SocialLinksProps) => {
  const socialLinks = [
    {
      icon: <Linkedin size={iconSize} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maike-naysinger-borges-9a0525144/",
    },
    {
      icon: <GithubIcon size={iconSize} />,
      label: "GitHub",
      href: "https://github.com/mbnaysinger",
    },
    {
      icon: <Twitter size={iconSize} />,
      label: "Twitter",
      href: "https://x.com/mbnaysinger",
    },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-glass border border-white/10 text-accent hover:border-accent/50 hover:scale-110 transition-all duration-300"
          aria-label={`Visitar ${social.label}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 