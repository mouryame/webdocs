import { fetchPageByPath } from "@/app/services/dbUitls";
import styles from "./page.module.css";

export default async function Page({
  params: { path },
}: {
  params: { path: string[] };
}) {
  const currentPage = await fetchPageByPath(`/pages/${path.join("/")}/`);
  return currentPage ? (
    <main
      className={styles.page}
      dangerouslySetInnerHTML={{ __html: currentPage.content }}
    ></main>
  ) : (
    <main className={styles.page}>
      <h1>Page doesn't exist</h1>
    </main>
  );
}
