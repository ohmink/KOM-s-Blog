import * as React from "react";
import { graphql } from "gatsby";
import BasicLayout from "../components/basic-layout";

const BlogPage = ({ data }) => {
  return <BasicLayout data={data} />;
};

export const query = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          summary
        }
        id
        body
        slug
      }
    }
  }
`;

export default BlogPage;
