const queries = {
  insertIntoTable: (tableName, dataObj) => {
    return `INSERT INTO ${tableName} (${Object.keys(dataObj).join(
      ","
    )}) VALUES (${Object.values(dataObj)
      .map((item) => (item.type === "string" ? `"${item.value}"` : item.value))
      .join(",")})`;
  },
  createTable: (tableName, columnsArr) => {
    return `CREATE TABLE IF NOT EXISTS ${tableName} (${columnsArr
      .map(
        (item) =>
          `${item.columnName} ${item.columnType} ${
            item.isPrimaryKey ? "PRIMARY KEY" : ""
          }`
      )
      .join(",")})`;
  },
};

export default queries;