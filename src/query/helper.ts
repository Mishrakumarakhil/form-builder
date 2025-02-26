import { Question } from "../types/questionInterface";

export const debounce = (fn: Function, time: number) => {
  let timerRef: any;
  return function (...args: any) {
    console.log("tmer ref", timerRef);
    clearTimeout(timerRef);
    timerRef = setTimeout(() => {
      fn(...args);
    }, time);
  };
};

export const validateForm = (
  form: Question,
  setErrorFormValues: Function,
  setIsFormValid: Function
): boolean => {
  const errors: Record<string, string> = {};
  if (!form.title) errors["title"] = "Title is required";
  if (!form.questionType) errors["type"] = "Type is required";
  if (form.questionType === "number" && !form.inputFormat)
    errors["inputFormat"] = "Number type is required";

  setErrorFormValues(errors);
  const isValid = Object.keys(errors).length === 0;
  setIsFormValid(isValid);
  return isValid;
};
