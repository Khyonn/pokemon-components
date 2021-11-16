import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from "react";
import { concatOnlyString } from "../../../utils/array";
import DynamicText from "../../Texts/DynamicText";
import TextBox from "../../Texts/TextBox";
import styles from "./styles.module.scss";

type LectureScreenProps = {
  textToDisplay?: string;
  onTextDisplayEnd?: Function;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Display a lecture screen (good for introductions)
 *
 * Behaviour :
 *
 * - the textbox appear
 *
 * - the text is displayed
 *
 * - the event listener 'onTextDisplayEnd' is called (wich allows you to display another text or go to another screen)
 *
 * @param {LectureScreenProps} props
 * @returns
 */
const LectureScreen = ({
  textToDisplay,
  onTextDisplayEnd,
  className,
  children,
  ...props
}: LectureScreenProps) => {
  const [appeared, setAppeared] = useState(false);

  return (
    <div {...props} className={concatOnlyString(className, styles.wrapper)}>
      <div className={concatOnlyString(styles.main_content)}>{children}</div>
      {textToDisplay ? (
        <TextBox
          className={styles.textbox}
          onAnimationEnd={() => setAppeared(true)}
        >
          {appeared && (
            <DynamicText onTextDisplayEnd={onTextDisplayEnd}>
              {textToDisplay}
            </DynamicText>
          )}
        </TextBox>
      ) : (
        <div className={styles.textbox_skeleton}></div>
      )}
    </div>
  );
};

export default LectureScreen;
