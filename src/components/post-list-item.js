import { Link } from "gatsby";
import * as React from "react";
import {
  postListItem,
  postListLink,
  postListItemTitle,
  postListItemInfo,
  postListItemDate,
  postListItemSummary,
} from "./post-list-item.module.css";

const PostListItem = ({ title, tag, date, summary, url }) => {
  return (
    <li className={postListItem}>
      <Link to={url} className={postListLink}>
        <h2 className={postListItemTitle}>{title}</h2>
        <div className={postListItemInfo}>
          <span>
            {tag.map((name) => (
              <p key={`${title}-tag:${name}`}>{`#${name}`}</p>
            ))}
          </span>
          <p className={postListItemDate}>{date}</p>
        </div>
        <p className={postListItemSummary}>{summary}</p>
      </Link>
    </li>
  );
};

export default PostListItem;
