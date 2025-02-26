import { InputProps } from "../../types/inputInterface";
export default function Checkbox({
  label,
  name,
  value,
  questionId,
  updateQuestion,
}: InputProps) {
  return (
    <>
      <input
        type="checkbox"
        placeholder="Question title"
        checked={value ? true : false}
        onChange={(e) => updateQuestion(questionId, name, e.target.checked)}
        style={{ width: '1rem', height: '1rem' }}
      />
      <label>{label}</label>
    </>
  );
}
