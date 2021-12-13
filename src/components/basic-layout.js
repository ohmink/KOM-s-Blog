import * as React from "react";
import {
  basicLayout,
  basicLayoutTemplate,
  postMain,
} from "./basic-layout.module.css";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./header";
import SideBar from "../components/sidebar";
import MarkdownNav from "../components/markdown-nav";

const BasicLayout = ({ children, title, content }) => {
  const tags = useStaticQuery(graphql`
    query SeletByTag {
      allMdx {
        totalCount
        group(field: frontmatter___tag) {
          totalCount
          fieldValue
        }
      }
    }
  `).allMdx;

  return (
    <div className={basicLayout}>
      <Header />
      <div className={basicLayoutTemplate}>
        <SideBar tags={tags} />
        <main className={postMain}>{children}</main>
        <MarkdownNav title={title} content={content} />
      </div>
    </div>
  );
};

export default BasicLayout;
