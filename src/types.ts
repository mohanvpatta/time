export type SingleSession = {
  updatedAtTimestamp: number;
  sessionName: string;
  links: string[][];
  note: string;
  starred: boolean;
};

export type SessionWithHistory = SingleSession & {
  history: SingleSession[];
};

export type DayGroupedSessions = {
  dayStart: number;
  sessions: SessionWithHistory[];
};
