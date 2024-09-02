import styles from "./page.module.css";
import Auth from "./Auth/Auth";

export default function Home() {
  return (
    <main className={styles.main}>
      <Auth />
    </main>
  );
}
