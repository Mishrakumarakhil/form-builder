import { Question } from "./questionInterface";
export interface InputProps {
  label: string;
  name: keyof Question;
  value: any;
  questionId: string;
  required?: boolean;
  error?: any;
  updateQuestion: (id: string, field: keyof Question, value: any) => void;
}
