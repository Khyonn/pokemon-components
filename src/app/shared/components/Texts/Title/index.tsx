import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

type TitleProps = { children?: string } & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  "children"
>;

/**
 * Display given text with the style of Pokemon Title
 * @param {TitleProps} param
 * @returns
 */
const Title = ({ children = "", className, ...props }: TitleProps) => {
  return typeof children === "string" ? (
    <span
      className={[className, styles.title].join(" ")}
      data-content={children}
      {...props}
    >
      {children}
    </span>
  ) : (
    <></>
  );
};

export default Title;
