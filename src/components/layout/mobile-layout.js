import * as React from "react";
import * as Styles from "./mobile-layout.module.css";
import MobileHeader from "./mobile-items/mobile-header";
import MobileNav from "./mobile-items/mobile-nav";
import MobileSearchBar from "./mobile-items/mobile-search-bar";

const MobileLayout = ({ children, tags }) => {
  return (
    <div className={Styles.mobileLayout}>
      <MobileHeader />
      <MobileNav tags={tags} />
      <main>{children}</main>
      <MobileSearchBar className={Styles.mobileSearchBar} />
    </div>
  );
};

export default MobileLayout;
