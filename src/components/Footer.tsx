import { UploadIcon, WindowIcon, WindowsGroupIcon } from "../utils/icons";

const Footer = () => {
  const buttons = [
    {
      name: "All Windows",
      icon: <WindowsGroupIcon />,
    },
    {
      name: "This Window",
      icon: <WindowIcon />,
    },
    {
      name: "Upload Session",
      icon: <UploadIcon />,
    },
  ];

  const FooterButtonStyling = `
    group text-noir-10 hover:text-noir-11 w-[136px] h-[74px] flex flex-col items-center justify-center gap-2.5
    border border-noir-15 rounded-[3px] bg-noir-15
    hover:border-noir-11 hover:bg-noir-12 hover:cursor-pointer`;

  const FooterButtonTextStyling = "text-noir-6 group-hover:text-noir-4";

  return (
    <div className="bg-noir-15 h-[90px] border-t border-noir-12 flex justify-evenly items-center">
      <div className={FooterButtonStyling}>
        <WindowsGroupIcon />
        <div className={FooterButtonTextStyling}>All Windows</div>
      </div>
      <div className={FooterButtonStyling}>
        <WindowIcon />
        <div className={FooterButtonTextStyling}>This Window</div>
      </div>
      <div className={FooterButtonStyling}>
        <UploadIcon />
        <div className={FooterButtonTextStyling}>Upload Session</div>
      </div>
    </div>
  );
};

export default Footer;
