import React, { FC, ReactElement, useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";
// Components
import NavLink from "../_navLink/NavLink";
// Style
import styles from "./mobileLinks.module.scss";

const MobileLinks: FC = (): ReactElement => {

    // WINDO WIDTH ON RESIZE LOGIC
    const [windowWidth] = useWindowSize();
    const [screenWidth, setScreenWidth] = useState(0);
  
    useEffect(() => {
      setScreenWidth(windowWidth);
    }, [windowWidth]);

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