import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import GroundImg from "../../../../../assets/images/battle-grounds.png";
import { concatOnlyString } from "../../../utils/array";
import { DayTimes } from "../../../utils/types";
import styles from "./styles.module.scss";
import useHook from "./hook";

export type GroudType =
  | "sand"
  | "snow"
  | "water"
  | "grass"
  | "field"
  | "indoor"
  | "rocky";
export type GroundProps = {
  type?: GroudType;
  isOpponent?: boolean;
  dayTime?: DayTimes;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/**
 * Displays battle ground based on
 *
 * - ground type
 *
 * - the side (personal's or opponent's)
 *
 * - the day time
 * @param {GroundProps} props
 * @returns
 */
const Ground = ({
  type = "grass",
  isOpponent = false,
  dayTime = "day",
  className,
}: GroundProps) => {
  console.log(useHook());
  return (
    <img
      className={concatOnlyString(
        className,
        styles.ground,
        styles[type],
        isOpponent && styles.opponent,
        styles[dayTime]
      )}
      src={GroundImg}
      alt={concatOnlyString(
        isOpponent && "Opponent's",
        `${type} ground at ${dayTime}`
      )}
    />
  );
};

export default Ground;
