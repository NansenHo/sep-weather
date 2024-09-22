import styles from "./styles.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="/images/loading.svg" alt="loading" />
    </div>
  );
}
