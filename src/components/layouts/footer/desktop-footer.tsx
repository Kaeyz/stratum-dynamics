import Link from "next/link";
import React from "react";
import { AppLogo } from "../common/logo";
import { navData } from "../header/nav-data";
import { socials } from "./footer-data";
import { Icon } from "@/components/common/icons/icon";

export const DesktopFooter = () => {
  return (
    <div className="hidden bg-dark_blue md:block">
      <div className="border-b border-footer_gray pb-8 pt-16">
        <div className="app_container">
          <div className="mb-8 grid grid-cols-2">
            <div className="grid gap-6">
              <AppLogo size="lg" />
              <p className="caption_text max-w-[320px]">
                Transforming businesses through innovative digital solutions that drive
                real results and sustainable growth.
              </p>
              <div className="flex items-center gap-2">
                <Icon name="mail" className="text-green" size="xs" />
                <p className="caption_text font-light">contact@stratumdynamics.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="phone" className="text-green" size="xs" />
                <p className="caption_text font-light">+1 (302) 215 - 5825</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="location" className="text-green" size="xs" />
                <p className="caption_text max-w-[177px] font-light">
                  8 The Green #22021 Dover, DE, 19901, United States
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              {navData.map((nav) => (
                <Link key={nav.label} href={nav.path} className="text-footer_gray">
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="app_container">
          <div className="grid grid-cols-2 items-center justify-between">
            <p className="caption_text text-12 font-light">
              © {new Date().getFullYear()} Stratum Dynamics, Inc. All Rights Reserved
            </p>
            <div className="flex items-center justify-end gap-2">
              {socials.map((social) => (
                <Link
                  href={social.link}
                  key={social.name}
                  className="caption_text border-b border-footer_gray font-light leading-none"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
