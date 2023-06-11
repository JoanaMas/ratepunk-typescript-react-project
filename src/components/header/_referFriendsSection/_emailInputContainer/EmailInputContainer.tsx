import React, { FC, ReactElement } from "react";
import Image from "next/image";
// Images
import emailIcon from "../../../../../public/assets/email.svg";
// Styles
import styles from "./emailInputContainer.module.scss";

interface EmailInputContainerProps {
    errorMessage: string;
    emailEnteredSuccessfullyState: boolean;
    emailInputRef: React.RefObject<HTMLInputElement>
    updateEmailDate: () => void;
}

const EmailInputContainer: FC<EmailInputContainerProps> = (props): ReactElement => {

    const { errorMessage, emailEnteredSuccessfullyState, emailInputRef, updateEmailDate } = props;

    return (
        <div className={emailEnteredSuccessfullyState ? styles.displayNone : styles.inputContainer}>
            <span>{errorMessage}</span>
            <div className={styles.inputWithIcon}>
                <input type="email" placeholder="Enter your email address" ref={emailInputRef} />
                <div className={styles.emailIcon}><Image src={emailIcon} alt="emailIcon" width={15} /></div>
            </div>
            <button onClick={updateEmailDate}>Get Referral Link</button>
        </div>
    );
};

export default EmailInputContainer;