export const concatOnlyString = (
  ...array: (string | false | undefined | null | { [key: string]: boolean })[]
) => {
  return array
    .filter((e) => e)
    .map((e) =>
      typeof e === "object"
        ? Object.entries(e as { [key: string]: boolean })
            .filter(([, bool]) => bool)
            .map(([val]) => val)
            .join(" ")
        : e
    )
    .join(" ");
};
