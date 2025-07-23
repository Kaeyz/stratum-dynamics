import React from "react";

export const MissionSection = () => {
  return (
    <section id="about" className="app_container grid gap-4 py-16 md:pb-4">
      <div className="md:grid md:gap-4 md:pl-32">
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <div className="h-1 w-1 rounded-full bg-cadet_gray" />
          <p className="text-[14px] leading-[16.8px] tracking-[-0.56px] text-green">
            Our Mission
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <h3 className="max-w-[343px] text-center md:max-w-[500px] md:text-start">
            Building innovative, high-impact digital platforms that address the needs of
            diverse industries.
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center">
        <p className="max-w-[235px] text-center md:text-start">
          Develop and deliver high-impact products across diverse sectors, including
          health tech, real estate, software development, and enterprise services.
        </p>
        <p className="max-w-[235px] text-center md:text-start">
          Drive efficiency and growth globally.to creating innovative, scalable digital
          solutions
        </p>
      </div>
    </section>
  );
};
