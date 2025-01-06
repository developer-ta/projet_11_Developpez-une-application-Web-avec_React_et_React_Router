import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer id={styles.footer}>
       <Link to="/home">
        <img src="src\presentation_Layer\assets\logoFooter.svg"></img>
      </Link>
	  <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
