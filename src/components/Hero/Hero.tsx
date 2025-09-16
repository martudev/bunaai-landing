import { HeroHighlight as UIHeroHighlight } from "../ui/hero-highlight";
import { HeroVideoDialog } from "../ui/HeroVideoDialog";
import styles from "./Hero.module.scss";

export function HeroHighlight() {
  return (
    <UIHeroHighlight>
      <div className={styles.container}>
        <div className={styles.content_one}>
          {/* <h1>Usamos IA para potenciar a tu equipo, no para reemplazarlo</h1> */}
          <h1>
            Usamos IA para liberar tiempo y potenciar la creatividad de tu
            equipo.
          </h1>
          <p>
            Combinamos la visión estratégica de una consultora con la capacidad
            técnica de una agencia de desarrollo. Sin promesas vacías, solo
            resultados medibles.
          </p>
          <section className={styles.ctas}>
            <a href="#" className={styles.cta_primary}>
              Agenda tu demo gratuita
            </a>
            <a href="#" className={styles.cta_secondary}>
              Explorar servicios
            </a>
          </section>
          <section className={styles.stats}>
            <div className={styles.stats_card}>
              <div className={styles.stats_card_title}>+300%</div>
              <div className={styles.stats_card_subtitle}>ROI</div>
            </div>
            <div className={styles.stats_card}>
              <div className={styles.stats_card_title}>100%</div>
              <div className={styles.stats_card_subtitle}>
                Satisfacción al Cliente
              </div>
            </div>
            <div className={styles.stats_card}>
              <div className={styles.stats_card_title}>2+</div>
              <div className={styles.stats_card_subtitle}>
                Empresas Transformadas
              </div>
            </div>
            <div className={styles.stats_card}>
              <div className={styles.stats_card_title}>24/7</div>
              <div className={styles.stats_card_subtitle}>Soporte Técnico</div>
            </div>
          </section>
        </div>
        <div className={styles.content_two}>
          <div className={styles.window}>
            <div className={styles.window_header}>
              <div className={`${styles.circle} ${styles.green}`}></div>
              <div className={`${styles.circle} ${styles.purple}`}></div>
              <div className={`${styles.circle} ${styles.blue}`}></div>
            </div>
            <div className={styles.window_content}>
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="/hero-light.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </div>
    </UIHeroHighlight>
  );
}
