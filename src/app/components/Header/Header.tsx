import styles from "./Header.module.css";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContents}>Header</div>
      <HeaderActions />
    </header>
  );
}
