import { ComponentType, ReactNode } from "react";
import { concatOnlyString } from "../../utils/array";
import styles from "./styles.module.scss";

type OtherProps<Component> = Component extends ComponentType<infer P>
  ? P
  : Component extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Component]
  : any;

type Component = keyof JSX.IntrinsicElements | ComponentType<any>;

export type BoxProps<T extends Component = "div"> = {
  as?: T;
  className?: string;
  children?: ReactNode;
  theme?: "classic" | "red" | "blue" | "green" | "orange" | "purple";
} & OtherProps<T>;

/**
 * A box to display anything you want
 *
 * @param {BoxProps} props
 * @returns
 */
function Box<T extends Component>({
  className,
  as: Component = "div",
  theme = "classic",
  children,
  ...props
}: BoxProps<T>) {
  return (
    <Component
      className={concatOnlyString(className, styles.box, styles[theme])}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </Component>
  );
}

export default Box;
