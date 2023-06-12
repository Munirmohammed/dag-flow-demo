import { Route, Routes } from "react-router";
import routerConfig from "./routerConfig";
import { routerType } from "../types/router";
import Layout from "../components/BaseLayout";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  const pageRoutes = routerConfig.map(
    ({ path, title, element }: routerType) => {
      return <Route key={title} path={`/${path}`} element={element} />;
    }
  );

  return (
    <Routes>
      <Route Component={Layout}>{pageRoutes}</Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
