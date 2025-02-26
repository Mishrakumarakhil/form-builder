import { InputProps } from "../../types/inputInterface";
import "./Select.css";
interface SelectInputProps extends InputProps {
  options: { name: string; label: string }[];
}
export default function Select({
  label,
  value,
  options,
  error,
  questionId,
  name,
  updateQuestion,
}: SelectInputProps) {
  return (
    <>
      <select
        key={questionId}
        onChange={(e) => updateQuestion(questionId, name, e.target.value)}
        value={value}
        className={`select-input ${error ? 'error' : ''}`}
        data-testid="question-element"
      >
        <option value="" disabled>
          {error ? error : "Question type*"}
        </option>
        {options &&
          options.map((val) => <option value={val.name}>{val.label}</option>)}
      </select>
      <label className="select-input-label">{label}</label>
    </>
  );
}
