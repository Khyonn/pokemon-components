import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import LectureImg from "../../../../../assets/images/lecture.png";
import CharactersImg from "../../../../../assets/images/character.png";
import styles from "./styles.module.scss";
import { concatOnlyString } from "../../../utils/array";
import { Heroes } from "../../../utils/types";

type CharacterProps = {
  character?: "Oak" | Heroes;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/**
 *
 * @param {CharacterProps} props
 * @returns
 */
const StaticCharacter = ({
  character = "Oak",
  className,
  ...props
}: CharacterProps) => {
  return (
    <img
      alt={character}
      {...props}
      className={concatOnlyString(className, styles[character])}
      src={character === "Oak" ? LectureImg : CharactersImg}
    />
  );
};

export default StaticCharacter;
