import "reactflow/dist/style.css";
import Router from "./router/router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ReactFlowProvider>
          <DndProvider backend={HTML5Backend}>
            <Router />
          </DndProvider>
        </ReactFlowProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
