"use client";

import { FC, ReactElement, useState } from "react";
// Next.js
import Image from "next/image";
// Components
import Container from "../container/Container";
import DesktopLinks from "./_desktopLinks/DesktopLinks";
import MobileLinks from "./_mobileLinks/MobileLinks";
// Images
import logo from "../../../public/assets/logo.svg";
import menuIcon from "../../../public/assets/menu.svg";
import closeIcon from "../../../public/assets/close.svg";

// Style
import styles from "./navbar.module.scss";


const Navbar: FC = (): ReactElement => {

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };


  return (

    <nav className={styles.navbar}>

      <Container>
        <div className={styles.navContent}>

          <div className={styles.logo}>
            <Image
              src={logo}
              alt="logo"
            />
          </div>

          {/* Desktop */}
          <DesktopLinks />


          {/* Menu Icon */}
          <div className={styles.menuIcon} onClick={handleMenuOpen}>
            {openMenu
              ? <Image src={closeIcon} alt="closeIcon" />
              : <Image src={menuIcon} alt="menuIcon" />
            }

          </div>

        </div>
      </Container>

      {/* Mobile */}
      <div className={openMenu ? "" : styles.displayNone}>
        <MobileLinks />
      </div>

    </nav>

  );
};

export default Navbar;