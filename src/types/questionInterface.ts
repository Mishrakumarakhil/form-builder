export interface Question {
  id: string;
  title: string;
  questionType: string; //"text" | "number" | "select"| "email" | "description"| "phone";
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

export interface QuestionListProps {
  currentOpenForm: Question | undefined;
  questions: Question[];
  setCurrentOpenForm?: any;
  errorFormValues?: {};
  updateQuestion: (id: string, field: keyof Question, value: any) => void;
  removeQuestion: (id: string) => void;
  loading: boolean;
}
export interface QuestionItemProps {
  isFormOpen?: boolean;
  question: Question;
  setCurrentOpenForm?: any;
  errorFormValues?: {};
  updateQuestion: (id: string, field: keyof Question, value: any) => void;
  removeQuestion: (id: string) => void;
  loading: boolean;
}
