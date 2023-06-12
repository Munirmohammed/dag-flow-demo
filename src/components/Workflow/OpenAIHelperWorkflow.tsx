import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
  useReactFlow,
} from "reactflow";
import Droppable from "../DnD/Droppable";
import { XYCoord } from "react-dnd";
import CustomNode from "./CustomNode";

const nodeTypes = {
  input: CustomNode,
};

export interface NewNode {
  id: string;
  coords: XYCoord;
  data: {};
  type?: string;
}

const OpenAIHelperWorkflow = () => {
  const initialNodes: [] = [];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { project } = useReactFlow();

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNewNode = ({ id, coords, data, type }: NewNode) => {
    const newNode = {
      id,
      type: type,
      position: project({
        ...coords,
      }),
      data,
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <Droppable addNewNode={addNewNode} nodes={nodes}>
      <div style={{ width: "100%", height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          attributionPosition="bottom-left"
        >
          <Controls
            className="flex bg-zinc-600"
            position="bottom-right"
            showFitView={false}
          />
          <Background color="gray" gap={12} size={1} />
        </ReactFlow>
      </div>
    </Droppable>
  );
};

export default OpenAIHelperWorkflow;
