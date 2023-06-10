import React, { FC, ReactElement } from "react";
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";
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

    const [windowWidth] = useWindowSize();

    return (
        <div className={`${styles.oneStepContainer} ${otherClasses}`}>
            <Image src={imageSource} alt={imageAltText} width={ windowWidth > 800 ? 100 : 150} />
            <div className={styles.stepContent}>
                <h4>STEP {cardStepNumber}</h4>
                <h2>{cardHeading}</h2>
                <p>{cardText}</p>
            </div>
        </div>
    );
};

export default OneStepCard;