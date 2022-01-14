import styles from "./NavBar.module.css";

import { ReactComponent as LogoSVG } from "assets/findplaylist-logo.svg";
const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <div className={styles.logo}>
          <LogoSVG />
          <div className={styles.text}>findplaylist</div>
        </div>
      </div>
      <div className={styles["menu-item"]}>About the project</div>
    </div>
  );
};

export default NavBar;
