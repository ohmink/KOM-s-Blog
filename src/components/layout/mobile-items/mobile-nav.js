import * as React from "react";
import { mobileTagsContainer, mobileTag } from "./mobile-nav.module.css";
import MobileTagBox from "./mobile-tag-box";

const MobileNav = ({ tags, selectedTag }) => {
  const VIEWALL = "view-all";
  const tagsRef = React.useRef();

  const reset = () => {
    tagsRef.current.childNodes.forEach((node) => {
      node.style.backgroundColor = "rgba(0,0,0,0)";
      node.style.color = "#1f818c";
    });
  };

  React.useEffect(() => {
    const currentTag = [...tagsRef.current.childNodes].find(
      (node) => node.id === selectedTag
    );

    if (currentTag) {
      currentTag.style.backgroundColor = "#45858C";
      currentTag.style.color = "white";
    }
  }, [tags, selectedTag]);

  return (
    <div ref={tagsRef} className={mobileTagsContainer}>
      <MobileTagBox tagName={VIEWALL} className={mobileTag} onClick={reset} />
      {tags.group.map((tag) => (
        <MobileTagBox
          key={`sidebar-tag:${tag.fieldValue}`}
          tagName={tag.fieldValue}
          className={mobileTag}
          onClick={reset}
        />
      ))}
    </div>
  );
};

export default MobileNav;
