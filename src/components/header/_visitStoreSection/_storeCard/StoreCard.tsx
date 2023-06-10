import React, { FC, ReactElement } from "react";
import Image from "next/image";
// Styles
import styles from "./storeCard.module.scss";

interface StoreCardProps {
    storeImage: string;
    imageAltText: string;
    storeName: string;
}

const StoreCard: FC<StoreCardProps> = (props): ReactElement => {

    const { storeImage, imageAltText, storeName } = props;

    return (
        <div className={styles.storeCard}>
            <Image src={storeImage} alt={imageAltText} width={50}></Image>
            <div>
                <span>available in the</span>
                <h4>{storeName}</h4>
            </div>
        </div>
    );
};

export default StoreCard;