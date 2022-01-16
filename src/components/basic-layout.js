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
import Search from "./search-modal";

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
  const searchRef = React.useRef(null);

  return (
    <div className={basicLayout}>
      <Search ref={searchRef} />
      <Header searchRef={searchRef} />
      <div className={basicLayoutTemplate}>
        <SideBar tags={tags} />
        <main className={postMain}>{children}</main>
        <MarkdownNav title={title} content={content} mainClassName={postMain} />
      </div>
    </div>
  );
};

export default BasicLayout;
