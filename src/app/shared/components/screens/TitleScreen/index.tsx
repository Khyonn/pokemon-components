import { DetailedHTMLProps, HTMLAttributes } from "react";
import { concatOnlyString } from "../../../utils/array";
import Title from "../../Texts/Title";
import styles from "./styles.module.scss";

export type TitleScreenProps = {
  title: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const TitleScreen = ({
  title,
  children,
  className,
  ...props
}: TitleScreenProps) => {
  return (
    <div {...props} className={concatOnlyString(className, styles.wrapper)}>
      <h1 className={styles.title}>
        <Title>{title}</Title>
      </h1>
      {children}
    </div>
  );
};

export default TitleScreen;
