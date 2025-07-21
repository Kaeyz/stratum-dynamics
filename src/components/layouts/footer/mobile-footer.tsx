import Link from "next/link";
import React from "react";
import { AppLogo } from "../common/logo";
import { socials } from "./footer-data";
import { Icon } from "@/components/common/icons/icon";

export const MobileFooter = () => {
  return (
    <div className="bg-dark_blue py-8 md:hidden">
      <div className="app_container grid justify-items-center gap-6">
        <AppLogo size="lg" />
        <p className="caption_text max-w-[320px] text-center">
          Transforming businesses through innovative digital solutions that drive real
          results and sustainable growth.
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
          <p className="caption_text max-w-[177px] text-center font-light">
            8 The Green #22021 Dover, DE, 19901, United States
          </p>
        </div>
        <div className="flex gap-2">
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
        <p className="caption_text text-12 font-light">
          © {new Date().getFullYear()} Stratum Dynamics, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
