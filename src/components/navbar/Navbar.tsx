"use client";

import { FC, ReactElement } from "react";
// Next.js
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Components
import Container from "../container/Container";
import NavLink from "./_navLink/NavLink";
// Logo
import logo from "../../../public/assets/logo.svg";
// Style
import styles from "./navbar.module.scss";


const Navbar: FC = (): ReactElement => {

  const pathname = usePathname();



  return (


    <nav className={styles.navbar}>
      <Container>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="logo"
          />
        </div>

        <div className={styles.linksContainer}>
          <NavLink route="/">Chrome Extention</NavLink>
          <NavLink route="#">Price Comparison</NavLink>
          <NavLink route="#">Blog</NavLink>
        </div>

      </Container>
    </nav>

  );
};

export default Navbar;