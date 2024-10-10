"use client";

import React, { useMemo } from "react";
import { InView } from "react-intersection-observer";

import PropertyListingCard from "./property-listing-card";
import { useTenementSearch } from "@/data/tenement-search";
import { useSearchParams } from "next/navigation";
import { MAX_PRICE, MIN_PRICE, parsePriceRangeParam } from "@/lib/utils";
import clsx from "clsx";

function PropertyListingCards() {
  const searchParams = useSearchParams();
  const { data, isLoading, isValidating, size, setSize } = useTenementSearch({
    filter: {
      rent: parsePriceRangeParam(searchParams.get("price"), [
        MIN_PRICE,
        MAX_PRICE,
      ]) as [number, number],
    },
  });

  const listings = useMemo(
    () => data?.flatMap((d) => d.res).filter(Boolean),
    [data],
  );

  const hasMore = useMemo(() => {
    const paging = data?.at(-1)?.paging;
    if (!paging) return null;
    const { page, pageCount } = paging;
    return page < pageCount;
  }, [data]);
  console.log(listings);
  return (
    <div
      className={clsx("flex flex-col gap-8 p-5", {
        "opacity-50": isValidating,
      })}
    >
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
    </div>
  );
}

export default PropertyListingCards;
