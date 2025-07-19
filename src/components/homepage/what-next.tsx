import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export const WhatNext = () => {
  return (
    <div className="grid-cols-2 md:grid md:h-[698.39px]">
      <div className="relative h-[366px] w-full md:h-full">
        <Image
          src="/img/what_next.png"
          alt="what next image"
          fill
          className="object-cover"
        />
      </div>
      <div className="app_container mx-auto grid items-center py-8 justify-center">
        <div className="grid h-max max-w-[339px] justify-items-center gap-8 md:max-w-[500px] md:justify-items-start">
          <h3>{"What's Next"}</h3>
          <p className="text-center md:text-start">
            We are actively developing a suite of digital solutions designed to
            revolutionize the industries we serve. From AI-driven healthcare platforms to
            next-gen real estate applications, Stratum Dynamics is working on
            groundbreaking products that will transform how businesses operate.
          </p>
          <Button variant="secondary" className="h-max w-max">
            Sign Up for Early Access
          </Button>
        </div>
      </div>
    </div>
  );
};
