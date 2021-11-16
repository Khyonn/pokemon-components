import { useMemo } from "react";
import { formatIntegerBetween } from "../../../utils/number";

const useLifeBarWithDetails = (
  rawHP: number,
  rawMaxHP: number,
  rawXP: number,
  rawMaxXP: number
) => {
  const maxHP = useMemo(() => formatIntegerBetween(rawMaxHP, 1, Infinity), [
    rawMaxHP,
  ]);
  const hp = useMemo(() => formatIntegerBetween(rawHP, 0, maxHP), [
    rawHP,
    maxHP,
  ]);
  const hpPercent = useMemo(() => Math.floor((hp * 100) / maxHP), [hp, maxHP]);

  const maxXP = useMemo(() => formatIntegerBetween(rawMaxXP, 0, Infinity), [
    rawMaxXP,
  ]);
  const xp = useMemo(() => formatIntegerBetween(rawXP, 0, maxXP), [
    rawXP,
    maxXP,
  ]);
  const xpPercent = useMemo(() => Math.floor((xp * 100) / maxXP), [xp, maxXP]);

  return {
    hp,
    maxHP,
    hpPercent,
    maxXP,
    xp,
    xpPercent,
  };
};

const hook = useLifeBarWithDetails;
export default hook;
