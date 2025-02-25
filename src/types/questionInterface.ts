export interface Question {
  id: string;
  title: string;
  questionType:
    | "text"
    | "number"
    | "select"
    | "email"
    | "description"
    | "phone";
  description: string;
  isRequired: boolean;
  isHidden: boolean;
  minValue?: number;
  maxValue?: number;
  options?: string[];
  isDropdownVisible?: boolean;
  isLongAnswer: boolean;
  inputFormat: string;
}
