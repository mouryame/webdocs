const { openDb } = require("./connectDB");

async function setup() {
  const db = await openDb();
  await db.exec(
    "CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT)"
  );
}

setup();
