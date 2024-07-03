"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import image from "@/img/foto1.jpg";
import Link from "next/link";
const Header = () => {
  const [estado, setEstado] = useState(false);

  return (
    <header className={`${styles["header"]}`}>
      <div className={styles["container__header"]}>
        <Link href="/" className={styles["header__logo"]}>
          Mi Perfil
        </Link>
        <div className={styles["header__user-content"]}>
          <div className={styles["header__user"]}>
            Bienvenido, <span>CAPB1987</span>
          </div>
          <div className={styles["header__image"]}>
            <Image
              src={image.src}
              alt="Imagen del perfil"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
