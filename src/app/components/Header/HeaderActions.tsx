import styles from "./Header.module.css";

export default function HeaderActions() {
  return (
    <>
      <a href="/create" className={styles.button}>
        New Page
      </a>
      <a className={styles.button} href="/edit">
        Edit Page
      </a>
      <a className={styles.button} href="/admin">
        Admin
      </a>
    </>
  );
}
