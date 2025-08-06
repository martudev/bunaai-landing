import styles from "./test.module.css";
import { WavyBackground } from "./wavy-background";

export const Test = () => {
  return (
    <>
      <WavyBackground backgroundFill="rgb(242, 255, 241)">
        <div className={styles.container}>
          <div className={styles.container_title}>
            <img src="/favicon.svg" width={30} height={30} />
            <h1 className={styles.title}>BunaAI</h1>
          </div>
          <div className={styles.content}>
            <p>Usamos IA para potenciar a tu equipo, no para reemplazarlo</p>
            <button className={styles.cta}>Agendar una demo</button>
          </div>
        </div>
      </WavyBackground>
      <section>asd</section>
    </>
  );
};
