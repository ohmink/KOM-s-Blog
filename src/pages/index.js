import * as React from "react";
import { graphql } from "gatsby";
import BasicLayout from "../components/basic-layout";
import PostListItem from "../components/post-list-item";

const BlogPage = ({ location, data }) => {
  const VIEWALL = "view-all";
  const originData = data.allMdx.nodes;
  const [postList, setPostList] = React.useState(originData);

  React.useEffect(() => {
    if (location.state.tagName === VIEWALL) setPostList(originData);
    else if (location.state.tagName) {
      const selectedList = originData.filter((post) =>
        post.frontmatter.tag.includes(location.state.tagName)
      );
      setPostList(selectedList);
    }
  }, [location.state.tagName, originData]);

  return (
    <BasicLayout>
      <ul>
        {postList.map((node) => (
          <PostListItem
            key={node.id}
            title={node.frontmatter.title}
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
          date(formatString: "MMMM D, YYYY")
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
