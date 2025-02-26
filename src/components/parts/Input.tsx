import { InputProps } from "../../types/inputInterface";
import { useEffect, useRef, useState } from "react";
import "./Input.css";
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
        setFocussed(true);
      });
      inputRef.current.addEventListener("blur", function () {
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
        className={`custom-input ${error ? "error" : ""}`}
      />
      {<label className="custom-input-label">{label}</label>}
    </>
  );
}
