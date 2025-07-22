import React from "react";
import { ContactUs } from "@/components/homepage/contact-us";
import { HomeBanner } from "@/components/homepage/home-banner";
import { MissionSection } from "@/components/homepage/mission";
import { RequestDemo } from "@/components/homepage/request-demo";
import { WhatNext } from "@/components/homepage/what-next";
import { WhatWeDo } from "@/components/homepage/what-we-do";
import { WhyInvest } from "@/components/homepage/why-invest";

export default function Home() {
  return (
    <div>
      <main>
        <HomeBanner />
        <MissionSection />
        <WhatWeDo />
        <WhatNext />
        <WhyInvest />
        <ContactUs />
        <RequestDemo />
      </main>
    </div>
  );
}
