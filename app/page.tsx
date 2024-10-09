import Listings from "@/components/listings";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Map = dynamic(() => import("@/components/map"), {
  loading: () => <div>Loading map...</div>,
  ssr: false,
});

function Home() {
  return (
    <div className="flex h-full w-full flex-grow justify-end px-4 pt-2.5">
      <Suspense
        fallback={
          <div className="flex h-full w-full flex-1 items-center justify-center bg-white">
            <span>Loading map...</span>
          </div>
        }
      >
        <Map />
      </Suspense>
      <Listings />
    </div>
  );
}

export default Home;
