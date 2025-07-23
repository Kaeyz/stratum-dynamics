"use client";

import React, { useEffect } from "react";

type Props = {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
};

export const Notification = ({ message, type = "success", onClose }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`h-max rounded px-4 py-2 text-white shadow-lg transition-all duration-300 ${
        type === "success" ? "bg-green" : "bg-red-600"
      }`}
    >
      {message}
    </div>
  );
};
