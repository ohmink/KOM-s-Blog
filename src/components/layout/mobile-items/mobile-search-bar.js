import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";

const MobileSearchBar = ({ className }) => {
  const inputRef = useRef(null);
  const onClick = () => (inputRef.current.value = "");

  return (
    <div className={className}>
      <button type="button" onClick={onClick}>
        <StaticImage
          placeholder="tracedSVG"
          alt="Search"
          src="../../../images/clear_icon.png"
          height={18}
        />
      </button>
      <input ref={inputRef} type="text" placeholder="제목으로 검색해보세요." />
    </div>
  );
};

export default MobileSearchBar;
