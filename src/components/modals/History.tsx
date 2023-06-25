import React from "react";

const Snapshot = ({
  time,
  date,
  tabs,
  windows,
}: {
  time: string;
  date: string;
  tabs: number;
  windows: number;
}) => {
  return (
    <div className="flex w-[360px] bg-noir-14 border border-noir-14 h-[28px] hover:bg-noir-11 pl-3 hover:border-noir-10 justify-between flex-shrink-0 items-center rounded">
      <div className="flex gap-5">
        <div className="text-[13px] text-noir-3">{time}</div>
        <div className="text-[13px] text-noir-3">{date}</div>
      </div>
      <div className="">
        <div className="mr-3 flex gap-1 text-noir-5 group-hover:hidden text-[13px]">
          {tabs}
          <div className="text-noir-8 font-semibold text-[13px]">/</div>
          {windows}
        </div>
      </div>
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
    <div className="max-w-[386px] mx-auto mt-16 bg-noir-14 rounded">
      <div className="flex flex-col items-center h-[180px] border border-noir-11 border-b-transparent rounded-t">
        <div className="mt-3 border border-noir-11 rounded h-[34px] w-[340px] flex-shrink-0"></div>
        <div className="flex flex-col gap-0.5 mt-3 pb-8">
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
      </div>
      <div className="h-[36px] bg-noir-13 border border-noir-11 flex justify-between items-center pl-3.5 pr-2 rounded-b">
        <div className="text-noir-3 text-[13px]">5 changes</div>
      </div>
    </div>
  );
};

export default History;
