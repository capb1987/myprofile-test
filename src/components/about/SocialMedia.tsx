import { Icon } from "@iconify/react";
import styles from "./About.module.css";
import Link from "next/link";
import "animate.css";
const SocialMedia = () => {
  return (
    <div
      className={`${styles["about__socialMedia"]} animate__animated animate__animated animate__backInDown animate__delay-4s animate__faster`}
    >
      <h3>Mis Redes Sociales</h3>
      <hr />
      <ul>
        <li>
          <Link
            href="https://www.linkedin.com/in/carlos-puellobolano/"
            target="_blank"
          >
            <Icon icon="fa6-brands:linkedin" style={{ color: "white" }} />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/krlospuello1987" target="_blank">
            <Icon icon="fa6-brands:x-twitter" style={{ color: "white" }} />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/carlospb1987/" target="_blank">
            <Icon
              icon="fa6-brands:square-instagram"
              style={{ color: "white" }}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
