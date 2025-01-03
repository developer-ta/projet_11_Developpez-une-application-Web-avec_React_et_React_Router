import { Outlet } from "react-router-dom";
import { Footer } from "./../components/footer/Footer";
import { Header } from "./../components/header/Header";

export const MainLayout = () => {
  return (
    <>
      <h1>MainLayout</h1>
      <hr></hr>
      <Header></Header>

      {/* ici centent body */}

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
};
