import React, { FC, ReactElement } from "react";
// Components
import NavLink from "../_navLink/NavLink";
// Custom Hook
import useWindowWidth from "@/hooks/windowWidth";
// Style
import styles from "./mobileLinks.module.scss";

const MobileLinks: FC = (): ReactElement => {

  const { screenWidth } = useWindowWidth();

  return (
      <div className={styles.mobileMenuContainer}>
        <div className={styles.linksContainer}>
        <div className={styles.links}>
          <NavLink route={screenWidth >= 800 ? "/" : "#"}>Chrome Extention</NavLink>
          <NavLink route="#">Price Comparison</NavLink>
          <NavLink route="#">Blog</NavLink>
        </div>
        </div>
      </div>
  );
};

export default MobileLinks;