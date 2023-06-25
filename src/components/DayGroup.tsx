import React from "react";
import Session from "./Session";
import { SessionWithHistory, DayGroupedSessions } from "../types";
import { humanizeDates } from "../utils/time";

const DayGroup = ({ dayStart, sessions }: DayGroupedSessions) => {
  console.log(dayStart, sessions);
  return (
    <div className="flex flex-col gap-3.5 shrink-0">
      <div className="text-xs font-medium text-noir-5 ml-6">
        {humanizeDates(dayStart)}
      </div>
      <div className="ml-3">
        {sessions.map((session: SessionWithHistory) => {
          return (
            <Session
              key={session.updatedAtTimestamp}
              sessionName={session.sessionName}
              linksCount={session.links.flat().length}
              windowsCount={session.links.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayGroup;
