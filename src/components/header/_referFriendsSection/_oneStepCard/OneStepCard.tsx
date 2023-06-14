import React, { FC, ReactElement } from "react";
import Image from "next/image";
// Custom Hook
import useWindowWidth from "@/hooks/windowWidth";
// Styles
import styles from "./oneStepCard.module.scss";


interface OneStepCardProps {
    imageSource: string;
    imageAltText: string;
    cardStepNumber: number;
    cardHeading: string;
    cardText: string;
    otherClasses?: string;
}

const OneStepCard: FC<OneStepCardProps> = (props): ReactElement => {

    const { imageSource, imageAltText, cardStepNumber, cardHeading, cardText, otherClasses } = props;

    const { screenWidth } = useWindowWidth();
    
    return (
        <div className={`${styles.oneStepContainer} ${otherClasses}`}>
            <Image src={imageSource} alt={imageAltText} width={screenWidth > 800 ? 100 : 140} />
            <div className={styles.stepContent}>
                <h4>STEP {cardStepNumber}</h4>
                <h2>{cardHeading}</h2>
                <p>{cardText}</p>
            </div>
        </div>
    );
};

export default OneStepCard;