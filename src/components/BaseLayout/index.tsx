import { Outlet } from "react-router";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import LeftSideIconMenu from "./LeftSideIconMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BaseLayout = () => {
  const [showLeftSideBar, setShowLeftSideBar] = useState(true);
  const { workflow } = useParams();

  const toggleShowLeftSideBar = () => {
    setShowLeftSideBar((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <LeftSideIconMenu
        toggleShowLeftSideBar={toggleShowLeftSideBar}
        showLeftSideBar={showLeftSideBar}
      />

      <LeftSideBar showLeftSideBar={showLeftSideBar} />

      <Outlet />

      {workflow === "openai-helper" && (
        <div className="m-2 w-36 rounded-lg bg-black md:block md:w-64">
          <RightSideBar />
        </div>
      )}
    </div>
  );
};

export default BaseLayout;
