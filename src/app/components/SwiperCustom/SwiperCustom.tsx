"use client";
import { log } from "console";
import styles from "./SwiperCustom.module.css";
import { useState } from "react";
import { url } from "inspector";
import ViewButton from "../ViewButton/ViewButton";

const SwiperCustom = () => {
  const array = ["/collibri-slide.jpg", "/bird-slide.jpg", "/bird-2-slide.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    if (currentSlide < array.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (currentSlide >= array.length - 1) {
      setCurrentSlide(0);
    }
  };
  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    if (currentSlide === 0) {
      setCurrentSlide(array.length - 1);
    }
  };

  return (
    <div className={styles.swiper}>
      <button className={styles.button} onClick={previousSlide}>
        <svg
          width="19.000000"
          height="10.000000"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns-xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M18 4.5L0 4.5M4.5 0L0 4.5L4.5 9"
            stroke="#FFFFFF"
            strokeOpacity="1.000000"
            strokeWidth="1.300000"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${array[currentSlide]})` }}
      >
        <div className={styles.content}>
          <div>
            <span className={styles.span}></span>
            <h1 className={styles.text}>
              Colibri Creative
              <br /> Project
            </h1>
            <p className={styles.counter}>
              <span className={styles.right}>0{currentSlide + 1}</span>
              <span className={styles.mini}></span>
              <span className={styles.left}>0{array.length}</span>
            </p>
          </div>
          <div className={styles.bottom}>
            <ViewButton />
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={nextSlide}>
        <svg
          className={styles.svg}
          width="19.000000"
          height="10.000000"
          viewBox="0 0 19 10"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          xmlns-xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M0 4.5L18 4.5M13.5 0L18 4.5L13.5 9"
            stroke="none"
            strokeOpacity="1.000000"
            strokeWidth="1.300000"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SwiperCustom;
