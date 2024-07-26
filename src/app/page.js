import styles from './page.module.css'
export default function Home() {
  return (
    <section className={styles.missionVision}>
      <div className={styles.vision}>
        <div className={styles.rectangle3} />
        <p className={styles.visionText}>
          Vision: To be the center that produces humble, responsible, informed,
          and creative citizens for industrialization.
        </p>
      </div>
      <div className={styles.mission}>
        <div className={styles.rectangle3} />
        <p className={styles.missionText}>
          Mission: To be the center that produces humble, responsible, informed,
          and creative citizens for industrialization.
        </p>
      </div>
    </section>
  );
}
