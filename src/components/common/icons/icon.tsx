import { LucideProps } from "lucide-react";
import React from "react";
import { icons } from "./icons";
import { cn } from "@/lib/utils";

const sizes = {
  xs: "w-[24px]",
  sm: "w-[30px]",
  md: "w-10",
};

export type IconProps = LucideProps & {
  name: keyof typeof icons;
  size: keyof typeof sizes;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const Icon = (props: IconProps) => {
  const IconComponent = icons[props.name];
  return (
    <IconComponent
      {...props}
      className={cn([
        sizes[props.size],
        props.name === "spinner" && "animate-spin",
        props.className,
      ])}
      onClick={props.onClick}
    />
  );
};
