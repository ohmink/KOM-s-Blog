import * as React from "react";
import {
  markdownNav,
  markdownNavH1,
  markdownNavH2,
  markdownNavH3,
  markdownNavH4,
} from "./markdown-nav.module.css";
import { getNavItems } from "../utils/markdown-parser";

const MarkdownNav = ({ title, content, mainClassName }) => {
  const [headings, setHeadings] = React.useState(null);
  React.useEffect(() => {
    if (content && mainClassName) {
      const main = document.querySelector(`.${mainClassName}`);
      const list = [...main.firstChild.childNodes].filter(
        (node) =>
          node.tagName === "H1" ||
          node.tagName === "H2" ||
          node.tagName === "H3" ||
          node.tagName === "H4"
      );

      setHeadings(list);
    }
  }, [content]);

  if (!content) return <ul className={markdownNav}></ul>;

  const headingList = getNavItems(content).map((obj) => {
    let [hCount, hContent] = obj;
    hContent = hContent.replace("\r", "");

    if (hCount.length === 1) return [markdownNavH2, hContent];
    else if (hCount.length === 2) return [markdownNavH3, hContent];
    else if (hCount.length === 3) return [markdownNavH4, hContent];

    return [markdownNavH1, hContent];
  });

  function clickHeading(e) {
    if (e.target.id === "markdown_nav_top") {
      headings[0].scrollIntoView();
    } else {
      const targetIdx = e.target.id.replace("markdown_nav_", "");
      const $target = headings[Number(targetIdx) + 1];

      $target.scrollIntoView();
    }
  }

  return (
    <nav className={markdownNav}>
      <ul>
        <li className={markdownNavH1}>
          <button
            id={`markdown_nav_top`}
            onClick={clickHeading}
            onKeyDown={clickHeading}
          >
            {title}
          </button>
        </li>
        {headingList.map((obj, idx) => (
          <li className={obj[0]} key={`markdown-nav-key:${idx}`}>
            <button
              id={`markdown-nav-${idx}`}
              onClick={clickHeading}
              onKeyDown={clickHeading}
            >
              {obj[1]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MarkdownNav;
