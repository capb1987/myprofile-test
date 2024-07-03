import styles from "./Interests.module.css";
import InterestsContent from "./InterestsContent";
import type { InterestsArray } from "@/types";

const Interests = () => {
  const interests: InterestsArray = [
    "Programación",
    "Leer Libros",
    "viajar",
    "Cocinar",
    "Jugar Xbox",
    "Ver Fútbol",
    "Música",
    "Ver Documentales",
    "Meditación",
    "Cine",
    "Tecnología",
    "Paseo Aire libre",
  ];

  return (
    <section className={styles["interests"]}>
      <div className={styles.interests__container}>
        <InterestsContent interests={interests} />
      </div>
    </section>
  );
};

export default Interests;
