"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";
import { parsePriceRangeParam, MIN_PRICE, MAX_PRICE } from "@/lib/utils";
import PriceFilterButton from "./price-filter-button";

function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number[] | undefined>(() =>
    parsePriceRangeParam(searchParams.get("price")),
  );

  const togglePopover = (nvalue: boolean) => {
    setOpen(nvalue);
  };

  const updatePriceSearchparam = debounce((range?: [number, number]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (range) {
      params.set("price", range.join("-"));
    } else {
      params.delete("price");
    }
    router.push(`?${params.toString()}`);
  }, 600);

  const handleChannge = (range: [number, number]) => {
    setValue(range);
    updatePriceSearchparam(range);
  };

  const handleReset = () => {
    setValue(undefined);
    updatePriceSearchparam(undefined);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={togglePopover}>
      <PopoverTrigger asChild>
        <div>
          <PriceFilterButton price={value} />
          <span className="sr-only">price filter action trigger</span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <h6 className="font-poppins text-caption">Price</h6>
          <div className="flex flex-col gap-4">
            <Slider
              thumbs={2}
              value={value}
              defaultValue={[MIN_PRICE, MAX_PRICE]}
              onValueChange={handleChannge}
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={Math.floor(MAX_PRICE / 100)}
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
                    handleChannge([
                      Number(e.target.value),
                      value?.[1] ?? MAX_PRICE,
                    ])
                  }
                  min={MIN_PRICE}
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
                    setValue([value?.[0] ?? MIN_PRICE, Number(e.target.value)])
                  }
                  min={MIN_PRICE}
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
