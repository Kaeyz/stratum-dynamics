import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const RequestDemo = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden items-center justify-center bg-[url('/img/discover_banner.png')] bg-cover bg-center md:grid md:h-[630px]">
        <div className="grid justify-items-center gap-8">
          <h3 className="max-w-[782px] text-center text-white">
            Discover how Stratum Dynamics can transform your organization
          </h3>
          <Link href="/#contact">
            <Button variant="primary" className="w-max">
              Request a Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="relative h-[156px]">
          <Image
            src="/img/discover_banner.png"
            alt="request_demo_banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid place-items-center gap-8 p-8">
          <h3 className="max-w-[339px] text-center">
            Discover how Stratum Dynamics can transform your organization
          </h3>
          <Link href="/#contact">
            <Button variant="primary">Request a Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
