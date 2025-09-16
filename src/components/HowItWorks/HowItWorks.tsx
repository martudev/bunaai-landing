import styles from "./HowItWorks.module.scss";
import { Steps } from "./Steps/Steps";

export const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_max}>
        <section className={styles.how_it_works}>
          <h1>Así transformamos tus ideas en resultados</h1>
          <p>
            Nuestro proceso, paso a paso, para convertir la IA en el motor de tu
            negocio
          </p>
        </section>
        <Steps />
      </div>
    </div>
  );
};
