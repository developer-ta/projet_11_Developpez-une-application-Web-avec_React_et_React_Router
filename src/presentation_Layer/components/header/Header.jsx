import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  // hook
  const pathname = useLocation().pathname;

  //function

  return (
    <header className={styles.header}>
      {/* <h1>Header</h1> */}
      <Link to="/home">
        <img src="src\presentation_Layer\assets\logo.svg"></img>
      </Link>

      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={pathname == "/a-propos" || pathname == "/CardDetail" ? styles.noUnderline : ""}
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              to="/a-propos"
              className={pathname == "/a-propos" ? "" : styles.noUnderline}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const style = {};
