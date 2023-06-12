import { PropsWithChildren } from "react";
import { useDrag } from "react-dnd";
import { DraggableNode } from "../../types/workflow/node";

interface Props extends PropsWithChildren {
  item: DraggableNode;
  type: string;
  hideWhenDrag?: boolean;
  state?: any;
}

function Draggable({ children, type, item, hideWhenDrag, state }: Props) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [state]
  );

  if (isDragging && hideWhenDrag) {
    return <div ref={drag}></div>;
  }

  return (
    <div ref={drag} className="my-2 cursor-pointer">
      {children}
    </div>
  );
}

export default Draggable;
