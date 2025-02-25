import { InputProps } from "../../types/inputInterface";
import { useEffect, useRef, useState } from "react";
export default function Input({
  label,
  name,
  value,
  questionId,
  required = false,
  error,
}: InputProps) {
  return (
    <>
      <input type="text" value={value} required={required} />
      {<label>{label}</label>}
    </>
  );
}
