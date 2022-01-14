import { NavBar, MainScreen, Footer } from "./";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <MainScreen />
      <Footer />
    </div>
  );
};

export default MainLayout;
