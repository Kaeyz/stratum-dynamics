import React from "react";
import { TextInput } from "../common/text-input";
import { Button } from "../ui/button";

export const ContactUs = () => {
  return (
    <div className="app_container py-24 md:mx-auto  md:max-w-[1030px]">
      <div className="flex items-center justify-center gap-2 md:justify-start">
        <div className="h-1 w-1 rounded-full bg-cadet_gray" />
        <p className="text-[14px] leading-[16.8px] tracking-[-0.56px] text-green">
          Contact us
        </p>
      </div>
      <h3 className="my-8 text-center md:text-start">Do you have any question?</h3>
      <form className="grid gap-4 md:gap-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput placeholder="Your Name" />
          <TextInput placeholder="Mobile Number" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput placeholder="Company Name" />
          <TextInput placeholder="Email Address" />
        </div>
        <TextInput placeholder="Your Message" />

        <div className="mt-8 grid justify-items-center md:justify-items-start">
          <Button variant="secondary" type="submit">
            Submit your message
          </Button>
        </div>
      </form>
    </div>
  );
};
