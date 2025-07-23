import React from "react";

export const WhyInvest = () => {
  return (
    <section id="invest">
      <div className="my-8 h-[173.49px] bg-[url('/img/why_invest.png')] bg-cover bg-center md:my-0 md:h-[675px]">
        <div className="app_container hidden md:grid md:h-full md:items-center">
          <div className="text-white">
            <h3 className="w-[350px]">Why Invest in Stratum Dynamics?</h3>
            <div className="ml-64 mt-8 grid w-1/2 justify-end gap-4">
              <h3 className="text-23 font-medium leading-[27.6px] tracking-[-0.69px]">
                Join Us in Shaping the Future
              </h3>
              <p className="w-[513px]">
                We are actively seeking angel investors and VCs to fuel the next phase of
                our growth. Your investment will help us scale our operations, drive
                innovation, and bring our impactful solutions to new markets around the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile section */}
      <div className="grid justify-items-center md:hidden">
        <div className="grid max-w-[339px] gap-4 text-center">
          <h3>Why Invest in Stratum Dynamics?</h3>
          <p className="font-medium">Join Us in Shaping the Future</p>
          <p>
            We are actively seeking angel investors and VCs to fuel the next phase of our
            growth. Your investment will help us scale our operations, drive innovation,
            and bring our impactful solutions to new markets around the world.
          </p>
        </div>
      </div>
    </section>
  );
};
