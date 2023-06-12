import { InputAdornment, SvgIconTypeMap } from "@mui/material";
import { twMerge } from "tailwind-merge";
import { Link, useLocation } from "react-router-dom";
import DiamondIcon from "@mui/icons-material/Diamond";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LockIcon from "@mui/icons-material/Lock";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";

const LeftSideBar = ({ showLeftSideBar }: { showLeftSideBar: boolean }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={twMerge(
        "m-2 hidden flex-col  justify-between md:w-64",
        showLeftSideBar ? "md:flex" : ""
      )}
    >
      <div className="rounded-lg bg-neutral-900 p-2">
        <div className="rounded-lg bg-black">
          <TextField
            fullWidth
            placeholder="Find workflow"
            id="fullWidth"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              input: {
                color: "white",
                background: "black",
                paddingY: "0.7rem",
                borderRadius: 2,
              },
            }}
          />
        </div>
        <div className="mt-8">
          <p className="text-zinc-500">Installed</p>
          <div className="mt-2">
            {sideBarItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <LeftSideBarItem active={isActive} {...item} key={item.id} />
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-neutral-900 p-2">
        <p>Recomended</p>
        <div className="mt-2">
          {recommendedItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <LeftSideBarItem active={isActive} {...item} key={item.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LeftSideBarItem = ({
  active,
  description,
  title,
  path,
  Icon,
}: {
  id: number;
  active?: boolean;
  description: string;
  title: string;
  path: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}) => {
  return (
    <Link
      className={twMerge(
        "flex cursor-pointer items-center gap-x-3 rounded-xl px-1 py-2 text-gray-300 hover:bg-zinc-800",
        active ? "bg-black text-white hover:bg-black" : null
      )}
      to={path}
    >
      <div className="rounded-lg bg-zinc-950 p-1">
        <Icon fontSize="large" />
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </Link>
  );
};

const sideBarItems = [
  {
    id: 1,
    title: "OpenAI helper",
    description: "Write AI content",
    path: "/workflows/openai-helper",
    Icon: DiamondIcon,
  },
  {
    id: 2,
    title: "Data Visualization",
    description: "Visualize data insights",
    path: "/workflows/data-visualization",
    Icon: DataObjectIcon,
  },
  {
    id: 3,
    title: "User Authentication",
    description: "Secure user access",
    path: "/workflows/user-authentication",
    Icon: LockIcon,
  },
  {
    id: 4,
    title: "E-commerce Store",
    description: "Online shopping platform",
    path: "/workflows/e-commerce-store",
    Icon: AddShoppingCartIcon,
  },
  {
    id: 5,
    title: "Social Media Feed",
    description: "Display posts dynamically",
    path: "/workflows/social-media-feed",
    Icon: InstagramIcon,
  },
];

const recommendedItems = [
  {
    id: 1,
    title: "Super Terminal",
    description: "The ultimate command-line interface.",
    path: "/workflows/super-terminal",
    Icon: TerminalOutlinedIcon,
  },
  {
    id: 2,
    title: "Visual Studio Magic",
    description: "Unleash the power of coding.",
    path: "/workflows/visual-studio-magic",
    Icon: NoteAltOutlinedIcon,
  },
];

export default LeftSideBar;
