import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import CharactersImg from "../../../../../assets/images/character.png";
import styles from "./styles.module.scss";
import { concatOnlyString } from "../../../utils/array";
import { Heroes } from "../../../utils/types";

type InBattleHeroProps = {
  character?: Heroes;
  isThrowingBall?: boolean;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/**
 *
 * @param {InBattleHeroProps} props
 * @returns
 */
const InBattleHero = ({
  character = "Dawn",
  isThrowingBall = false,
  className,
  ...props
}: InBattleHeroProps) => {
  return (
    <img
      alt={concatOnlyString(character, isThrowingBall && "is throwing ball")}
      {...props}
      className={concatOnlyString(
        className,
        styles[character],
        isThrowingBall && styles.throwing_ball
      )}
      src={CharactersImg}
    />
  );
};

export default InBattleHero;
