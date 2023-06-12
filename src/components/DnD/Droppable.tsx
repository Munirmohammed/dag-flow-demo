import { DropTargetMonitor, XYCoord, useDrop } from "react-dnd";
import { PropsWithChildren, useRef } from "react";
import { DraggableNode } from "../../types/workflow/node";
import { Node } from "reactflow";
import { generateId } from "../../utils/generateId";
import { NewNode } from "../Workflow/OpenAIHelperWorkflow";

interface Props extends PropsWithChildren {
  addNewNode: ({ id, coords, data, type }: NewNode) => void;
  nodes: Node<
    {
      label: string;
    },
    string | undefined
  >[];
}

function Droppable({ children, addNewNode }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleDrop = (monitor: DropTargetMonitor, item: DraggableNode) => {
    const containerY = containerRef.current?.getBoundingClientRect().y;
    const containerX = containerRef.current?.getBoundingClientRect().x;

    const { x: draggableX, y: draggableY } =
      monitor.getClientOffset() as XYCoord;

    if (!!containerX && !!containerY) {
      let x = draggableX - containerX - 75;
      let y = draggableY - containerY;
      const id = generateId(item.id);
      addNewNode({
        id,
        coords: { x, y },
        type: "input",
        data: {
          hasTarget: item.nodeType === "Prefabs" ? false : true,
          hasTwoSources: item.nodeType === "Inputs" ? true : false,
          hasSource: true,
          label: item.name,
          type: item.nodeType,
          Icon: item.Icon,
        },
      });
    }
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "NODE",
    drop: (item: DraggableNode, monitor: DropTargetMonitor) => {
      handleDrop(monitor, item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      dropItem: monitor.getItem(),
    }),
  }));
  const isActive = canDrop && isOver;

  return (
    <div ref={containerRef} className="h-full w-full">
      <div
        ref={drop}
        data-testid="dustbin"
        className="flex h-full w-full items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
}

export default Droppable;
