import { motion } from "framer-motion";
import { MenuSearchIcon, MenuStarIcon, MenuClockIcon } from "../utils/icons";
import { ReactNode, useState } from "react";

const MenuItem = ({
  icon,
  label,
  active,
  updateActiveItem,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  updateActiveItem: (item: string) => void;
}) => {
  const MenuItemContainerStyling = `
  relative w-[38px] h-9 bg-noir-12 rounded-[7px] flex items-center 
  justify-center text-noir-10 text-[12px] font-bold cursor-pointer
  hover:bg-noir-9
  ${active ? "bg-noir-9" : ""}
  `;
  return (
    <motion.div
      className={MenuItemContainerStyling}
      onClick={() => {
        updateActiveItem(label);
      }}
    >
      {icon}
    </motion.div>
  );
};

const Menu = () => {
  const items = [
    { icon: <MenuSearchIcon />, key: "search" },
    { icon: <MenuStarIcon />, key: "star" },
    { icon: <MenuClockIcon />, key: "clock" },
  ];
  const [activeItem, setActiveItem] = useState(items[0]["key"]);

  const updateActiveItem = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="sticky bottom-0 shrink-0">
      <div
        className="
        z-10 mb-2 relative flex items-center w-max m-auto bg-noir-12 border border-noir-11 rounded-[10px] 
        p-1 gap-0.5
      "
      >
        {items.map((item) => (
          <MenuItem
            key={item["key"]}
            icon={item["icon"]}
            label={item["key"]}
            active={activeItem === item["key"]}
            updateActiveItem={updateActiveItem}
          />
        ))}
      </div>
      <div className="absolute bottom-0 w-[440px] h-[60px] gradient-for-bottom"></div>
    </div>
  );
};

export default Menu;
