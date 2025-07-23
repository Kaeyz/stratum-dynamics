import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary:
        "min-w-max rounded-md border border-normal_gray bg-white font-medium text-black shadow-sm hover:bg-neutral-50/90",
      secondary:
        "min-w-max rounded-md bg-black font-medium text-white shadow-sm hover:bg-neutral-800",
    },
    size: {
      default: "px-6 py-3 has-[>svg]:px-3",
      lg: "px-6 py-2 has-[>svg]:px-4",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
