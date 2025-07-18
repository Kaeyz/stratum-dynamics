import Image from "next/image";
import React from "react";
import { Accordion } from "../common/accordion";

export const WhatWeDo = () => {
  return (
    <div className="md:app_container">
      <div className="hidden md:mb-4 md:mt-16 md:grid md:gap-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-cadet_gray" />
          <p className="text-[14px] leading-[16.8px] tracking-[-0.56px] text-green">
            What We Do
          </p>
        </div>
        <h3 className="max-w-[450px]">
          Empowering Industries with Innovative Digital Solutions
        </h3>
      </div>
      <div className="md:flex md:flex-row-reverse md:gap-4">
        <div className="relative aspect-square max-h-[303px] w-full md:max-h-[600px] md:w-1/2 md:max-w-[746px]">
          <Image
            src="/img/what_we_do_banner.png"
            alt="what we do banner"
            fill
            className="object-cover"
          />
        </div>

        <div className="app_container py-16 md:w-1/2 md:py-0">
          <div className="flex items-center justify-center gap-2 md:hidden">
            <div className="h-1 w-1 rounded-full bg-cadet_gray" />
            <p className="text-[14px] leading-[16.8px] tracking-[-0.56px] text-green">
              What We Do
            </p>
          </div>
          <div className="grid">
            <h3 className="max-w-[343px] justify-self-center text-center md:hidden">
              Empowering Industries with Innovative Digital Solutions
            </h3>
            <div>
              <Accordion
                data={[
                  {
                    title: "Health Tech",
                    description:
                      " Innovating the future of healthcare through integrated, AI-powered solutions.",
                    key: "item-1",
                  },
                  {
                    title: "Digital Agency",
                    description:
                      "Helping business optimize process with digital solutions",
                    key: "item-2",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
