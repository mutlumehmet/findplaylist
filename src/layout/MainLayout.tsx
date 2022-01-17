import { NavBar, MainScreen, FooterMain } from "./";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <MainScreen />
      <FooterMain />
    </div>
  );
};

export default MainLayout;
