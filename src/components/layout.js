import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ThemeProvider from "./themeProvider";
import WebLayout from "./layout/web-layout";
import MobileLayout from "./layout/mobile-layout";

const Layout = ({ children, isMobile, title, content, selectedTag }) => {
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
  const [isLoading, setIsLoading] = useState(true);
  const [deviceState, setDeviceState] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setDeviceState(isMobile);
  }, [isMobile]);

  if (isLoading) return <></>;

  return (
    <ThemeProvider>
      {deviceState ? (
        <MobileLayout
          tags={tags}
          selectedTag={selectedTag}
          children={children}
        />
      ) : (
        <WebLayout
          tags={tags}
          children={children}
          title={title}
          content={content}
          selectedTag={selectedTag}
        />
      )}
    </ThemeProvider>
  );
};

export default Layout;
