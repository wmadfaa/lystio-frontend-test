import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookmarkIcon,
  ReplyIcon,
  BadgeCheckIcon,
  BoxIcon,
  BedIcon,
  BathIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import CollectionsIcon from "@/assets/icons/fluent_collections-16-regular.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clsx from "clsx";
import { Property } from "@/data/tenement-search/types";

function PropertyListingCard({ listing }: { listing: Property }) {
  return (
    <div className="inline-flex flex-col items-start justify-start gap-6 bg-white">
      <div className="flex flex-col items-start justify-start gap-[13px] self-stretch rounded-lg border border-black/10 p-1">
        <div className="flex w-full items-start justify-between gap-8">
          <Carousel
            className="relative h-[195px] w-[232px] shrink-0 p-1"
            opts={{ active: listing.media.length > 1 }}
          >
            <CarouselContent>
              {listing.media.map((media) => (
                <CarouselItem
                  key={media.id}
                  className="relative h-[187px] w-[224px]"
                >
                  <Image
                    className="h-[187px] w-[224px] rounded-lg bg-gray-200 object-cover"
                    src={media.cdnUrl}
                    placeholder="blur"
                    blurDataURL={media.bluredDataURL}
                    alt={media.title}
                    width={224}
                    height={187}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {listing.media.length > 1 && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                <div className="relative flex w-full items-center justify-between">
                  <CarouselPrevious className="pointer-events-auto relative left-0 -translate-y-0" />
                  <CarouselNext className="pointer-events-auto relative right-0 -translate-y-0" />
                </div>
              </div>
            )}
            {/* <div className="pointer-events-none absolute inset-0 flex items-start justify-between p-2.5">
              <div className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-white px-2 py-1">
                <div className="text-caption text-black">New</div>
              </div>
              <div className="inline-flex items-center justify-end gap-2.5 rounded-sm bg-white px-2 py-1">
                <div className="text-caption text-right text-black">Rent</div>
              </div>
            </div> */}
          </Carousel>

          <div className="flex flex-1 flex-col items-end justify-start gap-[15px]">
            <div className="flex flex-col items-start justify-start gap-4 self-stretch border-b border-black/10 pb-4 pt-1">
              <div
                className={clsx(
                  "flex items-center self-stretch",
                  listing.verified ? "justify-between" : "justify-end",
                )}
              >
                {listing.verified && (
                  <div className="flex items-center justify-start gap-2">
                    <BadgeCheckIcon className="h-4 w-4" />
                    <div className="text-caption text-black">Verified</div>
                  </div>
                )}
                <div className="flex items-center justify-end gap-4">
                  <Button
                    variant="outline"
                    size="icon-sm"
                    className="bg-card-background rounded-full shadow-none"
                  >
                    <BookmarkIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    className="bg-card-background rounded-full shadow-none"
                  >
                    <ReplyIcon className="h-4 w-4 -scale-x-100" />
                  </Button>
                </div>
              </div>
              <div className="text-title text-black">{listing.title}</div>
              <div className="flex items-center justify-between self-stretch">
                <div className="text-caption text-black opacity-60">
                  {listing.address}, {listing.zip} {listing.city}
                </div>
                <div className="font-['Inter'] text-lg font-semibold leading-snug text-black">
                  {listing.rentRange?.length
                    ? listing.rentRange.map((rent) => `${rent} €`).join(" - ")
                    : `${listing.rent} €`}
                </div>
              </div>
              <div className="inline-flex items-center justify-between self-stretch">
                <div className="flex items-center justify-start gap-3 px-1.5 opacity-60">
                  <div className="flex items-center justify-start gap-2">
                    <BoxIcon className="relative h-4 w-4 opacity-60" />
                    <div>
                      <span className="text-caption text-black">
                        {listing.sizeRange?.length
                          ? listing.sizeRange.join(" - ")
                          : listing.size}
                      </span>
                      <span className="text-caption text-black">m²</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <BedIcon className="relative h-4 w-4 opacity-60" />
                    <div className="text-caption text-black">
                      {listing.roomsBedRange?.length
                        ? listing.roomsBedRange.join(" - ")
                        : listing.roomsBed}{" "}
                      bed
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <BathIcon className="relative h-4 w-4 opacity-60" />
                    <div className="text-caption text-black">
                      {listing.roomsBathRange?.length
                        ? listing.roomsBathRange.join(" - ")
                        : listing.roomsBath}{" "}
                      bed
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    "inline-flex items-center justify-center gap-2.5 rounded px-2.5 py-1",
                    listing.type === "building"
                      ? "bg-[#565dff]/10 text-[#009c5a]"
                      : "bg-[#565dff]/10 text-[#007aff]",
                  )}
                >
                  <div className={"text-caption"}>
                    {listing.type === "building"
                      ? "Multi-units"
                      : "Single-unit"}
                  </div>
                  <CollectionsIcon className="relative h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {listing.type === "building" && (
          <div className="inline-flex items-center justify-start self-stretch">
            <Carousel
              opts={{ align: "start" }}
              className="relative h-[131px] w-full max-w-[744px] p-1"
            >
              <CarouselContent className="-ml-2">
                {listing.tenements.map((tenement) => (
                  <CarouselItem key={tenement.id} className="basis-5/12 pl-2">
                    <div className="flex items-start justify-start gap-2 rounded-lg border border-black/10 bg-white p-1.5">
                      {tenement.media ? (
                        <Image
                          className="h-[119px] w-[129px] rounded-lg bg-gray-200 object-cover"
                          src={tenement.media?.[0]?.cdnUrl || ""}
                          placeholder="blur"
                          blurDataURL={tenement.media?.[0]?.bluredDataURL || ""}
                          alt={tenement.media?.[0]?.title || ""}
                          width={129}
                          height={119}
                        />
                      ) : (
                        <div className="flex h-[119px] w-[129px] items-center justify-center rounded-lg bg-gray-200">
                          <span className="text-caption text-gray-500">
                            No image available
                          </span>
                        </div>
                      )}
                      <div className="inline-flex flex-col items-start justify-start gap-4 px-1">
                        <div className="h-[18px] self-stretch text-caption text-black">
                          {tenement.title}
                        </div>
                        <div className="inline-flex items-center justify-start gap-2 whitespace-nowrap opacity-60">
                          <div className="text-caption text-black">
                            {tenement.roomsBed} bed
                          </div>
                          <div className="h-1 w-1 rounded-full bg-black" />
                          <div className="text-caption text-black">
                            {tenement.roomsBath} bath
                          </div>
                          <div className="h-1 w-1 rounded-full bg-black" />
                          <span className="text-caption text-black">
                            {tenement.size}m²
                          </span>
                        </div>
                        <div className="self-stretch text-caption text-black">
                          {tenement.rent} €
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
        <div className="inline-flex items-center justify-between self-stretch">
          <div className="flex items-center justify-start gap-[31px]">
            {Object.values(listing.amenitiesTexts).map((amenity) => (
              <div key={amenity} className="text-caption text-black opacity-60">
                {amenity}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start gap-2 rounded bg-white p-1">
            <div className="flex items-center justify-start gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="" alt="Property owner" />
                <AvatarFallback className="text-caption">
                  {listing.owner.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="max-w-[160px] truncate text-caption text-black">
                {listing.owner.name}
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <Button
                variant="outline"
                size="icon-sm"
                className="bg-card-background rounded-full shadow-none"
              >
                <MailIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                className="bg-card-background rounded-full shadow-none"
              >
                <PhoneIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyListingCard;
