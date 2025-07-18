import React from "react";
import { HomeBanner } from "@/components/homepage/home-banner";
import { MissionSection } from "@/components/homepage/mission";

export default function Home() {
  return (
    <div>
      <main>
        <HomeBanner />
        <MissionSection />
      </main>
    </div>
  );
}
