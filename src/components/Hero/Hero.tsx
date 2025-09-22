import { HeroHighlight as UIHeroHighlight } from "../ui/hero-highlight";
import { HeroVideoDialog } from "../ui/HeroVideoDialog";
import styles from "./Hero.module.scss";

export function HeroHighlight() {
  return (
    <UIHeroHighlight>
      <div className={styles.container}>
        <div className={styles.content_one}>
          {/* <h1>Usamos IA para potenciar a tu equipo, no para reemplazarlo</h1> */}
          <h1>Cada negocio es único. Tu IA también debería serlo.</h1>
          <p>
            Trabajamos con vos para entender tus desafíos. Combinamos la visión
            estratégica de una consultora con la capacidad técnica de una
            agencia de desarrollo. Así creamos agentes de IA que liberan tiempo
            y mejoran la productividad de tu equipo.
          </p>
          <section className={styles.ctas}>
            <a href="#" className={styles.cta_primary}>
              Agenda tu demo gratuita
            </a>
            <a href="#" className={styles.cta_secondary}>
              Explorar servicios
            </a>
          </section>
          <section className={styles.key_points}>
            <div className={styles.key_points_card}>
              <div className={styles.key_points_card_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className={styles.key_points_card_content}>
                Más tiempo para tu equipo, menos tareas repetitivas
              </div>
            </div>
            <div className={styles.key_points_card}>
              <div className={styles.key_points_card_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className={styles.key_points_card_content}>
                Soluciones 100% adaptadas a tu negocio
              </div>
            </div>
            <div className={styles.key_points_card}>
              <div className={styles.key_points_card_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className={styles.key_points_card_content}>
                +100 horas de trabajo ahorradas/mes
              </div>
            </div>
            <div className={styles.key_points_card}>
              <div className={styles.key_points_card_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className={styles.key_points_card_content}>
                Clientes satisfechos en e-commerce y bienes raíces
              </div>
            </div>
            <div className={styles.key_points_card}>
              <div className={styles.key_points_card_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className={styles.key_points_card_content}>Soporte 24/7</div>
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
