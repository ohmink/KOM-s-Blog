import { Link } from "gatsby";
import * as React from "react";
import { postListItem } from "./post-list-item.module.css";

const PostListItem = ({ title, date, summary, url }) => {
  return (
    <Link to={url} className={postListItem}>
      <h2>{title}</h2>
      <p>{date}</p>
      <h4>{summary}</h4>
    </Link>
  );
};

export default PostListItem;
