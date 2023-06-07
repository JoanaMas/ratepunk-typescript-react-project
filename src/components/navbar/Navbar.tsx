import { FC, ReactElement } from "react";
// Components
import Container from "../container/Container";
// Style
import styles from "./navbar.module.scss";

const Navbar: FC = (): ReactElement => {
  return (


    <nav className={styles.navbar}>
      <Container>

      </Container>
    </nav>

  );
};

export default Navbar;