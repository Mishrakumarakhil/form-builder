import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { InputProps } from "../../types/inputInterface";
import "./Select.css";
interface SelectInputProps extends InputProps {
  options: {
    options?: any; name: string; label: string
  }[];
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

        {/* Render main options */}
        {options &&
          options.map((val) => {
            // If the option has nested sub-options (like "Select"), render them as an optgroup
            if (val.options) {
              return (
                <optgroup key={val.name} label={val.label}>
                  {val.options.map((subOption: any) => (
                    <option key={subOption.name} value={subOption.name}>
                      {subOption.label}
                    </option>
                  ))}
                </optgroup>
              );
            }

            // Render standard options (Text, Description, etc.)
            return (
              <option key={val.name} value={val.name}>
                {val.label}
              </option>
            );
          })}
      </select>

      <label className="select-input-label">{label}</label>


    </>
  );
}
