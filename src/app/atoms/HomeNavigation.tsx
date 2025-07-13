import React from "react";
import LanguageSelector from "./LanguageSelector";
import SocialLinks from "./SocialLinks";

const HomeNavigation = () => {
  return (
    <>
      {/* Seletor de idioma */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSelector />
      </div>
      
      {/* Redes sociais */}
      <div className="absolute top-6 left-6 z-50">
        <SocialLinks iconSize={20} />
      </div>
    </>
  );
};

export default HomeNavigation; 