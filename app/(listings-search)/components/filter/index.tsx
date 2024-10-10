import React from "react";

import { Settings2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

import PriceFilter from "./items/price-filter";
import RentFilter from "./items/rent-filter";
import PropertyTypeFilter from "./items/property-type-filter";
import ApartmentFilter from "./items/apartment-filter";
import BathroomsFilter from "./items/bathrooms-filter";
import LivingRoomsFilter from "./items/living-rooms-filter";
import GlobalSearchFilter from "./items/global-search-filter";

function Filter() {
  return (
    <div className="mx-4 flex items-center gap-4 rounded bg-white px-4 py-2 shadow-primary">
      <GlobalSearchFilter />
      <RentFilter />
      <ApartmentFilter />
      <BathroomsFilter />
      <LivingRoomsFilter />
      <PropertyTypeFilter />
      <PriceFilter />
      <Button variant="ghost" size="sm">
        All <Settings2Icon className="ml-2.5 h-6 w-6" />
      </Button>
    </div>
  );
}

export default Filter;
