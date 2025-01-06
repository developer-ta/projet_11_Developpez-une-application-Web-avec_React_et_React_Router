import { Link } from "react-router-dom";
import styles from "./HomeBodySection.module.scss";

export const Thumb = () => {
  const sourceIme =
    "https://plus.unsplash.com/premium_photo-1661749785693-df1a73149a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D";
  return (
    <Link to="/CardDetail" id={styles.card}>
      <img src={sourceIme} alt="" className="location-img" />
      <h3>
        Titre de la <br /> location
      </h3>
    </Link>
  );
};
