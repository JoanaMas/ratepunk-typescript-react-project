import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "./storeCard.module.scss";

interface StoreCardProps {
    storeImage: string;
    imageAltText: string;
    storeName: string;
    linkURL: string;
}

const StoreCard: FC<StoreCardProps> = (props): ReactElement => {

    const { storeImage, imageAltText, storeName, linkURL } = props;

    return (
        <Link href={linkURL}>

            <div className={styles.storeCard}>
                <Image src={storeImage} alt={imageAltText} width={50} height={50}></Image>
                <div>
                    <span>available in the</span>
                    <h4>{storeName}</h4>
                </div>
            </div>

        </Link>
    );
};

export default StoreCard;