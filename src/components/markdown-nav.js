import * as React from "react";
import { markdownNav } from "./markdown-nav.module.css";

const MarkdownNav = ({ data }) => {
  return <nav className={markdownNav}>test{data ? data : null}</nav>;
};

export default MarkdownNav;
