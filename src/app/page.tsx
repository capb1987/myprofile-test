import styles from "./page.module.css";
import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Interests from "@/components/interests/Interests";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.container__content}>
        <About />
        <Interests />
        <ContactForm />
      </div>
    </div>
  );
}
