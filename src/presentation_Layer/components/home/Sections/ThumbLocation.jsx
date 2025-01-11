import { Link } from "react-router-dom";
import styles from "./HomeBodySection.module.scss";

export const ThumbLocation = ({title,cover,id,refObjet}) => {


  return (
    <Link to={`/cardDetail/${id}`} id={styles.card} state={refObjet}>
      <img src={cover} alt="" className="location-img" />
      <h3>{title}</h3>
    </Link>
  );
};
