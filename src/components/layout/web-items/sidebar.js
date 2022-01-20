import * as React from "react";
import {
  sidebar,
  sidebarTitle,
  sidebarList,
  sidebarListItem,
  sidebarListItemLink,
} from "./sidebar.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const SideBar = ({ tags }) => {
  const VIEWALL = "view-all";
  return (
    <nav className={sidebar}>
      <Link to="/" state={{ tagName: VIEWALL }} className={sidebarTitle}>
        <StaticImage
          placeholder="tracedSVG"
          alt="Documentation"
          src="../../../images/documentation_icon.png"
          height={20}
        />
        <p>DOCUMENTATION ({tags.totalCount})</p>
      </Link>
      <ul className={sidebarList}>
        {tags.group.map((tag) => (
          <li
            key={`sidebar-tag:${tag.fieldValue}`}
            id={tag.fieldValue}
            className={`${sidebarListItem} sidebar-tag-li`}
          >
            <Link
              to="/"
              state={{ tagName: tag.fieldValue }}
              className={sidebarListItemLink}
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
