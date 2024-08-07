import { openDb } from "../db/connectDB";
import queries from "../db/queries";

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
  const query = queries.insertIntoTable(tableName, dataObj);
  console.log(query);
  await db.exec(query);
  return "INSERTED 1 ROW";
}

export async function createTable({
  tableName,
  columnsArr,
}: {
  tableName: string;
  columnsArr: object[];
}) {
  const db = await openDb();
  const query = queries.createTable(tableName, columnsArr);
  await db.exec(query);
  return "TABLE CREATED";
}
