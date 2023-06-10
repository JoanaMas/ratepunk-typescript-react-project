"use client";

import React, { FC, ReactElement } from "react";
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";
// Components
import Container from "@/components/container/Container";
import OneStepCard from "./_oneStepCard/OneStepCard";
// Images
import emailIcon from "../../../../public/assets/email.svg";
import inviteLetterIcon from "../../../../public/assets/invite.svg";
import collectCoinIcon from "../../../../public/assets/collect-coins.svg";
import voucherIcon from "../../../../public/assets/voucher.svg";
// Styles
import styles from "./referFriendsSection.module.scss";

const ReferFriendsSection: FC = (): ReactElement => {

  const [windowWidth] = useWindowSize();

  return (
    <section className={styles.referFriendsSection}>
      <Container>
        <div className={styles.contentContainer}>

          <div className={styles.referFriendsFormContainer}>
            <div className={styles.form}>

              <div className={styles.headingContainer}>
                <h1>REFER FRIENDS AND GET REWARDS</h1>
                <p>Refer your friends to us and earn hotel booking vouchers. We`ll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
              </div>

              <div className={styles.inputContainer}>
                <span>Error state</span>
                <div className={styles.inputWithIcon}>
                  <input type="email" placeholder="Enter your email address" />
                  <div className={styles.emailIcon}><Image src={emailIcon} alt="emailIcon" width={15} /></div>
                </div>
                <button>Get Referral Link</button>
              </div>

                <div className={styles.limits}>
                  <p>Limits on max rewards apply.</p>
                </div>


            </div>
          </div>

          <div className={styles.referFriendsStepsContainer}>

            <OneStepCard 
            imageSource={inviteLetterIcon}
            imageAltText="inviteLetterIcon"
            cardStepNumber={1}
            cardHeading="INVITE FRIENDS"
            cardText="Refer friends with your unique referral link."
            />


            <OneStepCard 
            imageSource={collectCoinIcon}
            imageAltText="collectCoinsIcon"
            cardStepNumber={2}
            cardHeading="COLLECT COINS"
            cardText="Get 1 coin for each friend that installs our extension using your referral link."
            otherClasses={windowWidth > 800 ? styles.flexRowReverse : styles.flexColumn}
            />

            <OneStepCard 
            imageSource={voucherIcon}
            imageAltText="voucherIcon"
            cardStepNumber={3}
            cardHeading="GET VOUCHER"
            cardText="Redeem for a $20 hotel booking voucher once you collect 20 coins."
            />
            

          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReferFriendsSection;