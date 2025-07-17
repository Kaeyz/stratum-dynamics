import React from "react";
import { AppLogo } from "../common/logo";

export const DesktopHeader = () => {
  return (
    <div className="m-auto hidden w-full justify-between md:flex md:max-w-[1320px]">
      <AppLogo />
      <div>nav</div>
      <div>button</div>
    </div>
  );
};
