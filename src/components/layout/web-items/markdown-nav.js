import * as React from "react";
import * as MarkdownStyle from "./markdown-nav.module.css";
import { getNavItems } from "../../../utils/markdown-parser";

const MarkdownNav = ({ mainRef, title, content }) => {
  const [headings, setHeadings] = React.useState(null);

  React.useEffect(() => {
    const tagNames = ["H1", "H2", "H3", "H4"];
    const nodes = mainRef.current.firstChild.childNodes;
    setHeadings(() =>
      [...nodes].filter((node) => tagNames.includes(node.tagName))
    );
  }, [mainRef]);

  if (!content) return <ul className={MarkdownStyle.markdownNav}></ul>;

  const headingList = getNavItems(content, MarkdownStyle);

  function clickHeading(e) {
    const shortcutBtn = e.target.closest("button");

    if (shortcutBtn.id === "markdown_nav_top") {
      headings[0].scrollIntoView();
    } else {
      const targetIdx = shortcutBtn.id.replace("markdown-nav-", "");
      const $target = headings[Number(targetIdx) + 1];

      $target.scrollIntoView();
    }
  }

  return (
    <nav className={MarkdownStyle.markdownNav}>
      <ul>
        <li className={MarkdownStyle.markdownNavH1}>
          <button
            id={`markdown_nav_top`}
            onClick={clickHeading}
            onKeyDown={clickHeading}
          >
            <span>{title}</span>
          </button>
        </li>
        {headingList.map((obj, idx) => (
          <li className={obj[0]} key={`markdown-nav-key:${idx}`}>
            <button
              id={`markdown-nav-${idx}`}
              onClick={clickHeading}
              onKeyDown={clickHeading}
            >
              <span>{obj[1]}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MarkdownNav;
