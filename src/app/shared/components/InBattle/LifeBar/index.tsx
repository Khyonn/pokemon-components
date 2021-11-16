import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import StaticText from "../../Texts/StaticText";
import { concatOnlyString } from "../../../utils/array";
import LifeBarImg from "../../../../../assets/images/life-bar.png";
import useHook from "./hook";
import styles from "./styles.module.scss";

export type LifeBarProps = {
  name?: string;
  level?: number;
  hp?: number;
  maxHP?: number;
  xp?: number;
  maxXP?: number;
  isOpponent?: boolean;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/**
 * Display the lifebar based on
 *
 * - Pokemon name
 *
 * - Pokemon level
 *
 * - Health points stats (hp and max hp)
 *
 * - Experience points stats (xp and max xp)
 *
 * - The side (personal's or opponent's)
 *
 * @param {LifeBarProps} props
 * @returns
 */
const LifeBar = ({
  name = "Bulbasaur",
  level = 5,
  hp: rawHP = 19,
  maxHP: rawMaxHP = 19,
  xp: rawXP = 0,
  maxXP: rawMaxXP = 100,
  isOpponent = false,
  className,
  ...props
}: LifeBarProps) => {
  const { hp, maxHP, hpPercent, xp, maxXP, xpPercent } = useHook(
    rawHP,
    rawMaxHP,
    rawXP,
    rawMaxXP
  );
  return (
    <div className={concatOnlyString(className, styles.lifebar_wrapper)}>
      <img
        className={concatOnlyString(
          styles[isOpponent ? "opponent-lifebar" : "lifebar"],
          styles[`hp-${hpPercent}`],
          styles[`xp-${xpPercent}`]
        )}
        src={LifeBarImg}
        alt={
          isOpponent
            ? `Opponent ${name}'s lifebar indicating ${hpPercent}% health point${
                hpPercent > 1 ? "s" : ""
              }`
            : `${name}'s lifebar indicating ${hp} health point${
                hp > 1 ? "s" : ""
              } on ${maxHP} and ${xp} experience point${
                xp > 1 ? "s" : ""
              } on ${maxXP}`
        }
        {...props}
      />
      <StaticText
        className={concatOnlyString(isOpponent && styles.opponent, styles.name)}
      >
        {name}
      </StaticText>
      <StaticText
        className={concatOnlyString(
          isOpponent && styles.opponent,
          styles.level
        )}
      >
        {level}
      </StaticText>
      {!isOpponent && (
        <>
          <StaticText className={styles.current_hp}>{hp}</StaticText>
          <StaticText className={styles.max_hp}>{maxHP}</StaticText>
        </>
      )}
    </div>
  );
};

export default LifeBar;
