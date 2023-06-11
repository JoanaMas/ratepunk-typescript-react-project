import React, { FC, ReactElement } from "react";
import Image from "next/image";
// Images
import successIcon from "../../../../../public/assets/success.svg";
// Styles
import styles from "./successReferralContainer.module.scss";

interface SuccessReferralContainerProps {
    emailEnteredSuccessfullyState: boolean;
    referralInputValue: string;
    screenWidth: number;
    handleReferralLinkCopy: () => void;
}

const SuccessReferralContainer: FC<SuccessReferralContainerProps> = (props): ReactElement => {

    const { emailEnteredSuccessfullyState, referralInputValue, screenWidth, handleReferralLinkCopy } = props;

    
    return (
        <div className={emailEnteredSuccessfullyState ? styles.successInputContainer : styles.displayNone}>

            <div className={styles.successMessage}>
                <Image src={successIcon} alt="successIcon" width={25} />
                <span>Your email is confirmed!</span>
            </div>

            <div className={styles.referralInput}>
                <input type="text" value={referralInputValue} onChange={(e) => e.target.value} />
                <button onClick={handleReferralLinkCopy}>{screenWidth >= 800 ? "Copy" : "Copy URL"}</button>

            </div>
        </div>
    );
};

export default SuccessReferralContainer;