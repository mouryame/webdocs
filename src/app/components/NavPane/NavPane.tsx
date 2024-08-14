import { fetchAllPages } from "@/app/services/dbUitls";
import styles from "./NavPane.module.css";
import Link from "next/link";

export default async function NavPane() {
  const allPages = await fetchAllPages();
  return (
    <div className={styles.navPane}>
      {allPages.map((page) => (
        <Link key={page.id} href={page.path}>
          {page.name}
        </Link>
      ))}
    </div>
  );
}
