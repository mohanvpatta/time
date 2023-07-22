import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import {
  V2OpenIcon,
  V2RewriteIcon,
  V2ExportIcon,
  V2RemoveIcon,
} from "../utils/icons";

type SessionProps = {
  sessionName: string;
  linksCount: number;
  windowsCount: number;
};

const Option = ({
  icon,
  label,
  hovered,
  updateHoverItem,
}: {
  icon: ReactNode;
  label: string;
  hovered: boolean;
  updateHoverItem: (item: string) => void;
}) => {
  const iconPlaceholderStyle = `relative w-[26px] h-[26px] bg-noir-13 flex justify-center items-center rounded-[3px]`;

  return (
    <div
      className={iconPlaceholderStyle}
      onMouseEnter={() => {
        updateHoverItem(label);
      }}
    >
      {hovered && (
        <motion.div
          layoutId="active"
          className="absolute inset-3 bg-noir-15"
          transition={{ type: "spring", bounce: 0.2, duration: 0.2 }}
        />
      )}
      <span className="relative z-20">{icon}</span>
    </div>
  );
};

const Session = ({ sessionName, linksCount, windowsCount }: SessionProps) => {
  const options = [
    {
      icon: <V2OpenIcon color={"#6B6B6B"} />,
      label: "Open",
    },
    {
      icon: <V2RewriteIcon color={"#6B6B6B"} />,
      label: "Rewrite",
    },
    {
      icon: <V2ExportIcon color={"#6B6B6B"} />,
      label: "Export",
    },
    {
      icon: <V2RemoveIcon color={"#6B6B6B"} />,
      label: "Remove",
    },
  ];

  const [hoverItem, setHoverItem] = useState("");
  const updateHoverItem = (item: string) => {
    setHoverItem(item);
  };

  return (
    <div
      className="group border border-noir-16 w-[416px] bg-noir-16  flex justify-between h-[33px] items-center rounded-[5px]
    hover:border-noir-11 hover:bg-noir-13 hover:cursor-pointer"
    >
      <div className="flex ml-3">
        <div className=""></div>
        <div className="">{sessionName}</div>
        <div className=""></div>
      </div>
      <div className="flex">
        <div className="mr-3 flex gap-1 text-noir-5 group-hover:hidden">
          {linksCount}
          <div className="text-noir-8 font-semibold">/</div>
          {windowsCount}
        </div>
        <div
          className="hidden gap-1 mr-1 group-hover:flex"
          onMouseLeave={() => {
            updateHoverItem("");
          }}
        >
          {options.map((option) => (
            <Option
              key={option.label}
              icon={option.icon}
              label={option.label}
              hovered={hoverItem === option["label"]}
              updateHoverItem={updateHoverItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Session;
