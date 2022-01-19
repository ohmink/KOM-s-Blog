import { Link } from "gatsby";
import * as React from "react";
import * as style from "./post-list-item.module.css";

const PostListItem = ({ title, tag, date, summary, url }) => {
  return (
    <li className={style.postListItem}>
      <Link to={url} className={style.postListLink}>
        <h2 className={style.postListItemTitle}>{title}</h2>
        <div className={style.postListItemInfo}>
          <span>
            {tag.map((name) => (
              <p key={`${title}-tag:${name}`}>{`#${name}`}</p>
            ))}
          </span>
          <p className={style.postListItemDate}>{date}</p>
        </div>
        <p className={style.postListItemSummary}>{summary}</p>
      </Link>
    </li>
  );
};

export default PostListItem;
