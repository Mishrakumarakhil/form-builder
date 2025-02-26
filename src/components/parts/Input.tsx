import { InputProps } from "../../types/inputInterface";
import { useEffect, useRef, useState } from "react";
export default function Input({
  label,
  name,
  value,
  questionId,
  updateQuestion,
  required = false,
  error,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  let [focussed, setFocussed] = useState(false);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", function () {
        console.log("focussed");
        setFocussed(true);
      });
      inputRef.current.addEventListener("blur", function () {
        console.log("blur");
        setFocussed(false);
      });
    } else setFocussed(false);
    return () => inputRef.current?.removeEventListener("focus", () => { });
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder={focussed ? "" : error ? error : label}
        ref={inputRef}
        value={value}
        required={required}
        onChange={(e) => updateQuestion(questionId, name, e.target.value)}
        className=""
      />
      {
        <label className="">
          {label}
        </label>
      }
    </>
  );
}
