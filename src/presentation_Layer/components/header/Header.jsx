import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";

export const Header = () => {
  // hook
  const pathname = useLocation().pathname;

  //function

  return (
    <header className={styles.header}>
      {/* <h1>Header</h1> */}
      <Link to="/home">
        <img src={logo}></img>
      </Link>

      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={
                pathname == "/a-propos" ||
                pathname.split('/').includes("cardDetail")
                  ? styles.noUnderline
                  : ""
              }
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

