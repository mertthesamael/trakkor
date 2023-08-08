import Image from "next/image";
import styles from "./style.module.scss";
import React, { FC } from "react";

interface TeamSectionProps {}

const TeamSection: FC<TeamSectionProps> = ({}) => {
  return (
    <section className={styles.teamSection + " dt-pd"}>
      <div className={styles.teamSection__inner}>
        <div className={styles.teamSection__inner__text}>
          <div className={styles.teamSection__inner__text__title}>
            <h2 className="h3">Bigger team.</h2>
            <span className="h3">More time.</span>
          </div>
          <div className={styles.teamSection__inner__text__desc}>
            <p className="bd-l">
              Quam quis orci turpis vulputate platea. Urna ipsum suscipit nullam
              ipsum nam leo fringilla eget lorem. Sit vestibulum phasellus
              integer et et diam malesuada. Sed tortor orci mauris proin ac.
              Venenatis euismod mauris quis sit purus nisi. Sed quis eget augue
              ut aliquam sed.
            </p>
          </div>
        </div>
        <div className={styles.teamSection__inner__images}>
            <div>
              <Image src={'/team_img/team1.jpg'} alt="Team Img" fill style={{objectFit:'cover'}}/>
            </div>
            <div>
              <Image src={'/team_img/team2.jpg'} alt="Team Img" fill style={{objectFit:'cover'}}/>
            </div>
            <div>
              <Image src={'/team_img/team4.jpg'} alt="Team Img" fill style={{objectFit:'cover'}}/>
            </div>
            <div>
              <Image src={'/team_img/team3.jpg'} alt="Team Img" fill style={{objectFit:'cover'}}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
