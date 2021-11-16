import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { concatOnlyString } from "../../../utils/array";

import CharacterImg from "../../../../../assets/images/character.png";
import styles from "./styles.module.scss";
import { Heroes } from "../../../utils/types";

export type HeroDirection = "up" | "down" | "left" | "right";
type HeroMovement = "standing" | "walking" | "running" | "cycling" | "fishing";
export type OverworldHeroProps = {
  character?: Heroes;
  direction?: HeroDirection;
  movement?: HeroMovement;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/**
 * Display the character in different state. You can choose
 *
 * - the character
 *
 * - the direction
 *
 * - the animation
 *
 * @param {OverworldHeroProps} props
 * @returns
 */
const OverworldHero = ({
  character = "Dawn",
  direction = "down",
  movement = "standing",
  className,
  ...props
}: OverworldHeroProps) => {
  return (
    <img
      {...props}
      className={concatOnlyString(
        className,
        styles.character,
        styles[character],
        styles[direction],
        movement && styles[movement]
      )}
      src={CharacterImg}
      alt={`${character} is ${movement} ${direction}`}
    />
  );
};

export default OverworldHero;
