"use client"

import React, { useState } from "react";
import { AppLogo } from "../common/logo";
import { NavItem } from "./nav-data";
import { Icon } from "@/components/common/icons/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileHeaderProps = {
  navData: NavItem[];
};

export const MobileHeader = (props: MobileHeaderProps) => {
  const { navData } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center">
      <AppLogo size="sm" />
      <Icon name={isMenuOpen ? "close" : "menu"} size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
        {isMenuOpen && (
            <div className="grid gap-4">
              {navData.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    className={"text-white transition-colors"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild className="w-full text-center">
                <Link href="/demo" onClick={() => setIsMenuOpen(false)}>
                  Request a demo
                </Link>
              </Button>
            </div>
        )}
    </div>
  );
};
