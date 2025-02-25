import { InputProps } from "../../types/inputInterface";
interface SelectInputProps extends InputProps {
  options: { name: string; label: string }[];
}
export default function Select({
  label,
  value,
  options,
  error,
}: SelectInputProps) {
  return (
    <>
      <select value={value}>
        <option value="" disabled>
          {error ? error : "Question type*"}
        </option>
        {options &&
          options.map((val) => <option value={val.name}>{val.label}</option>)}
      </select>
      <label>{label}</label>
    </>
  );
}
