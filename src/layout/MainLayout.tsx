import { NavBar, Footer } from "./";
import { Pages } from "pages";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <Pages />
      <Footer />
    </div>
  );
};

export default MainLayout;
