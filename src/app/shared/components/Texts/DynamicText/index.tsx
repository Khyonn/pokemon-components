import { DetailedHTMLProps, HTMLAttributes } from "react";
import StaticText from "../StaticText";
import useHook from "./hook";

type DynamicTextProps = {
  onTextDisplayEnd?: Function;
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

/**
 * Display given text letter by letter with the style of Pokemon text
 * @param {DynamicTextProps} param
 * @returns
 */
const DynamicText = ({
  children = "",
  onTextDisplayEnd,
  ...props
}: DynamicTextProps) => {
  return (
    <StaticText {...props}>{useHook(children, onTextDisplayEnd)}</StaticText>
  );
};

export default DynamicText;
