"use client";

import React from "react";

function TextField({
  defaultValue,
  label,
}: {
  defaultValue: any;
  label: string;
}) {
  return <input placeholder={label} defaultValue={defaultValue} name={label} />;
}

export default TextField;
