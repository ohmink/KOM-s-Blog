import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  post,
  postTitle,
  postInfo,
  postInfoTags,
  postInfoDate,
} from "./{mdx.slog}.module.css";
import BasicLayout from "../../components/basic-layout";

const BlogPost = ({ data }) => {
  return (
    <BasicLayout
      title={data.mdx.frontmatter.title}
      content={data.mdx.internal.content}
    >
      <div className={post}>
        <h1 className={postTitle}>{data.mdx.frontmatter.title}</h1>
        <div className={postInfo}>
          <span className={postInfoTags}>
            {data.mdx.frontmatter.tag.map((name) => (
              <p key={`post-tag-${name}`}>#{name}</p>
            ))}
          </span>
          <p className={postInfoDate}>{data.mdx.frontmatter.date}</p>
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
