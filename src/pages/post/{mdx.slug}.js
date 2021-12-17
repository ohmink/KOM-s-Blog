import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  post,
  postTitle,
  postInfo,
  postInfoTags,
} from "./{mdx.slog}.module.css";
import SEO from "../../components/seo";
import BasicLayout from "../../components/basic-layout";

const BlogPost = ({ data }) => {
  return (
    <BasicLayout
      title={data.mdx.frontmatter.title}
      content={data.mdx.internal.content}
    >
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description || "nothin’"}
      />
      <div className={post}>
        <h1 className={postTitle}>{data.mdx.frontmatter.title}</h1>
        <div className={postInfo}>
          <span className={postInfoTags}>
            {data.mdx.frontmatter.tag.map((name) => (
              <p key={`post-tag-${name}`}>#{name}</p>
            ))}
          </span>
          <p>{data.mdx.frontmatter.date}</p>
        </div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </BasicLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        description
        title
        date(formatString: "YYYY년 MM월 DD일")
        tag
      }
      internal {
        content
      }
    }
  }
`;

export default BlogPost;
