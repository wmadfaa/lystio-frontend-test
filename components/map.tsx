"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

const Map: React.FC = () => {
  console.log(
    mapboxgl.accessToken,
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  );
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (mapContainer.current && !map.current) {
      try {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [-74.5, 40], // Default center (longitude, latitude)
          zoom: 9,
        });

        map.current.on("load", () => {
          console.log("Map loaded successfully");
        });

        map.current.on("error", (e) => {
          console.error("Mapbox error:", e);
          setError("An error occurred while loading the map");
        });
      } catch (err) {
        console.error("Error initializing map:", err);
        setError("Failed to initialize the map");
      }
    }

    // return () => {
    //   if (map.current) {
    //     map.current.remove();
    //   }
    // };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-full w-full flex-1">
      <div ref={mapContainer} className="h-full w-full" />;
    </div>
  );
};

export default Map;
