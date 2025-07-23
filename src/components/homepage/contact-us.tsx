"use client";

import React, { useState } from "react";
import { Notification } from "../common/notification";
import { TextInput } from "../common/text-input";
import { Button } from "../ui/button";

const defaultValues = {
  name: "",
  email: "",
  message: "",
  mobile: "",
  company: "",
};

export const ContactUs = () => {
  const [form, setForm] = useState(defaultValues);
  const [status, setStatus] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email) return setStatus({ type: "error", message: "Email is required" });
    if (!form.name) return setStatus({ type: "error", message: "Name is required" });
    if (!form.message)
      return setStatus({ type: "error", message: "Message is required" });
    setStatus({ type: "success", message: "Sending..." });
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    setStatus(
      res.ok
        ? { type: "success", message: "Message sent" }
        : { type: "error", message: "Message not sent" }
    );
    if (res.ok) setForm(defaultValues);
  };

  return (
    <section
      id="contact"
      className="app_container px-4 py-24 md:mx-auto  md:max-w-[1030px]"
    >
      <div className="flex items-center justify-center gap-2 md:justify-start">
        <div className="h-1 w-1 rounded-full bg-cadet_gray" />
        <p className="text-[14px] leading-[16.8px] tracking-[-0.56px] text-green">
          Contact us
        </p>
      </div>
      <h3 className="my-8 text-center md:text-start">Do you have any question?</h3>
      <form className="grid gap-4 md:gap-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            placeholder="Your Name"
            value={form.name}
            onChange={(value) => handleChange("name", value)}
          />
          <TextInput
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={(value) => handleChange("mobile", value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            placeholder="Company Name"
            value={form.company}
            onChange={(value) => handleChange("company", value)}
          />
          <TextInput
            placeholder="Email Address"
            value={form.email}
            onChange={(value) => handleChange("email", value)}
          />
        </div>
        <TextInput
          placeholder="Your Message"
          value={form.message}
          onChange={(value) => handleChange("message", value)}
        />
        <div className="flex items-end gap-2">
          <div className="mt-8 grid justify-items-center md:justify-items-start">
            <Button variant="secondary" type="submit">
              Submit your message
            </Button>
          </div>
          {status && (
            <Notification
              message={status.message}
              type={status.type}
              onClose={() => setStatus(null)}
            />
          )}
        </div>
      </form>
    </section>
  );
};
