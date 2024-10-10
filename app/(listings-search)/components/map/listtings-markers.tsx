import { useTenementSearchMap } from "@/data/tenement-search-map";
import { MAX_PRICE, MIN_PRICE, parsePriceRangeParam } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Marker } from "react-map-gl";
import { TriangleIcon } from "lucide-react";

function ListingsMarkers() {
  const searchParams = useSearchParams();
  const { data } = useTenementSearchMap({
    filter: {
      rent: parsePriceRangeParam(searchParams.get("price"), [
        MIN_PRICE,
        MAX_PRICE,
      ]) as [number, number],
    },
  });

  const markers = useMemo(
    () => data?.flatMap((d) => d.res).filter(Boolean),
    [data],
  );

  return (
    <>
      {markers?.map((marker) => (
        <Marker
          key={marker.pt.join(",")}
          longitude={marker.pt[0]}
          latitude={marker.pt[1]}
          anchor="bottom"
          offset={[0, 0]}
        >
          <div className="relative inline-flex items-center rounded-full bg-white p-3">
            <span className="text-body">
              {marker.rentRange.map((v) => `${v} €`).join(" - ")}
            </span>
            <div className="absolute -bottom-4 flex w-full justify-center">
              <TriangleIcon
                fill="white"
                stroke="none"
                className="h-4 w-4 -translate-x-2.5 -translate-y-1 scale-y-[-1] transform"
              />
            </div>
          </div>
        </Marker>
      ))}
    </>
  );
}

export default ListingsMarkers;
