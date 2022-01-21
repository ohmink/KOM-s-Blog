import React from "react";
import { Link } from "gatsby";

const MobileTagBox = ({ tagName, className, onClick }) => (
  <Link
    to="/"
    id={tagName}
    state={{ tagName: tagName }}
    className={className}
    onClick={onClick}
  >
    #{tagName}
  </Link>
);

export default MobileTagBox;
