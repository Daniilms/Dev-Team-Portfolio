"use client";

import styles from "./SwiperCustom.module.css";
import { useCallback, useEffect, useRef, useState } from "react";

import ViewButton from "../ViewButton/ViewButton";

const SwiperCustom = () => {
  const array = ["/collibri-slide.jpg", "/bird-slide.jpg", "/bird-2-slide.jpg"];
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shadowPosition, setShadowPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const changeZIndexForViewButton = () => {
    buttonRef.current.style.zIndex = "-1";
    buttonRef.current.style.opacity = "0";
    setTimeout(() => {
      buttonRef.current.style.zIndex = "3";
      buttonRef.current.style.opacity = "1";
    }, 1200);
  };
  const handlerMoveMouse = useCallback(
    (evt: React.MouseEvent<HTMLDivElement>) => {
      const maxHeight = 700;
      let rect = null;
      if (ref.current !== null) {
        rect = ref.current.getBoundingClientRect();
      }

      if (evt.y >= maxHeight || evt.y <= 60) {
        setIsMouseEntered(false);
      } else if (evt.y <= maxHeight || evt.y > 1) {
        setIsMouseEntered(true);
      }
      if (isMouseEntered) {
        setShadowPosition({ x: 0, y: 0 });
      }
      setShadowPosition({
        x: evt.x - rect.left,
        y: evt.y - rect.top,
      });
    },
    [isMouseEntered]
  );

  const nextSlide = () => {
    changeZIndexForViewButton();
    addFadeToSlide();
    setTimeout(() => {
      if (currentSlide < array.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
      if (currentSlide >= array.length - 1) {
        setCurrentSlide(0);
      }
    }, 800);
  };
  const previousSlide = () => {
    changeZIndexForViewButton();
    addFadeToSlide();
    setTimeout(() => {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
      if (currentSlide === 0) {
        setCurrentSlide(array.length - 1);
      }
    }, 800);
  };

  const addFadeToSlide = () => {
    ref.current.classList.add(`${styles.customShadow}`);
    setTimeout(() => {
      ref.current.classList.remove(`${styles.customShadow}`);
    }, 1200);
    console.log(ref.current);
  };
  useEffect(() => {
    const _ref = ref.current;

    _ref.addEventListener("mousemove", handlerMoveMouse);
    return () => {
      _ref.removeEventListener("mousemove", handlerMoveMouse);
    };
  }, [handlerMoveMouse, isMouseEntered]);

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
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => {
          setIsMouseEntered(false);
        }}
        ref={ref}
        className={`${styles.slide}`}
        style={{ backgroundImage: `url(${array[currentSlide]})` }}
      >
        <div
          style={{
            left: shadowPosition.x,
            top: shadowPosition.y,
          }}
          className={
            isMouseEntered
              ? styles.slideCursorShadow
              : styles.slideCursorShadowInvisible
          }
        ></div>
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
          <div ref={buttonRef} className={styles.bottom}>
            <ViewButton />
          </div>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          nextSlide();
        }}
      >
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
