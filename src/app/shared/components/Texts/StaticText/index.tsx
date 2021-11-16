import styles from "./styles.module.scss";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { concatOnlyString } from "../../../utils/array";

/**
 * Display given text with the style of Pokemon text
 * @param {DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>} param
 * @returns
 */
const StaticText = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
  return (
    <span className={concatOnlyString(styles.text, className)} {...props}>
      {typeof children === "string"
        ? children.split("\n").reduce((acc, current, index) => {
            return (
              <>
                {acc}
                {!!index && <br />}
                {current}
              </>
            );
          }, <></>)
        : children}
    </span>
  );
};

export default StaticText;
