const schema = {
  pages: [
    {
      columnName: "id",
      columnType: "INTEGER",
      isPrimaryKey: true,
    },
    {
      columnName: "name",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "content",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "path",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "createdAt",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "createdBy",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "updatedAt",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "updatedBy",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "title",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "description",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "orderInFolder",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "previousPage",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "nextPage",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
    {
      columnName: "parentFolder",
      columnType: "TEXT",
      isPrimaryKey: false,
    },
  ],
};

export default schema;
