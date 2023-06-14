import React, { FC, ReactElement } from "react";
// Components
import Container from "@/components/container/Container";
import StoreCard from "./_storeCard/StoreCard";
// Images
import chromeIcon from "../../../../public/assets/chrome.svg";
import appleIcon from "../../../../public/assets/apple.svg";
// Styles
import styles from "./visitStoreSection.module.scss";

const VisitStoreSection: FC = (): ReactElement => {
  return (
    <section className={styles.visitStoreSection}>
      <Container>

        <div className={styles.storeCardsContainer}>

          <StoreCard
            storeImage={chromeIcon}
            imageAltText="chromeIcon"
            storeName="chrome web store"
            linkURL="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
          />

          <StoreCard
            storeImage={appleIcon}
            imageAltText="appleIcon"
            storeName="apple app store"
            linkURL="https://apps.apple.com/app/ratepunk/id1607823726"
          />

          <div className={styles.rating}>
            <p>★★★★★<span>Chrome Store Reviews</span></p>
          </div>

        </div>


      </Container>
    </section>
  );
};

export default VisitStoreSection;