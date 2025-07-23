"use client";

import React, { useState } from "react";
import { Notification } from "../common/notification";

export const SubscribeBanner = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  const handleSubmit = async () => {
    if (!email) return setStatus({ type: "error", message: "Email is required" });
    setStatus({ type: "success", message: "Saving..." });
    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    setStatus(
      res.ok
        ? { type: "success", message: "Email saved" }
        : { type: "error", message: "Email not saved" }
    );
    if (res.ok) setEmail("");
  };

  return (
    <div className="h-[780px] bg-[url('/img/subscribe_banner_mobile.png')] bg-cover bg-center md:h-[650px] md:bg-[url('/img/subscribe_banner_desktop.png')]">
      <div className="grid justify-items-center gap-6 pt-32 text-white">
        <p className="w-[218.6px] rounded-2xl bg-[#ffffff14] py-1 text-center text-[#F0F0F0] backdrop-blur-md">
          MedicoreSuite
        </p>
        <h3 className="w-[220px] text-center md:w-[450px]">
          Good things come to those <span className="italic">who wait.</span>
        </h3>
        <p className="w-[302px] text-center text-[#F0F0F0] md:w-[570px]">
          At Stratum Dynamics, we are on a mission to revolutionize the future of
          healthcare with cutting-edge digital innovations that drives impacts.
        </p>
        <div className="rounded-md bg-[#ffffff14] backdrop-blur-md">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent px-4 outline-none"
            placeholder="Your Email Address"
          />
          <button
            className="rounded-md bg-white px-4 py-2 font-semi_bold text-black"
            onClick={handleSubmit}
          >
            Get Notified
          </button>
          {status && (
            <Notification
              message={status.message}
              type={status.type}
              onClose={() => setStatus(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
