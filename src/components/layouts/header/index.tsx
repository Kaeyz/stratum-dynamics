import React from "react";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";
import { navData } from "./nav-data";

export const Header = () => {
  return (
    <header className="bg-slated_navy px-4 py-4">
      <DesktopHeader navData={navData} />
      <MobileHeader navData={navData} />
    </header>
  );
};
