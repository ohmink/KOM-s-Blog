import { Link } from "gatsby";
import * as React from "react";
import * as Styles from "./post-list-item.module.css";
import { themeStateContext } from "./themeProvider";

const PostListItem = ({ title, tag, date, summary, url }) => {
  const theme = React.useContext(themeStateContext);
  const titleRef = React.useRef();
  const tagsRef = React.useRef();
  const dateRef = React.useRef();

  React.useEffect(() => {
    titleRef.current.style.color = theme.colors.postTitle;
    tagsRef.current.style.color = theme.colors.postTags;
    dateRef.current.style.color = theme.colors.postDate;
  }, [theme.mode]);

  return (
    <li className={Styles.postListItem}>
      <Link to={url} className={Styles.postListLink}>
        <h2 className={Styles.postListItemTitle} ref={titleRef}>
          {title}
        </h2>
        <div className={Styles.postListItemInfo}>
          <span ref={tagsRef}>
            {tag.map((name) => (
              <p key={`${title}-tag:${name}`}>{`#${name}`}</p>
            ))}
          </span>
          <p ref={dateRef}>{date}</p>
        </div>
        <p className={Styles.postListItemSummary}>{summary}</p>
      </Link>
    </li>
  );
};

export default PostListItem;
