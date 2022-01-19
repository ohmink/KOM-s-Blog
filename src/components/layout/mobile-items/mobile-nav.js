import * as React from "react";

const MobileNav = ({ tags = ["test1", "test2"] }) => {
  return (
    <div>
      {tags.group.map((tag) => (
        <li key={`sidebar-tag:${tag.fieldValue}`} id={tag.fieldValue}>
          {tag.fieldValue} ({tag.totalCount})
        </li>
      ))}
    </div>
  );
};

export default MobileNav;
