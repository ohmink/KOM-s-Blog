import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import BasicLayout from "../../components/basic-layout";

const BlogPost = ({ data }) => {
  return (
    <BasicLayout originData={null} setPostList={null}>
      <div>
        <h2>{data.mdx.frontmatter.title}</h2>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </BasicLayout>
  );
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
