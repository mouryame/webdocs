import { openDb } from "../db/connectDB";
export async function test() {
  try {
    const db = await openDb();
    const resp = await db.all("SELECT * FROM test");
    console.log(resp);
  } catch (err) {
    console.log(err);
  }
}

export async function getDataFromDb(query: string) {
  const db = await openDb();
  const data = await db.all(query);
  return data;
}

export async function insertDataInTable({
  tableName,
  dataObj,
}: {
  tableName: string;
  dataObj: object;
}) {
  const db = await openDb();
  const query = `INSERT INTO ${tableName} (${Object.keys(dataObj).join(
    ","
  )}) VALUES (${Object.values(dataObj)
    .map((item) => (item.type === "string" ? `"${item.value}"` : item.value))
    .join(",")})`;
  console.log(query);
  await db.exec(query);
  return "INSERTED 1 ROW";
}
