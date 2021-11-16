import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { concatOnlyString } from "../../../utils/array";
import styles from "./styles.module.scss";
import PokemonImg from "../../../../../assets/images/pokemons-g1.png";

export type PokemonSide = "front_1" | "front_2" | "back_1" | "back_2";
export type PokemonNumber = number;
type PokemonProps = {
  side?: PokemonSide;
  number?: PokemonNumber;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/**
 * Display the pokemon in different state. You can choose
 *
 * - the number of the Pokemon (1 - 151)
 *
 * - the side
 *
 * @param {PokemonProps} props
 * @returns
 */
const Pokemon = ({
  className,
  side = "front_1",
  number = 1,
  ...props
}: PokemonProps) => {
  return (
    <img
      className={concatOnlyString(
        className,
        styles.pokemon,
        styles[`n_${number}_${side}`]
      )}
      src={PokemonImg}
      alt={`Pokemon n°${number}`}
      {...props}
    />
  );
};

export default Pokemon;
