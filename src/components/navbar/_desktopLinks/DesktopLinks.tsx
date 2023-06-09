import React, { FC, ReactElement } from "react";
import Image from "next/image";
// Components
import NavLink from "../_navLink/NavLink";
// Style
import styles from "./desktopLinks.module.scss";

const DesktopLinks: FC = (): ReactElement => {
  return (
    <div className={styles.desktopLinksContainer}>
    <div className={styles.links}>
      <NavLink route="/">Chrome Extention</NavLink>
      <NavLink route="#">Price Comparison</NavLink>
      <NavLink route="#">Blog</NavLink>
    </div>
  </div>
  );
};

export default DesktopLinks;