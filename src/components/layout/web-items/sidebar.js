import * as React from "react";
import * as Styles from "./sidebar.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const SideBar = ({ tags, selectedTag }) => {
  const VIEWALL = "view-all";
  const ulRef = React.useRef();

  const reset = () => {
    ulRef.current.childNodes.forEach((node) => {
      node.style.borderLeftColor = "var(--theme-ui-colors-grey-30, #d9d7e0)";
      node.firstChild.style.color = "black";
    });
  };

  React.useEffect(() => {
    if (selectedTag === VIEWALL) {
      reset();
    } else {
      const currentTag = [...ulRef.current.childNodes].find(
        (node) => node.id === selectedTag
      );

      if (currentTag) {
        currentTag.style.borderLeftColor = "#45858C";
        currentTag.firstChild.style.color = "#45858C";
      }
    }
  }, [tags, selectedTag]);

  return (
    <nav className={Styles.sidebar}>
      <Link to="/" state={{ tagName: VIEWALL }} className={Styles.sidebarTitle}>
        <StaticImage
          placeholder="tracedSVG"
          alt="Documentation"
          src="../../../images/documentation_icon.png"
          height={20}
        />
        <p>DOCUMENTATION ({tags.totalCount})</p>
      </Link>
      <ul className={Styles.sidebarList} ref={ulRef}>
        {tags.group.map((tag) => (
          <li
            key={`sidebar-tag:${tag.fieldValue}`}
            id={tag.fieldValue}
            className={Styles.sidebarListItem}
          >
            <Link
              to="/"
              state={{ tagName: tag.fieldValue }}
              className={Styles.sidebarListItemLink}
              onClick={reset}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
