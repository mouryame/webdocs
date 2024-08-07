import { createTable } from "@/app/services/dbUitls";
import styles from "./page.module.css";
import schema from "../../db/schema";

export default async function Page({
  params: { pages },
}: {
  params: { pages: string[] };
}) {
  return <main className={styles.page}></main>;
}
