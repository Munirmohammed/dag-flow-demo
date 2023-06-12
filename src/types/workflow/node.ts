import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { XYPosition } from "reactflow";

export type Node = {
  id: string;
  position: XYPosition;
  data: {
    label: string;
  };
};

export type NodeTypes = "Inputs" | "Favorites" | "Prefabs";

export type DraggableNode = {
  id: string;
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  description: string;
  nodeType?: NodeTypes;
};
