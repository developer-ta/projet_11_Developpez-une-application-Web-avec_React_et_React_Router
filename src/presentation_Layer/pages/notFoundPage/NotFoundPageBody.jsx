import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";
export const NotFoundPageBody = () => {
  return (
    <main id="main">
      <div className={styles["notFound"]}>
        <span>404</span>
      </div>
      <p className={styles["alert"]}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/home"} className={styles["returnHome"]}>
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};
