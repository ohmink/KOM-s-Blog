import React, { useEffect, useState } from "react";
import * as Styles from "./layout.module.css";
import { graphql, useStaticQuery } from "gatsby";
import { themeStateContext } from "./themeProvider";
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
  const theme = React.useContext(themeStateContext);

  useEffect(() => {
    setIsLoading(false);
    setDeviceState(isMobile);

    if (theme.mode === "dark") document.body.classList.add(Styles.dark);
    else document.body.classList.remove(Styles.dark);
  }, [isMobile, theme]);

  if (isLoading) return <></>;

  return deviceState ? (
    <MobileLayout tags={tags} selectedTag={selectedTag} children={children} />
  ) : (
    <WebLayout
      tags={tags}
      children={children}
      title={title}
      content={content}
      selectedTag={selectedTag}
    />
  );
};

export default Layout;
