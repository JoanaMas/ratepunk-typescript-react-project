"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";
// Components
import Container from "../container/Container";
import NavLink from "../navbar/_navLink/NavLink";
// Images
import logoImage from "../../../public/assets/logo.svg";
import emailIcon from "../../../public/assets/email-footer.svg";
import instagramIcon from "../../../public/assets/instagram.svg";
import facebookIcon from "../../../public/assets/facebook.svg";
import linkedinIcon from "../../../public/assets/linkedin.svg";
import twitterIcon from "../../../public/assets/twitter.svg";
import tiktokIcon from "../../../public/assets/tiktok.svg";

// Styles
import styles from "./footer.module.scss";

const Footer: FC = (): ReactElement => {

    // WINDO WIDTH ON RESIZE LOGIC
    const [windowWidth] = useWindowSize();
    const [screenWidth, setScreenWidth] = useState(0);
  
    useEffect(() => {
      setScreenWidth(windowWidth);
    }, [windowWidth]);

  return (
    <footer className={styles.footer}>
      <Container>

        <div className={styles.footerContentContainer}>

          <div className={styles.about}>
            <Image src={logoImage} alt="logo" width={100} />
            <p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you`re getting the best deal!</p>
            <span className={screenWidth >= 800 ? "" : styles.displayNone}>© 2021 Ratepunk. All Rights Reserved.</span>
          </div>


          <div className={styles.links}>
            <h4>QUICK LINKS</h4>
            <NavLink route="#">Price Comparison</NavLink>
            <NavLink route="#">Chrome Extension</NavLink>
            <NavLink route="#">How It Works</NavLink>
            <NavLink route="#">Ratepunk Blog</NavLink>
            <NavLink route="#">Privacy Policy</NavLink>
          </div>

          <div className={styles.contact}>
            <div>
              <h4>CONTACT</h4>
              <div className={styles.email}>
                <Image src={emailIcon} alt="emailIcon" width={15} />
                <a href="mailto: hi@ratepunk.com">hi@ratepunk.com</a>
              </div>
            </div>

            <div>
              <h4>SOCIAL</h4>
              <div className={styles.socialLinks}>
                <div className={styles.link}><Image src={instagramIcon} alt="instagramIcon" /></div>
                <div className={styles.link}><Image src={facebookIcon} alt="facebookIcon" /></div>
                <div className={styles.link}><Image src={linkedinIcon} alt="linkedinIcon" /></div>
                <div className={styles.link}><Image src={twitterIcon} alt="twitterIcon" /></div>
                <div className={styles.link}><Image src={tiktokIcon} alt="tiktokIcon" /></div>
              </div>
            </div>
          </div>

          <span className={screenWidth <= 800 ? "" : styles.displayNone}>© 2021 Ratepunk. All Rights Reserved.</span>



        </div>

      </Container>
    </footer>
  );
};

export default Footer;