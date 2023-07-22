import {
  SearchIcon,
  ModalOpenIcon,
  ModalExportIcon,
  ModalRewriteIcon,
  ModalRemoveIcon,
  V2OpenIcon,
  V2RewriteIcon,
  V2ExportIcon,
  V2RemoveIcon,
} from "../../utils/icons";

type SnapshotProps = {
  time: string;
  date: string;
  tabs: number;
  windows: number;
};

const Snapshot = ({ time, date, tabs, windows }: SnapshotProps) => {
  const iconPlaceholderStyle = `w-[24px] h-[24px] rounded-[3px]  flex justify-center items-center hover:bg-noir-14`;

  return (
    <div className="group flex w-[360px] bg-noir-14 border border-noir-14 h-[28px] hover:bg-noir-11 pl-3 hover:border-noir-10 justify-between flex-shrink-0  rounded cursor-pointer items-center">
      <div className="flex gap-5">
        <div className="text-[13px] text-noir-3">{time}</div>
        <div className="text-[13px] text-noir-3">{date}</div>
      </div>
      <div className="flex">
        <div className="mr-3 flex gap-1 text-noir-5 text-[13px] group-hover:hidden">
          {tabs}
          <div className="text-noir-8 font-semibold text-[13px]">/</div>
          {windows}
        </div>
        <div className="hidden gap-1 mr-[1px] group-hover:flex">
          <div className={iconPlaceholderStyle}>
            <ModalOpenIcon />
            {/* <V2OpenIcon color="#717171" /> */}
          </div>
          <div className={iconPlaceholderStyle}>
            <ModalRewriteIcon />
            {/* <V2RewriteIcon color="#717171" /> */}
          </div>
          <div className={iconPlaceholderStyle}>
            <ModalExportIcon />
            {/* <V2ExportIcon color="#717171" /> */}
          </div>
          <div className={iconPlaceholderStyle}>
            <ModalRemoveIcon />
            {/* <V2RemoveIcon color="#717171" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div
      className="mt-3 border border-noir-11 rounded h-[34px] w-[340px] flex-shrink-0 flex place-items-center 
      gap-2.5 bg-noir-13 focus-within:border-noir-9 hover:border-noir-9"
    >
      <div className="h-5 w-5 ml-2">
        <SearchIcon />
      </div>
      <input type="text" placeholder="Search inside the session history" />
    </div>
  );
};

const Snapshots = ({ history }: { history: SnapshotProps[] }) => {
  return (
    <div className="relative max-h-[140px]">
      <div className="h-[14px] w-full z-10 modal-gradient-for-top sticky top-0"></div>
      <div className="flex flex-col gap-0.5 pt-1 pb-2">
        {history.map((snapshot) => (
          <Snapshot
            key={snapshot.time}
            time={snapshot.time}
            date={snapshot.date}
            tabs={snapshot.tabs}
            windows={snapshot.windows}
          />
        ))}
      </div>
      <div className="h-[16px] flex-shrink-0 z-10 w-full modal-gradient-for-bottom sticky bottom-0"></div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="h-[36px] bg-noir-13  flex items-center pl-3.5 pr-2 w-full border-t border-noir-11 ">
      <div className="text-noir-3 text-[13px]">5 changes</div>
    </div>
  );
};

const History = () => {
  const history = [
    {
      time: "12:03",
      date: "May 26",
      tabs: 21,
      windows: 2,
    },
    {
      time: "09:01",
      date: "Feb 22",
      tabs: 19,
      windows: 2,
    },
    {
      time: "16:03",
      date: "Dec 31, 2022",
      tabs: 24,
      windows: 2,
    },
    {
      time: "02:03",
      date: "Dec 31, 2022",
      tabs: 18,
      windows: 1,
    },
    {
      time: "12:06",
      date: "Dec 19, 2022",
      tabs: 20,
      windows: 1,
    },
  ];

  return (
    <div className="max-w-[386px] mx-auto mt-16 bg-noir-14 rounded border border-noir-11 flex flex-col items-center">
      <SearchBar />
      <Snapshots history={history} />
      <Footer />
    </div>
  );
};

export default History;
