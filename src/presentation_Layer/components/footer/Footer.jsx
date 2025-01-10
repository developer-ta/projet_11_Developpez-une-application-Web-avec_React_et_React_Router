import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import  logoFooter from "../../assets/logoFooter.svg";
export const Footer = () => {
  return (
    <footer id={styles.footer}>
       <Link to="/home">
        <img src={logoFooter}></img>
      </Link>
	  <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
