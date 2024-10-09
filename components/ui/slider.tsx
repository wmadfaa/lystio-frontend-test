"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    thumbs?: number;
  }
>(({ thumbs = 1, className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[1.6px] w-full grow overflow-hidden rounded-full bg-[#717171]">
      <SliderPrimitive.Range className="absolute h-full bg-black" />
    </SliderPrimitive.Track>
    {Array.from({ length: thumbs }).map((_, index) => (
      <SliderPrimitive.Thumb
        key={index}
        className="block h-6 w-6 rounded-full border border-primary/50 bg-white shadow-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
