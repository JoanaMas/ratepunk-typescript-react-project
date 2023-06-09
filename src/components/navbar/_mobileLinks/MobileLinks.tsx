import React, { FC, ReactElement } from "react";
// Components
import NavLink from "../_navLink/NavLink";
// Style
import styles from "./mobileLinks.module.scss";

const MobileLinks: FC = (): ReactElement => {
  return (
    <div className={styles.mobileMenuContainer}>
    <div className={styles.links}>
      <NavLink route="/">Chrome Extention</NavLink>
      <NavLink route="#">Price Comparison</NavLink>
      <NavLink route="#">Blog</NavLink>
    </div>
  </div>
  );
};

export default MobileLinks;