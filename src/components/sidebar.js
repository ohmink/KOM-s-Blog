import * as React from "react";
import {
  sidebar,
  sidebarTitle,
  sidebarList,
  sidebarListItem,
} from "./sidebar.module.css";

const SideBar = () => {
  return (
    <nav className={sidebar}>
      <span>
        <p className={sidebarTitle}>DOCUMENTATION</p>
      </span>
      <ul className={sidebarList}>
        <li className={sidebarListItem}>test1</li>
        <li>test2</li>
      </ul>
    </nav>
  );
};

export default SideBar;
