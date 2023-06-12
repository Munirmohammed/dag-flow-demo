import { routerType } from "../types/router";
import Home from "../pages/Home";
import WorkFlow from "../pages/Workflow";

const routerConfig: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home",
  },
  {
    path: "/workflows/:workflow",
    element: <WorkFlow />,
    title: "workflow",
  },
];

export default routerConfig;
