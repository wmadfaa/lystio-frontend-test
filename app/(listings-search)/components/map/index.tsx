"use client";

import React, { useState, useCallback } from "react";
import Mapbox from "react-map-gl";
import { Feature } from "geojson";

import DrawControl from "./draw-control";

function Map() {
  const [features, setFeatures] = useState<Record<string, Feature>>({});

  console.log({ features });

  const onUpdate = useCallback(
    (e: { features: Feature[]; action?: string }) => {
      setFeatures((currFeatures) => {
        const newFeatures = { ...currFeatures };
        for (const f of e.features) {
          if (f.id) {
            newFeatures[f.id] = f;
          }
        }
        return newFeatures;
      });
    },
    [],
  );

  const onDelete = useCallback((e: { features: Feature[] }) => {
    setFeatures((currFeatures) => {
      const newFeatures = { ...currFeatures };
      for (const f of e.features) {
        if (f.id) {
          delete newFeatures[f.id];
        }
      }
      return newFeatures;
    });
  }, []);

  return (
    <div className="h-full w-full flex-1">
      <Mapbox
        initialViewState={{ longitude: 16.3738, latitude: 48.2082, zoom: 12 }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        <DrawControl
          position="top-left"
          displayControlsDefault={false}
          controls={{
            polygon: true,
            trash: true,
          }}
          defaultMode="draw_polygon"
          onCreate={onUpdate}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </Mapbox>
    </div>
  );
}

export default Map;
