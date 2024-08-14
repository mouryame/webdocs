import React from "react";
import { fetchLastID, insertDataInTable } from "../services/dbUitls";
import { TextField } from "../components";
import { redirect } from "next/navigation";

async function Page() {
  const lastID = await fetchLastID();
  let dataObj: any = {
    id: lastID + 1,
    name: "",
    content: "",
    path: "",
    createdAt: new Date(),
    createdBy: "",
    updatedAt: new Date(),
    updatedBy: "",
    title: "",
    description: "",
    orderInFolder: "",
    previousPage: "",
    nextPage: "",
    parentFolder: "",
  };
  async function handleChange(formData: FormData) {
    "use server";
    const rawObj: any = Object.keys(dataObj).reduce(
      (acc, key) => ({
        ...acc,
        [key]: {
          value: formData.get(key),
          type: key === "id" ? "number" : "string",
        },
      }),
      {}
    );
    const resp = await insertDataInTable({
      tableName: "pages",
      dataObj: rawObj,
    });

    if (typeof resp === "string") redirect(rawObj.path.value);
  }
  return (
    <form action={handleChange}>
      {Object.keys(dataObj).map((key) => (
        <TextField key={key} defaultValue={dataObj[key]} label={key} />
      ))}
      <button>Create</button>
    </form>
  );
}

export default Page;
