import * as React from "react";
import { graphql } from "gatsby";
import { isMobile } from "react-device-detect";
import { indexMainPosition, indexMainList } from "./index.module.css";
import Seo from "../components/wrappers/seo";
import Layout from "../components/layout";
import PostListItem from "../components/post-list-item";

const BlogPage = ({ location, data }) => {
  const VIEWALL = "view-all";
  const originData = data.allMdx.nodes;
  const [postList, setPostList] = React.useState(originData);
  const [selectedTag, setSelectedTag] = React.useState(VIEWALL);

  React.useEffect(() => {
    const state = location.state;
    const tagName = state ? state.tagName : VIEWALL;

    setSelectedTag(() => tagName);
    setPostList(() =>
      tagName === VIEWALL
        ? originData
        : originData.filter((post) => post.frontmatter.tag.includes(tagName))
    );
  }, [location.state, originData]);

  return (
    <Layout isMobile={isMobile} selectedTag={selectedTag}>
      <Seo />
      <p className={indexMainPosition}>
        Documentation {selectedTag === VIEWALL ? "" : `> ${selectedTag}`}
      </p>
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
    </Layout>
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
