export const formatIntegerBetween = (
  number: number,
  min: number,
  max: number
) => {
  if (number < min) {
    return min;
  } else if (number > max) {
    return max;
  } else {
    return Math.floor(number);
  }
};
