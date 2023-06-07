import { FC, ReactElement } from "react";
// Style
import styles from "./navbar.module.scss";

const Navbar: FC = (): ReactElement => {
  return (
    <nav className={styles.nav}>
      <h1>Navbar</h1>
    </nav>
  );
};

export default Navbar;