import * as React from "react";
import {
  sidebar,
  sidebarTitle,
  sidebarList,
  sidebarListItem,
  sidebarListItemLink,
} from "./sidebar.module.css";
import { Link } from "gatsby";

const SideBar = ({ tags }) => {
  const VIEWALL = "view-all";
  return (
    <nav className={sidebar}>
      <Link to="/" state={{ tagName: VIEWALL }} className={sidebarTitle}>
        DOCUMENTATION ({tags.totalCount})
      </Link>
      <ul className={sidebarList}>
        {tags.group.map((tag) => (
          <li
            key={tag.fieldValue}
            id={tag.fieldValue}
            className={sidebarListItem}
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
