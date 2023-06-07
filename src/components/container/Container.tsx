import React, { FC, ReactElement } from "react";
// Style
import styles from "./container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }): ReactElement => {
  return (
    <div className={styles.containerCenter}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Container;