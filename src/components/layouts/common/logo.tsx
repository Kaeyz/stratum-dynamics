import Image from "next/image";
import Link from "next/link";
import React from "react";

type AppLogoProps = {
  size: "sm" | "lg";
};

const sizes: Record<AppLogoProps["size"], { w: number; h: number }> = {
  sm: { w: 90.63, h: 40 },
  lg: { w: 137.36, h: 69 },
};

export const AppLogo = (props: AppLogoProps) => {
  const size = sizes[props.size];
  return (
    <Link href="/">
      <Image src="/logo/logo.svg" alt="Logo" width={size.w} height={size.h} />
    </Link>
  );
};
