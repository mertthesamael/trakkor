import styles from "./style.module.scss";
import React, { FC } from "react";

interface CtaTitleSectionProps {}

const CtaTitleSection: FC<CtaTitleSectionProps> = ({}) => {
  return (
    <section className={styles.ctaTitleSection + ' dt-pd'}>
      <div className={styles.ctaTitleSection__inner}>
        <div className={styles.ctaTitleSection__inner__text}>
          <div className={styles.ctaTitleSection__inner__text__title}>
            <h1 className="h2">Your Team. Your Projects.</h1>
            <br />
            <span className="h2">Always Together</span>
          </div>
          <div className={styles.ctaTitleSection__inner__text__desc}>
            <p className="bd-l">
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTitleSection;
