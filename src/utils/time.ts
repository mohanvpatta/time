import dayjs from "dayjs";

export const humanizeDates = (timestamp: number): string => {
  const currentDate = dayjs();
  const targetDate = dayjs.unix(timestamp);

  const isSameYear = targetDate.isSame(currentDate, "year");
  const isSameMonth = targetDate.isSame(currentDate, "month");
  const isSameDay = targetDate.isSame(currentDate, "day");

  if (isSameYear && isSameMonth && isSameDay) {
    return "Today";
  } else if (
    isSameYear &&
    isSameMonth &&
    targetDate.isSame(currentDate.subtract(1, "day"), "day")
  ) {
    return "Yesterday";
  } else {
    const day = targetDate.format("D");
    const month = targetDate.format("MMMM");
    const year = targetDate.format("YYYY");
    const ordinalIndicator = getOrdinalIndicator(day);

    // const weekday = targetDate.format("ddd");
    // return `${day}${ordinalIndicator} ${month}${
    //   isSameYear ? "" : ` ${year}`
    // }, ${weekday}`;

    return `${day}${ordinalIndicator} ${month}${isSameYear ? "" : ` ${year}`}`;
  }
};

const getOrdinalIndicator = (day: string): string => {
  const lastDigit = parseInt(day.slice(-1));
  const lastTwoDigits = parseInt(day.slice(-2));

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return "th";
  }

  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const calculateDayStart = (timestamp: number): number => {
  const date = dayjs.unix(timestamp).startOf("day");
  return date.unix();
};
