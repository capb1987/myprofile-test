"use client";
import { InterestsArray } from "@/types";
import styles from "./Interests.module.css";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type InterestsContentProps = {
  interests: InterestsArray;
};
const InterestsContent = ({ interests }: InterestsContentProps) => {
  const [initAOS, setInitAOS] = useState(false);

  useEffect(() => {
    if (!initAOS) {
      AOS.init();
      return;
    }

    return () => {
      AOS.refresh();
    };
  }, [initAOS]);

  return (
    <div
      className={styles.interests__content}
      data-aos="fade-up-left"
      data-aos-delay="500"
    >
      <h2>Mis Intereses</h2>
      <hr />
      <ul className={styles.interests__list}>
        {interests.map((interest, index) => (
          <li key={index}>
            {" "}
            <Icon icon="lets-icons:check-fill" style={{ color: "#0008ff" }} />
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterestsContent;
