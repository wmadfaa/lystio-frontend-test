import React from "react";
import {
  Popover,
  // PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

function ApartmentFilter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          Apartment
          <ChevronDownIcon className="ml-2.5 h-5 w-5" />
        </Button>
      </PopoverTrigger>
      {/* <PopoverContent>Place content for the popover here.</PopoverContent> */}
    </Popover>
  );
}

export default ApartmentFilter;
