import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { UploadIcon, WindowIcon, WindowsGroupIcon } from "../utils/icons";

const FooterButton = ({
  label,
  icon,
  hovered,
  updateHovered,
}: {
  label: string;
  icon: ReactNode;
  hovered: boolean;
  updateHovered: (label: string) => void;
}) => {
  return (
    <motion.div
      className="relative"
      onMouseEnter={() => {
        updateHovered(label);
      }}
    >
      {hovered && (
        <motion.div
          layoutId="active"
          className="absolute inset-0 bg-noir-12  border border-noir-15 rounded-[4px]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <div
        className={`flex flex-col items-center justify-center w-[136px] h-[74px] gap-2.5 relative z-20 cursor-pointer ${
          hovered ? "fill-noir-5 stroke-noir-5" : "fill-noir-8 stroke-noir-8"
        }`}
      >
        {icon}
        <div
          className={`
        ${hovered ? "text-noir-4" : "text-noir-7"}`}
        >
          {label}
        </div>
      </div>
    </motion.div>
  );
};

const Footer = () => {
  const buttons = [
    {
      label: "All Windows",
      icon: <WindowsGroupIcon />,
    },
    {
      label: "This Window",
      icon: <WindowIcon />,
    },
    {
      label: "Upload Session",
      icon: <UploadIcon />,
    },
  ];

  const [hoveredButton, setHoveredButton] = useState("");
  const updateHovered = (button: string) => {
    setHoveredButton(button);
  };

  return (
    <div
      className="bg-noir-15 h-[90px] border-t border-noir-12 flex justify-evenly items-center"
      onMouseLeave={() => {
        setHoveredButton("");
      }}
    >
      {buttons.map((button) => (
        <FooterButton
          label={button["label"]}
          icon={button["icon"]}
          hovered={hoveredButton === button["label"]}
          updateHovered={updateHovered}
          key={button["label"]}
        />
      ))}
    </div>
  );
};

export default Footer;
