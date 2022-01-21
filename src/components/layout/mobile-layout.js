import * as React from "react";
import * as Styles from "./mobile-layout.module.css";
import MobileHeader from "./mobile-items/mobile-header";
import MobileNav from "./mobile-items/mobile-nav";

const MobileLayout = ({ children, tags, selectedTag }) => {
  return (
    <div className={Styles.mobileLayout}>
      <MobileHeader />
      <MobileNav tags={tags} selectedTag={selectedTag} />
      <main>{children}</main>
    </div>
  );
};

export default MobileLayout;
