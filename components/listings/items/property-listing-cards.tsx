import React from "react";
import PropertyListingCard from "./property-listing-card";
import { Property } from "../types";
async function PropertyListingCards() {
  const data = await fetch("https://api.lystio.co/tenement/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },

    body: JSON.stringify({
      filter: {
        size: [10, 1000],
        rent: [100, 10000],
        roomsBed: [0, 99],
        roomsBath: [0, 99],
        within: null,
        bbox: null,
        near: null,
        amenities: null,
      },
      sort: {
        rent: null,
        distance: null,
      },
      paging: {
        pageSize: 10,
        page: 0,
      },
    }),
  });
  const listings = await data.json();

  return listings.res.map((listing: Property) => (
    <PropertyListingCard key={listing.id} listing={listing} />
  ));
}

export default PropertyListingCards;
