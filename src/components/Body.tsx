import { useState, useEffect } from "react";
import DayGroup from "./DayGroup";
import { SessionWithHistory, DayGroupedSessions } from "../types";
import { calculateDayStart } from "../utils/time";
import Menu from "./Menu";

const dummyData = [
  {
    updatedAtTimestamp: 1684828800,
    sessionName: "Sketching Exploration",
    history: [],
    links: [
      [
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link30",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link5",
      ],
      [
        "https://example.com/link6",
        "https://example.com/link7",
        "https://example.com/link8",
        "https://example.com/link9",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link10",
      ],
    ],
    note: "",
    starred: true,
  },
  {
    updatedAtTimestamp: 1684828801,
    sessionName: "Product Page UX Research",
    history: [],
    links: [
      [
        "https://example.com/link11",
        "https://example.com/link12",
        "https://example.com/link13",
        "https://example.com/link14",
        "https://example.com/link15",
      ],
      [
        "https://example.com/link16",
        "https://example.com/link17",
        "https://example.com/link18",
        "https://example.com/link28",
        "https://example.com/link27",
        "https://example.com/link28",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link29",
        "https://example.com/link30",
        "https://example.com/link19",
        "https://example.com/link20",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link28",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link29",
        "https://example.com/link30",
      ],
    ],
    note: "",
    starred: false,
  },
  {
    updatedAtTimestamp: 1684766400,
    sessionName: "Physical form -> digital design",
    history: [],
    links: [
      [
        "https://example.com/link21",
        "https://example.com/link22",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link23",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link24",
        "https://example.com/link25",
      ],
    ],
    note: "",
    starred: true,
  },
  {
    updatedAtTimestamp: 1684430400,
    sessionName: "Free Library Ideas",
    history: [],
    links: [
      [
        "https://example.com/link21",
        "https://example.com/link22",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link24",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link23",
        "https://example.com/link24",
        "https://example.com/link25",
      ],
    ],
    note: "",
    starred: true,
  },
  {
    updatedAtTimestamp: 1684497600,
    sessionName: "Game of Life Visualizations",
    history: [],
    links: [
      [
        "https://example.com/link21",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link23",
        "https://example.com/link24",
        "https://example.com/link25",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link30",
      ],
    ],
    note: "",
    starred: true,
  },
  {
    updatedAtTimestamp: 1684291200,
    sessionName: "Daily log of UI Freelance work",
    history: [],
    links: [
      [
        "https://example.com/link21",
        "https://example.com/link22",
        "https://example.com/link23",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link25",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link30",
      ],
    ],
    note: "",
    starred: true,
  },
  {
    updatedAtTimestamp: 1684323600,
    sessionName: "Shopify Discount Implementation",
    history: [],
    links: [
      [
        "https://example.com/link21",
        "https://example.com/link22",
        "https://example.com/link23",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link24",
        "https://example.com/link25",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link30",
      ],
    ],
    note: "",
    starred: true,
  },

  {
    updatedAtTimestamp: 1684356000,
    sessionName: "User Research for the Book Idea",
    history: [],
    links: [
      [
        "https://example.com/link21",
        "https://example.com/link22",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link1",
        "https://example.com/link2",
        "https://example.com/link3",
        "https://example.com/link4",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link23",
        "https://example.com/link24",
        "https://example.com/link25",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link30",
      ],
    ],
    note: "",
    starred: true,
  },
  {
    updatedAtTimestamp: 1684896000,
    sessionName: "Book Rating Scales",
    history: [],
    links: [
      [
        "https://example.com/link21",
        "https://example.com/link22",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link23",
        "https://example.com/link24",
        "https://example.com/link25",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link30",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link30",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link30",
      ],
    ],
    note: "",
    starred: true,
  },

  {
    updatedAtTimestamp: 1684356001,
    sessionName: "Solarpunk Ideas",
    history: [],
    links: [
      [
        "https://example.com/link21",
        "https://example.com/link22",
        "https://example.com/link23",
        "https://example.com/link24",
        "https://example.com/link25",
      ],
      [
        "https://example.com/link26",
        "https://example.com/link27",
        "https://example.com/link28",
        "https://example.com/link29",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link24",
        "https://example.com/link24",
        "https://example.com/link22",
        "https://example.com/link30",
      ],
    ],
    note: "",
    starred: true,
  },
];

const Body = () => {
  const [data, setData] = useState<SessionWithHistory[]>(dummyData);
  const [dayGroups, setDayGroups] = useState<DayGroupedSessions[]>([]);

  const groupSessionsByDay = (
    sessions: SessionWithHistory[]
  ): DayGroupedSessions[] => {
    const groupedSessions: DayGroupedSessions[] = [];

    sessions.forEach((session) => {
      const dayStart = calculateDayStart(session.updatedAtTimestamp);

      const existingDayGroup = groupedSessions.find(
        (group) => group.dayStart === dayStart
      );

      if (existingDayGroup) {
        existingDayGroup.sessions.push(session);
      } else {
        const newDayGroup: DayGroupedSessions = {
          dayStart,
          sessions: [session],
        };
        groupedSessions.push(newDayGroup);
      }
    });

    return groupedSessions;
  };

  useEffect(() => {
    setDayGroups(groupSessionsByDay(data));
  }, []);

  return (
    <>
      <div className="relative bg-noir-16 flex flex-col gap-6 pt-6 pm-20 max-h-[350px]">
        {dayGroups.map((dayGroup) => {
          return (
            <DayGroup
              key={dayGroup.dayStart}
              dayStart={dayGroup.dayStart}
              sessions={dayGroup.sessions}
            />
          );
        })}
        <Menu />
      </div>
    </>
  );
};

export default Body;
