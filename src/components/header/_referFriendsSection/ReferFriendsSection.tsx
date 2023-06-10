import React, { FC, ReactElement } from "react";
import Image from "next/image";
// Components
import Container from "@/components/container/Container";
// Images
import emailIcon from "../../../../public/assets/email.svg";
// Styles
import styles from "./referFriendsSection.module.scss";

const ReferFriendsSection: FC = (): ReactElement => {
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
                  <div className={styles.emailIcon}><Image src={emailIcon} alt="emailIcon" /></div>
                </div>
                <button>Get Referral Link</button>
              </div>

                <div className={styles.limits}>
                  <p>Limits on max rewards apply.</p>
                </div>


            </div>

          </div>

          <div className={styles.referFriendsStepsContainer}></div>
        </div>
      </Container>
    </section>
  );
};

export default ReferFriendsSection;