import React from "react";
import { DesktopFooter } from "./desktop-footer";
import { MobileFooter } from "./mobile-footer";

export const Footer = () => {
  return (
    <div>
      <DesktopFooter />
      <MobileFooter />
    </div>
  );
};
