import Link from "next/link";
import React from "react";
import { AppLogo } from "../common/logo";
import { NavItem } from "./nav-data";
import { Button } from "@/components/ui/button";

type DesktopHeaderProps = {
  navData: NavItem[];
};

export const DesktopHeader = (props: DesktopHeaderProps) => {
  const { navData } = props;
  return (
    <div className="m-auto hidden w-full justify-between md:flex md:max-w-[1320px] md:items-center md:gap-2">
      <AppLogo size="lg" />
      <div className="flex w-full justify-center gap-2 md:gap-4">
        {navData.map((nav) => (
          <Link key={nav.label} href={nav.path} className="text-white">
            {nav.label}
          </Link>
        ))}
      </div>
      <Button>Request a Demo</Button>
    </div>
  );
};
