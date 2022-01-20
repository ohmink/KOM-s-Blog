import * as React from "react";
import { mobileTagsContainer, mobileTag } from "./mobile-nav.module.css";
import MobileTagBox from "./mobile-tag-box";

const MobileNav = ({ tags = ["test1", "test2"] }) => {
  return (
    <div className={mobileTagsContainer}>
      {tags.group.map((tag) => (
        <MobileTagBox
          key={`sidebar-tag:${tag.fieldValue}`}
          tagName={tag.fieldValue}
          className={mobileTag}
        />
      ))}
    </div>
  );
};

export default MobileNav;
