import * as React from "react";
import MobileHeader from "./mobile-items/mobile-header";
import MobileNav from "./mobile-items/mobile-nav";

const MobileLayout = ({ children, tags }) => {
  return (
    <div>
      <MobileHeader />
      <MobileNav tags={tags} />
      <main>{children}</main>
    </div>
  );
};

export default MobileLayout;
