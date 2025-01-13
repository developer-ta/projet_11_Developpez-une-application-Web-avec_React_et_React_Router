import styles from "./HeroSection.module.scss";


export const HeroSection = ({ sectionStyle, boxStyle, children }) => {
  return (
    <section id={styles["hero-section"]} style={sectionStyle}>
      <div className={styles["box-title"]} style={boxStyle}>
        {children}
      </div>
    </section>
  );
};
