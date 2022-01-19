import React from "react";
import { isMobile } from "react-device-detect";
import { graphql, useStaticQuery } from "gatsby";
import WebLayout from "./layout/web-layout";
import MobileLayout from "./layout/mobile-layout";

const Layout = ({ children, title, content }) => {
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

  return isMobile ? (
    <MobileLayout tags={tags} children={children} />
  ) : (
    <WebLayout
      tags={tags}
      children={children}
      title={title}
      content={content}
    />
  );
};

export default Layout;
