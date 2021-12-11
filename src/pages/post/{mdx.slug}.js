import * as React from "react";
import { graphql } from "gatsby";
import BasicLayout from "../../components/basic-layout";

const BlogPost = ({ data }) => {
  return <BasicLayout data={data} />;
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        summary
      }
      body
    }
  }
`;

export default BlogPost;
