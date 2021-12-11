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
      <p className={sidebarTitle}>Code Story</p>
      <ul className={sidebarList}>
        <li>test1</li>
        <li>test2</li>
      </ul>
    </nav>
  );
};

export default SideBar;
