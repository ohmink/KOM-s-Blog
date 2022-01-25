import * as React from "react";
import * as Styles from "./web-layout.module.css";
import Header from "./web-items/header";
import SideBar from "./web-items/sidebar";
import MarkdownNav from "./web-items/markdown-nav";
import Search from "./web-items/search-modal";
import { themeStateContext } from "../themeProvider";

const WebLayout = (props) => {
  const { children, tags, title, content, selectedTag, GlobalStyles } = props;
  const searchRef = React.useRef();
  const mainRef = React.useRef();
  const theme = React.useContext(themeStateContext);

  React.useEffect(() => {
    if (theme.mode === "dark") document.body.classList.add(GlobalStyles.dark);
    else document.body.classList.remove(GlobalStyles.dark);
  }, [theme.mode]);

  return (
    <div className={Styles.webLayout}>
      <Search ref={searchRef} />
      <Header searchRef={searchRef} />
      <div className={Styles.webLayoutTemplate}>
        <SideBar tags={tags} selectedTag={selectedTag} />
        <main ref={mainRef} className={Styles.webLayoutMain}>
          {children}
        </main>
        <MarkdownNav mainRef={mainRef} title={title} content={content} />
      </div>
    </div>
  );
};

export default WebLayout;
