import Header from "../components/Header/Header";
import SwiperCustom from "../components/SwiperCustom/SwiperCustom";
import styles from "./page.module.css";
const HomePage = () => {
  return (
    <>
      <Header />
      <section className={styles.hero}>
        <div className={styles.container}>
          <SwiperCustom />
        </div>
      </section>
      <section className={`${styles.smallContainer} ${styles.aboutBackground}`}>
        <div className={styles.aboutWrp}>
          <div className={styles.center}>
            <p className={styles.text}>who we are</p>
            <h2 className={styles.textBig}>
              <span>An award-winning design & dev team</span>
              <span>that is proud of our work 👋</span>
            </h2>
          </div>
          <div className={styles.flexBeetween}>
            <div>
              <span></span>
              <p>
                Over 10 years of combined experience, and know a thing or two
                about designing websites and mobile apps.
              </p>
            </div>
            <div>
              <p>
                Were divided, a moved night light darkness winged may also make
                man for. Winged the for Earth creeping appear evening, gathered
                Forth so he. Life that dry of created greater can't also
                gathered female green.
              </p>
              <button></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
