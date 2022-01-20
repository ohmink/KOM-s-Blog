import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { isMobile } from "react-device-detect";
import * as style from "./{mdx.slog}.module.css";

import Layout from "../../components/layout";
import Seo from "../../components/wrappers/seo";
import CodeBlock from "../../components/wrappers/code-block";

const mdxComponents = {
  pre: CodeBlock,
};

const BlogPost = ({ data }) => {
  return (
    <Layout
      isMobile={isMobile}
      title={data.mdx.frontmatter.title}
      content={data.mdx.internal.content}
    >
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description || "nothin’"}
      />
      <div className={style.post}>
        <h1 className={style.postTitle}>{data.mdx.frontmatter.title}</h1>
        <div className={style.postInfo}>
          <span className={style.postInfoTags}>
            {data.mdx.frontmatter.tag.map((name) => (
              <p key={`post-tag-${name}`}>#{name}</p>
            ))}
          </span>
          <p>{data.mdx.frontmatter.date}</p>
        </div>
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
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
