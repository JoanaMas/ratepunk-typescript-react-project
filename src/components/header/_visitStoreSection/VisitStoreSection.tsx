import React, { FC, ReactElement } from "react";
import Image from "next/image";
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
          />

          <StoreCard
            storeImage={appleIcon}
            imageAltText="appleIcon"
            storeName="apple app store"
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