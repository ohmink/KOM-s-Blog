import * as React from "react";
import * as Styles from "./mobile-layout.module.css";
import MobileHeader from "./mobile-items/mobile-header";
import MobileNav from "./mobile-items/mobile-nav";
import { themeStateContext } from "../themeProvider";

const MobileLayout = (props) => {
  const { children, tags, selectedTag, GlobalStyles } = props;
  const theme = React.useContext(themeStateContext);

  React.useEffect(() => {
    if (theme.mode === "dark") document.body.classList.add(GlobalStyles.dark);
    else document.body.classList.remove(GlobalStyles.dark);
  }, [theme.mode]);

  return (
    <div className={Styles.mobileLayout}>
      <MobileHeader />
      <MobileNav tags={tags} selectedTag={selectedTag} />
      <main>{children}</main>
    </div>
  );
};

export default MobileLayout;
