import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./";
import styles from "./MainLayout.module.css";
import RoutesData from "constants/route-data";

const MainLayout = () => {
  const routeLists = Object.values(RoutesData);
  const allRoutes = routeLists.map((routeList, index) => (
    <Route path={routeList.path} element={routeList.element} key={index} />
  ));

  return (
    <div className={styles.main}>
      <NavBar />
      <Router>
        <Routes>{allRoutes}</Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default MainLayout;
