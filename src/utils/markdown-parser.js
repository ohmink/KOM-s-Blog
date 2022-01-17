export const getNavItems = (postsContent, MarkdownStyle) =>
  postsContent
    .split("\n")
    .filter((line) => line.replaceAll(" ", "")[0] === "#")
    .map((line) => {
      let [hCount, hContent] = line.split("# ");

      hContent = hContent.replace("\r", "");

      if (hCount.length === 1) return [MarkdownStyle.markdownNavH2, hContent];
      else if (hCount.length === 2)
        return [MarkdownStyle.markdownNavH3, hContent];
      else if (hCount.length === 3)
        return [MarkdownStyle.markdownNavH4, hContent];

      return [MarkdownStyle.markdownNavH1, hContent];
    });
