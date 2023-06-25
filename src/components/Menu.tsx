import { SearchIcon, FeedIcon, StarIcon } from "../utils/icons";

const Menu = () => {
  const MenuItemContainerStyling = `py-[5px] px-3 bg-noir-13 border border-noir-13 rounded-[7px]
  hover:bg-noir-9 hover:border-noir-8 `;

  return (
    <div className="sticky bottom-0 shrink-0">
      <div className="z-10 relative mb-2 rounded-[9px] bg-noir-13 border border-noir-10 h-[38px] flex items-center w-[140px] m-auto px-0.5">
        <div className={MenuItemContainerStyling}>
          <SearchIcon />
        </div>
        <div className={MenuItemContainerStyling}>
          <FeedIcon />
        </div>
        <div className={MenuItemContainerStyling}>
          <StarIcon />
        </div>
      </div>
      <div className="absolute bottom-0 w-[440px] h-[60px] noir-gradient"></div>
    </div>
  );
};

export default Menu;
