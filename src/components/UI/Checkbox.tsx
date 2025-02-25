import { InputProps } from "../../types/inputInterface";
export default function Input({
  label,
  name,
  value,
  questionId,

}: InputProps) {
  return (
    <>
      <input
        type="checkbox"
        placeholder="Question title"
        className=""
      />
      <label>{label}</label>
    </>
  );
}
