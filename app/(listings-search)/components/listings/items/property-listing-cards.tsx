"use client";

import React, { useMemo } from "react";
import { InView } from "react-intersection-observer";

import PropertyListingCard from "./property-listing-card";
import { useTenementSearch } from "@/data/tenement-search";
import { TenementSearchFilter } from "@/data/tenement-search/types";

interface PropertyListingCardsProps {
  filter?: TenementSearchFilter;
}

function PropertyListingCards({
  filter = { rent: [100, 10000] },
}: PropertyListingCardsProps) {
  const { data, isLoading, isValidating, size, setSize } = useTenementSearch({
    filter,
  });

  const listings = useMemo(() => data?.flatMap((d) => d.res), [data]);
  const hasMore = useMemo(() => {
    if (!data) return null;
    const { page, pageCount } = data.at(-1)!.paging;
    return page < pageCount;
  }, [data]);

  return (
    <>
      {listings?.map((listing) => (
        <PropertyListingCard key={listing.id} listing={listing} />
      ))}
      <InView
        delay={600}
        onChange={(inView) => inView && setSize(size + 1)}
        skip={isLoading || isValidating || hasMore !== true}
        hidden={hasMore === false}
      >
        loading ...
      </InView>
    </>
  );
}

export default PropertyListingCards;
