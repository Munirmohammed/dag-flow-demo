import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { twMerge } from "tailwind-merge";

export interface CustomNodeProps extends NodeProps {
  hasTarget?: boolean;
  hasSource?: boolean;
  hasTwoSource?: boolean;
  type: string;
}

const commonNodeStyle =
  "flex items-center justify-center bg-gradient-to-r from-neutral-700/80 to-neutral-800/90 p-5 text-white hover:border-2 hover:border-violet-400";

const commonHandleStyle =
  "border-.5 h-2.5 w-2.5 rounded border-violet-400/60 bg-neutral-800";

const CustomNode = (props: CustomNodeProps) => {
  const {
    hasTarget,
    hasSource,
    hasTwoSources,
    type: typeFromData,
    Icon,
  } = props.data;
  console.log("props", props);

  const TypeOfNode = () => {
    const isInputs = typeFromData === "Inputs";
    const isPrefabs = typeFromData === "Prefabs";
    const isFavourites = typeFromData === "Favorites";

    return (
      <div
        className={twMerge(
          isPrefabs
            ? "h-28 flex-col gap-y-1  rounded-xl rounded-r-[2.5rem]"
            : isInputs
            ? "h-12 rounded-lg"
            : "h-28 flex-col gap-y-1  rounded-lg",
          commonNodeStyle
        )}
      >
        <Icon fontSize="large" className="text-violet-300" />
        <p className="text-[.9rem] font-semibold">{props.data.label}</p>
      </div>
    );
  };

  return (
    <>
      <TypeOfNode />
      {hasTarget && (
        <Handle
          type="target"
          position={Position.Left}
          className={commonHandleStyle}
        />
      )}
      {hasTwoSources && hasSource && (
        <Handle
          type="source"
          position={Position.Right}
          id="b"
          style={{ top: 40 }}
          className={commonHandleStyle}
        />
      )}
      {hasSource && (
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          style={{ top: hasTwoSources ? 10 : undefined }}
          className={commonHandleStyle}
        />
      )}
    </>
  );
};

export default memo(CustomNode);
