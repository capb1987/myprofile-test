"use client";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import styles from "./ContactForm.module.css";
import type { User } from "@/types";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [user, setUser] = useState<User>({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [error, setError] = useState(false);

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

  const { nombre, email, mensaje } = user;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //al hacer click en el formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let notificacion = {};
    if ([nombre, email, mensaje].includes("")) {
      setError(true);
      notificacion = toast.error(
        "Campos vacios, favor llena todos los campos!!!",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      return;
    }
    setError(false);
    notificacion = toast.success("El usuario fue enviado exitosamente!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setUser({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };
  return (
    <section className={styles["section-form"]} onSubmit={handleSubmit}>
      <ToastContainer />

      <form
        className={styles["form"]}
        data-aos="fade-up-left"
        data-aos-delay="500"
      >
        <h2 className={styles["form__title"]}>Contacto</h2>
        <p className={styles["form__paragraph"]}>
          Describe tu petición y te estamos llamando
        </p>
        <hr />
        <div className={styles["form__container"]}>
          <div className={styles["form__group"]}>
            <label htmlFor="nombre">Nombre: </label>
            <input
              type="text"
              className={`${styles.form__input} ${error ? styles.error : null}`}
              id="nombre"
              value={nombre}
              onChange={handleChange}
              name="nombre"
              placeholder="Escribe tu nombre"
              autoComplete="off"
            />
          </div>

          <div className={styles["form__group"]}>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className={`${styles.form__input} ${error ? styles.error : null}`}
              id="email"
              value={email}
              onChange={handleChange}
              name="email"
              placeholder="Escribe tu correo"
              autoComplete="off"
            />
          </div>

          <div className={styles["form__group"]}>
            <label htmlFor="mensaje">Mensaje: </label>
            <textarea
              className={`${styles.form__textarea} ${
                error ? styles.error : null
              }`}
              id="mensaje"
              value={mensaje}
              onChange={handleChange}
              name="mensaje"
              placeholder="Escribe el mensaje a enviar"
              autoComplete="off"
            />
          </div>

          <input
            type="submit"
            className={styles["form__submit"]}
            value={"Enviar Información"}
          />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
