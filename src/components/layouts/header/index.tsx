import React from "react";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

export const Header = () => {
  return (
    <header className="bg-slated_navy py-8">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
};
