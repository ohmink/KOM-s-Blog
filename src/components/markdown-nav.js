import * as React from "react";
import {
  markdownNav,
  markdownNavH1,
  markdownNavH2,
  markdownNavH3,
  markdownNavH4,
} from "./markdown-nav.module.css";
import { getNavItems } from "../utils/markdown-parser";

const MarkdownNav = ({ title, content }) => {
  const [headings, setHeadings] = React.useState(null);
  React.useEffect(() => {
    if (content) {
      const headings = [
        ...document.querySelectorAll("h1"),
        ...document.querySelectorAll("h2"),
        ...document.querySelectorAll("h3"),
        ...document.querySelectorAll("h4"),
      ];
      setHeadings(headings);
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
    const hContent = e.target.innerHTML;

    if (hContent) {
      const $target = headings.find(
        (heading) => heading.innerHTML === hContent
      );
      $target.scrollIntoView();
    }
  }

  return (
    <nav className={markdownNav}>
      <ul>
        <li className={markdownNavH1}>
          <button onClick={clickHeading} onKeyDown={clickHeading}>
            {title}
          </button>
        </li>
        {headingList.map((obj) => (
          <li className={obj[0]} key={`markdown-nav:${obj[1]}`}>
            <button onClick={clickHeading} onKeyDown={clickHeading}>
              {obj[1]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MarkdownNav;
