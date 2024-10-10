"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function PriceFilter() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number[] | undefined>(undefined);

  const handleInitalPopoverOpen = (nvalue: boolean) => {
    if (nvalue && !value) setValue([0, 100]);
  };

  const togglePopover = (nvalue: boolean) => {
    handleInitalPopoverOpen(nvalue);
    setOpen(nvalue);
  };

  const handleReset = () => {
    setValue(undefined);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={togglePopover}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <span>
            Price
            {value && (
              <>
                :{" "}
                <span className="inline-block w-auto min-w-[70px] text-balance text-muted-foreground">
                  {value.join(" - ")}
                </span>
              </>
            )}
          </span>
          <ChevronDownIcon className="ml-2.5 h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <h6 className="text-caption font-poppins">Price</h6>
          <div className="flex flex-col gap-4">
            <Slider
              thumbs={2}
              defaultValue={[0, 100]}
              value={value}
              onValueChange={setValue}
              min={0}
              max={100}
              step={1}
              className="py-4"
            />
            <div className="flex items-center gap-8">
              <div>
                <Label>Min</Label>
                <Input
                  type="number"
                  placeholder="0,00"
                  step={1}
                  onChange={(e) =>
                    setValue([Number(e.target.value), value?.[1] ?? 100])
                  }
                  min={0}
                  value={Number(value?.[0]).toFixed(2)}
                />
              </div>
              <div>
                <Label>Max</Label>
                <Input
                  type="number"
                  placeholder="100,00"
                  step={1}
                  onChange={(e) =>
                    setValue([value?.[0] ?? 0, Number(e.target.value)])
                  }
                  min={0}
                  value={Number(value?.[1]).toFixed(2)}
                />
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleReset}
              className="bg-popover"
            >
              Reset
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default PriceFilter;
