import * as React from "react";
import { graphql } from "gatsby";
import { indexMainPosition, indexMainList } from "./index.module.css";
import BasicLayout from "../components/basic-layout";
import PostListItem from "../components/post-list-item";

const BlogPage = ({ location, data }) => {
  const VIEWALL = "view-all";
  const originData = data.allMdx.nodes;
  const [postList, setPostList] = React.useState(originData);

  React.useEffect(() => {
    const state = location.state;
    const tagName = state ? state.tagName : null;

    if (state && tagName) {
      const tagBtns = document.querySelectorAll(".sidebar-tag-li");
      tagBtns.forEach((tagBtn) => {
        tagBtn.style.borderLeftColor =
          "var(--theme-ui-colors-grey-30, #d9d7e0)";
        tagBtn.firstChild.style.color = "black";
      });

      if (tagName === VIEWALL) setPostList(originData);
      else {
        const selectedTag = document.getElementById(tagName);
        selectedTag.style.borderLeftColor = "#45858C";
        selectedTag.firstChild.style.color = "#45858C";

        setPostList(
          originData.filter((post) => post.frontmatter.tag.includes(tagName))
        );
      }
    }
  }, [location, originData]);

  const position = location.state
    ? location.state.tagName === VIEWALL
      ? "Documentation"
      : `Documentation > ${location.state.tagName}`
    : "Documentation";

  return (
    <BasicLayout>
      <p className={indexMainPosition}>{position}</p>
      <ul className={indexMainList}>
        {postList.map((node) => (
          <PostListItem
            key={node.id}
            title={node.frontmatter.title}
            tag={node.frontmatter.tag}
            date={node.frontmatter.date}
            summary={node.frontmatter.summary}
            url={`/post/${node.slug}`}
          />
        ))}
      </ul>
    </BasicLayout>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY년 MM월 DD일")
          tag
          title
          summary
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
