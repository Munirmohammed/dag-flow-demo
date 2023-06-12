import { DraggableNode, NodeTypes } from "../../types/workflow/node";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../CustomAccordion";
import Draggable from "../DnD/Draggable";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslockOutlined";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHighOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ForestIcon from "@mui/icons-material/ForestOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import KeyIcon from "@mui/icons-material/KeyOutlined";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAltOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { generateId } from "../../utils/generateId";
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";

const RightSideBar = () => {
  return (
    <div>
      <div className="mt-1 flex h-24 items-center justify-between px-5">
        <div className="flex gap-x-2">
          <FunctionsOutlinedIcon className="cursor-pointer text-neutral-600" />
          <AddOutlinedIcon className="cursor-pointer  text-neutral-600" />
          <IosShareOutlinedIcon className="cursor-pointer  text-neutral-600" />
          <PestControlOutlinedIcon className="cursor-pointer  text-neutral-600" />
        </div>

        <MenuIcon className=" cursor-pointer  text-neutral-600" />
      </div>
      <div className="flex justify-between rounded-lg bg-neutral-800 p-1 px-2">
        <div className="flex cursor-pointer gap-x-1">
          <MenuIcon />
          <SearchIcon />
        </div>
        <div className="cursor-pointer">
          <KeyboardCapslockIcon />
          <KeyboardCapslockIcon className="rotate-180" />
        </div>
      </div>
      {mainMenu.map((menu) => (
        <RightSideMenu {...menu} key={generateId(menu.name)} />
      ))}
    </div>
  );
};

const RightSideMenu = (mainMenu: MainMenu) => {
  return (
    <div>
      <Accordion className="mt-1 rounded-xl bg-neutral-800 text-white">
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="rounded-xl"
        >
          <Typography className="m-0 text-sm font-bold">
            {mainMenu.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="px-0 pt-1">
          {mainMenu.draggableItems.map(({ id, name, Icon, description }) => (
            <div className="my-2 cursor-pointer" key={id}>
              <Draggable
                item={{ id, name, Icon, description, nodeType: mainMenu.name }}
                type="NODE"
              >
                <div className="flex items-center gap-x-2">
                  <div className="rounded-lg bg-neutral-900 p-1">
                    <Icon fontSize="medium" className="text-violet-300" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-white">{name}</p>
                    <Typography className="text-xs text-neutral-500">
                      {description}
                    </Typography>
                  </div>
                </div>
              </Draggable>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const inputDraggableNodes: DraggableNode[] = [
  {
    id: "key-word",
    name: "Key Word",
    Icon: KeyIcon,
    description: "Define a keyword for your search.",
  },
  {
    id: "run-script",
    name: "Run Script",
    Icon: DescriptionIcon,
    description: "Execute a custom script or command.",
  },
  {
    id: "script-filter",
    name: "Script Filter",
    Icon: FilterAltIcon,
    description: "Filter results using a custom script.",
  },
];

const prefabsDraggableNodes: DraggableNode[] = [
  {
    id: "dream-home",
    name: "Dream Home",
    Icon: CottageOutlinedIcon,
    description: "Design your dream home with customizable features.",
  },
  {
    id: "office-space",
    name: "Office Space",
    Icon: HomeWorkOutlinedIcon,
    description: "Create a modern and productive office environment.",
  },
  {
    id: "learning-center",
    name: "Learning Center",
    Icon: SchoolOutlinedIcon,
    description: "Build an educational facility with innovative resources.",
  },
];

const favouriteDraggableNodes: DraggableNode[] = [
  {
    id: "unicorn-magic",
    name: "Unicorn Magic",
    Icon: AutoFixHighIcon,
    description: "Experience the magical world of unicorns.",
  },

  {
    id: "starlight-wonder",
    name: "Starlight Wonder",
    Icon: AutoAwesomeOutlinedIcon,
    description: "Discover the wonders of starry nights.",
  },
  {
    id: "enchanted-forest",
    name: "Enchanted Forest",
    Icon: ForestIcon,
    description: "Step into an enchanting forest full of mystery.",
  },
  {
    id: "moonlit-serenade",
    name: "Moonlit Serenade",
    Icon: DarkModeIcon,
    description: "Be serenaded by the enchanting moonlight.",
  },
];

type MainMenu = {
  name: NodeTypes;
  draggableItems: DraggableNode[];
};

const mainMenu: MainMenu[] = [
  {
    name: "Prefabs",
    draggableItems: prefabsDraggableNodes,
  },
  {
    name: "Inputs",
    draggableItems: inputDraggableNodes,
  },
  {
    name: "Favorites",
    draggableItems: favouriteDraggableNodes,
  },
];

export default RightSideBar;
