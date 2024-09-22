import styles from "./styles.module.scss";

interface WeatherHeaderProps {
  value: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function WeatherHeader({
  value,
  handleSubmit,
  handleLocationChange,
}: WeatherHeaderProps) {
  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={handleLocationChange}
          placeholder="都市名または緯度・経度を入力してください"
        />
        <button className={styles.button} type="submit"></button>
      </form>
    </header>
  );
}
