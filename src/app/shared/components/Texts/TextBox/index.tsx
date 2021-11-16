import { concatOnlyString } from "../../../utils/array";
import Box, { BoxProps } from "../../Box";
import styles from "./styles.module.scss";

type TextBoxProps = BoxProps;

/**
 * A box to display text
 *
 * @param {TextBoxProps} props
 * @returns
 */
const TextBox = ({ className, children, ...props }: TextBoxProps) => {
  return (
    <Box className={concatOnlyString(className, styles["text-box"])} {...props}>
      <div className={styles.content}>{children}</div>
    </Box>
  );
};

export default TextBox;
