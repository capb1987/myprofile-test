import styles from "./About.module.css";
import Image from "next/image";
import imageAbout from "@/img/foto3.jpg";
import SocialMedia from "./SocialMedia";
import "animate.css";

const About = () => {
  return (
    <section className={styles["about"]} id="about__me">
      <div className={styles["about__container"]}>
        <div className={styles["about__content"]}>
          <div
            className={`${styles.about__image} animate__animated animate__backInDown`}
          >
            <Image
              src={imageAbout.src}
              alt="Acerca de mi imagen"
              width={450}
              height={450}
              priority={true}
            />
          </div>

          <div className={`${styles.about__text}`}>
            <h2 className="animate__animated animate__animated animate__backInDown animate__delay-2s animate__faster">
              Acerca de mí
            </h2>
            <p className="animate__animated animate__animated animate__backInDown animate__delay-2s animate__faster">
              Nací en la ciudad de Cartagena, Colombia desde muy pequeño fui
              inquieto para lo que tiene que ver con las computadoras y me
              encanta demostrar todas las capacidades para hacer dinámico tu
              sitio web.
            </p>
            <p className="animate__animated animate__animated animate__backInDown animate__delay-2s animate__faster">
              Estudié en la fundación Universitaria Técnologico Comfenalco de la
              ciudad de Cartagena y supe que mi vocación no solo es saber
              programar un sitio sino, saber resolver un inconveniente por muy
              complejo que este sea. Me gusta estar en constante capacitación y
              dar de mi lo mejor.Estudié postgrado en la Universidad del Norte
              en la ciudad de Barranquilla, Colombia y a partir de ahí, mejoré
              mis capacidades y trato de mejorar mi talento de estar a la
              vanguardia de las tecnólogias.
            </p>

            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
