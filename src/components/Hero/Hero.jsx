import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <b>TANVI SHARMA.</b></h1>
          <p className={styles.description}>
      I am a dedicated and adaptable professional with <b className={styles.boldText}>excellent communication skills</b> and a strong ability to thrive in diverse environments.<br></br>
      <br></br>
      I have expertise in <i><b className={styles.boldText}>Java</b>, <b className={styles.boldText}>C++</b>, and <b className={styles.boldText}>JavaScript</b></i>.<br></br>
      <br></br>
      My primary interests include <b className={styles.boldText}>software development</b>, <b className={styles.boldText}>web technologies</b>, and <b className={styles.boldText}>data science</b>.<br></br>
      <br></br>
      I enjoy leveraging my skills in <b className={styles.boldText}>Node.js</b> and modern JavaScript frameworks such as <b className={styles.boldText}>React.js</b> to build innovative and impactful products.
    </p>
        <a href="mailto:tanucharit97@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>  
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
