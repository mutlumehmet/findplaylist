import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./";
import { Home } from "pages";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default MainLayout;
