import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Settings2Icon } from "lucide-react";
import PropertyListingCards from "./items/property-listing-cards";

function Listings() {
  return (
    <div className="h-full max-w-[793px] flex-shrink-0 flex-grow overflow-y-auto bg-white pb-[160px]">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-5 py-4">
        <h2 className="text-h4">Listing around me</h2>
        <Button variant="ghost" size="icon">
          <Settings2Icon className="h-6 w-6 text-[#2D264B]" />
        </Button>
      </div>
      <div className="flex flex-col gap-8 p-5">
        <Suspense fallback={<div>Loading...</div>}>
          <PropertyListingCards />
        </Suspense>
      </div>
    </div>
  );
}

export default Listings;
