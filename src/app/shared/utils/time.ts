import { DayTimes } from "./types";

export const getDayTime = (): DayTimes => {
  const hours = new Date().getHours();
  if (hours < 7 || hours > 22) {
    return "night";
  } else if (hours < 15) {
    return "day";
  } else {
    return "afternoon";
  }
};
