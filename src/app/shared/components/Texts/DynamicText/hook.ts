import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useMemo,
  useState,
} from "react";

const useHook = (
  children: boolean | ReactChild | ReactFragment | ReactPortal | null,
  onTextDisplayEnd?: Function
) => {
  const [displayedText, setDisplayedText] = useState("");
  const completeText = useMemo(
    () => (typeof children === "string" ? children : ""),
    [children]
  );

  useEffect(() => {
    let textLength = 0;

    const interval = setInterval(() => {
      textLength += 2.5;
      setDisplayedText(completeText.substring(0, textLength));
      if (textLength > completeText.length) {
        clearInterval(interval);
        if (typeof onTextDisplayEnd === "function") {
          onTextDisplayEnd();
        }
      }
    }, 50);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completeText]);

  return displayedText;
};

const hook = useHook;
export default hook;
