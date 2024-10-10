import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { Feature } from "geojson";
import { useControl, IControl } from "react-map-gl";

import type { ControlPosition, MapInstance } from "react-map-gl";

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  position?: ControlPosition;

  onCreate?: (evt: { features: Feature[] }) => void;
  onUpdate?: (evt: { features: Feature[]; action: string }) => void;
  onDelete?: (evt: { features: Feature[] }) => void;
};

export default function DrawControl(props: DrawControlProps) {
  useControl(
    () => new MapboxDraw(props) as IControl<MapInstance>,
    ({ map }) => {
      if (props.onCreate) map.on("draw.create", props.onCreate);
      if (props.onUpdate) map.on("draw.update", props.onUpdate);
      if (props.onDelete) map.on("draw.delete", props.onDelete);
    },
    ({ map }) => {
      if (props.onCreate) map.off("draw.create", props.onCreate);
      if (props.onUpdate) map.off("draw.update", props.onUpdate);
      if (props.onDelete) map.off("draw.delete", props.onDelete);
    },
    {
      position: props.position,
    },
  );

  return null;
}
