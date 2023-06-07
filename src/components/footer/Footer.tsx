import React, { FC, ReactElement } from "react";
// Components
import Container from "../container/Container";
// Styles
import styles from "./footer.module.scss";

const Footer: FC = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <Container>
        
      </Container>
    </footer>
  );
};

export default Footer;