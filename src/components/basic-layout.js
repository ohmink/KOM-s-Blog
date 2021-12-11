import * as React from "react";
import {
  basicLayout,
  basicLayoutTemplate,
  postMain,
} from "./basic-layout.module.css";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Header from "./header";
import SideBar from "../components/sidebar";
import PostListItem from "../components/post-list-item";
import MarkdownNav from "../components/markdown-nav";

const BasicLayout = ({ data }) => {
  return (
    <div className={basicLayout}>
      <Header />
      <div className={basicLayoutTemplate}>
        <SideBar />
        <main className={postMain}>
          {data.allMdx ? (
            <ul>
              {data.allMdx.nodes.map((node) => (
                <PostListItem
                  id={node.id}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  summary={node.frontmatter.summary}
                  url={`/post/${node.slug}`}
                />
              ))}
            </ul>
          ) : (
            <div>
              <h2>{data.mdx.frontmatter.title}</h2>
              <p>{data.mdx.frontmatter.date}</p>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
          )}
        </main>
        <MarkdownNav />
      </div>
    </div>
  );
};

export default BasicLayout;
