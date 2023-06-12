import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlined from "@mui/icons-material/ArrowBackIosOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined";
import ScatterPlotOutlinedIcon from "@mui/icons-material/ScatterPlotOutlined";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const LeftSideIconMenu = ({
  showLeftSideBar,
  toggleShowLeftSideBar,
}: {
  showLeftSideBar: boolean;
  toggleShowLeftSideBar: () => void;
}) => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-neutral-900 p-2 md:w-12">
      <div>
        <div className="flex flex-col items-center">
          <MoreHorizOutlinedIcon
            fontSize="small"
            className="cursor-pointer text-white"
          />
          <div
            className="mt-4 flex items-center justify-center rounded-full bg-gradient-to-r from-neutral-800 to-neutral-950 p-1"
            onClick={toggleShowLeftSideBar}
          >
            {showLeftSideBar ? (
              <ArrowForwardIosOutlinedIcon
                fontSize="small"
                className="cursor-pointer text-neutral-400"
              />
            ) : (
              <ArrowBackIosOutlined
                fontSize="small"
                className="cursor-pointer text-neutral-400"
              />
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-y-5">
          <SportsMotorsportsOutlinedIcon className="cursor-pointer text-neutral-300" />
          <ScatterPlotOutlinedIcon className="cursor-pointer text-neutral-300" />
          <SchemaOutlinedIcon className="cursor-pointer text-violet-400" />
          <FormatPaintOutlinedIcon className="cursor-pointer text-neutral-300" />
          <FilterDramaOutlinedIcon className="cursor-pointer text-neutral-300" />
          <CameraOutlinedIcon className="cursor-pointer text-neutral-300" />
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <WorkspacesOutlinedIcon className="cursor-pointer text-neutral-300" />
        <PieChartOutlineOutlinedIcon className="cursor-pointer text-neutral-300" />
        <LiveHelpOutlinedIcon className="cursor-pointer text-neutral-300" />
        <PublicOutlinedIcon className="cursor-pointer text-neutral-300" />
      </div>
    </div>
  );
};

export default LeftSideIconMenu;
