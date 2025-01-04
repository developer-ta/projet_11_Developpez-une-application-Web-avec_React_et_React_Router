import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "./../components/header/Header";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <div className={styles.layout} id="mainLayout">
      <Header></Header>

      {/* ici centent body */}

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};
