export const getNavItems = (postsContent) =>
  postsContent
    .split("\n")
    .filter((line) => line.replaceAll(" ", "")[0] === "#")
    .map((line) => line.split("# "));
