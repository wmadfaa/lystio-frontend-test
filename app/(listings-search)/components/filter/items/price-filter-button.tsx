import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

function PriceFilterButton({
  price,
  ...props
}: ButtonProps & { price?: number[] | undefined }) {
  return (
    <Button variant="ghost" size="sm" {...props}>
      <span>
        Price
        {price && (
          <>
            :{" "}
            <span className="inline-block w-auto min-w-[100px] text-balance text-muted-foreground">
              {price.join(" - ")}
            </span>
          </>
        )}
      </span>
      <ChevronDownIcon className="ml-2.5 h-5 w-5" />
    </Button>
  );
}

export default PriceFilterButton;
