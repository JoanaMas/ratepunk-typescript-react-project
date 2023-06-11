"use client";

import React, { FC, ReactElement, useState, useEffect, useRef } from "react";
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";
// Components
import Container from "@/components/container/Container";
import OneStepCard from "./_oneStepCard/OneStepCard";
import EmailInputContainer from "./_emailInputContainer/EmailInputContainer";
import SuccessReferralContainer from "./_successReferralContainer/SuccessReferralContainer";
// Images
import emailIcon from "../../../../public/assets/email.svg";
import inviteLetterIcon from "../../../../public/assets/invite.svg";
import collectCoinIcon from "../../../../public/assets/collect-coins.svg";
import voucherIcon from "../../../../public/assets/voucher.svg";
import successIcon from "../../../../public/assets/success.svg";
// Helpers
import { validateEmail } from "@/helpers/validateEmail";
import { handleReferralLinkCopy } from "@/helpers/handleReferralLinkCopy";
// Styles
import styles from "./referFriendsSection.module.scss";

const ReferFriendsSection: FC = (): ReactElement => {

  // INPUT DATA
  const emailInputRef = useRef<HTMLInputElement>(null);

  // STATES
  const [error, setError] = useState<string>("");
  const [emailEnteredSuccessfully, setEmailEnteredSuccessfully] = useState<boolean>(false);
  const [referralInputValue] = useState<string>("https://ratepunk.com/referral");
  const [isLoading, setLoading] = useState<boolean>(false);

  // EMAIL VALIDATION
  useEffect(() => {
    validateEmail(emailInputRef.current?.value);
  }, [emailInputRef.current?.value]);

  // WINDO WIDTH ON RESIZE LOGIC
  const [windowWidth] = useWindowSize();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(windowWidth);
  }, [windowWidth]);


  // UPDATE REQUEST TO JSONBin.io

  const updateEmailData = async () => {

    const binId = "6484ee76b89b1e2299acff2a";
    const url = `https://api.jsonbin.io/v3/b/${binId}`;
    const headers = {
      "Content-Type": "application/json",
      "X-Master-Key": "$2b$10$AKc9NTQ2AESKX3MjQqRjxu8QQdIwsJryvMMo84h4wIwHfH3sue0ey",
    };

    const updatedDdata = {
      email: emailInputRef.current?.value,
    };


    if(!validateEmail(emailInputRef.current?.value)) {
      setError("Please enter correct email address");
      return;
    }

    const body = JSON.stringify(updatedDdata);

    try {

      setLoading(true);

      const response = await fetch(url, {
        method: "PUT",
        headers,
        body
      });

      if (response.ok) {
        console.log("Data updated successfully");
        setEmailEnteredSuccessfully(true);
      } else {
        throw new Error("Failed to update data on JSONBin");
      }

    } catch (error) {
      console.error(error);
      throw new Error("Failed to update data on JSONBin");

    } finally {
      setLoading(false);
    }
  };


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


              {/* EMAIL INPUT CONTAINER */}

              {isLoading ? "Loading..." :
                    <EmailInputContainer
                    errorMessage={error}
                    emailEnteredSuccessfullyState={emailEnteredSuccessfully}
                    emailInputRef={emailInputRef}
                    updateEmailDate={updateEmailData}
                    />
              }


              {/* SUCCESS CONTAINER */}
              <SuccessReferralContainer
              emailEnteredSuccessfullyState={emailEnteredSuccessfully}
              referralInputValue={referralInputValue}
              screenWidth={screenWidth}
              handleReferralLinkCopy={() => handleReferralLinkCopy(referralInputValue)}
              />

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
              otherClasses={screenWidth >= 800 ? styles.flexRowReverse : styles.flexColumn}
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