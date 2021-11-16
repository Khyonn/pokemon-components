import { useMemo } from "react";
import { getDayTime } from "../../../utils/time";

const useGround = () => {
  return useMemo(() => getDayTime(), []);
};
const hook = useGround;
export default hook;
