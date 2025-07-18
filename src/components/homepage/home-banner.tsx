import React from "react";

const renderBannerItem = (text: string) => {
  return (
    <div className=" relative grid h-[148px] w-[300px] items-center justify-center rounded-md border border-cadet_gray bg-light_gray backdrop-blur-md">
      {/* Dots */}
      <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white" />
      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white" />
      <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-white" />
      <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-white" />

      <p className="h-[84px] w-[236px] text-[15px] leading-21 -tracking-tight_sm text-white">
        {text}
      </p>
    </div>
  );
};

export const HomeBanner = () => {
  return (
    <div className="bg-[url('/img/home_banner.png')] bg-cover bg-center md:h-[53.75rem]">
      <div className="app_container grid h-full items-end justify-center pb-12 pt-16 md:justify-start">
        <div className="grid max-w-screen-sm gap-4 md:max-w-[800px]">
          <h2 className="text-wrap text-center text-white md:text-start">
            Shaping the Future with Innovative Digital Solutions
          </h2>
          <div className="grid justify-center gap-4 md:flex md:justify-start">
            {renderBannerItem(
              "We are committed to developing cutting-edge solutions across industries, from healthtech to real estate, and everything in between"
            )}
            {renderBannerItem(
              "Stay tuned for our upcoming products and services that will transform how businesses and individuals interact with technology."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
