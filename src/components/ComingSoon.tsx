import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./ComingSoon.module.scss";

export const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <img src="/favicon.svg" />
        <h1 className={styles.title}>BunaAI</h1>
      </div>
      <div className={styles.animation_container}>
        <div className={styles.animation}>
          <DotLottieReact
            src="https://lottie.host/8e284c49-3e53-4c8b-b18d-c96c394d5323/uBmGm277Lv.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};
