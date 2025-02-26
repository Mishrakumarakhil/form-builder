import { Question } from "../types/questionInterface";
import { debounce } from "./helper";

const saveToLocalStorage = (
  question: Question,
  setLoading: Function,
  resolve: Function
) => {
  setTimeout(() => {
    const savedQuestions = JSON.parse(
      localStorage.getItem("form_questions") || "[]"
    );
    const index = savedQuestions.findIndex(
      (q: Question) => q.id === question.id
    );

    if (index === -1) {
      savedQuestions.push(question);
    } else {
      savedQuestions[index] = question;
    }

    localStorage.setItem("form_questions", JSON.stringify(savedQuestions));
    setLoading(false);
    resolve(savedQuestions);
  }, (Math.random() * 1000) % 2000);
};

const debouncedSaveToLocalStorage = debounce(
  (question: Question, setLoading: Function, resolve: Function) => {
    setLoading(true);
    saveToLocalStorage(question, setLoading, resolve);
  },
  500
);

export const saveQuestion = async (
  question: Question,
  setLoading: Function
) => {
  if (!question) return;

  return new Promise<Question[]>((resolve) => {
    debouncedSaveToLocalStorage(question, setLoading, resolve);
  });
};

export const deleteQuestion = async (id: string, setLoading: Function) => {
  if (!id) return;
  setLoading(true);

  const updatedQuestions = await new Promise<Question[]>((resolve) => {
    setTimeout(() => {
      const savedQuestions = JSON.parse(
        localStorage.getItem("form_questions") || "[]"
      );
      const updatedQuestions = savedQuestions.filter(
        (q: Question) => q.id !== id
      );
      localStorage.setItem("form_questions", JSON.stringify(updatedQuestions));
      setLoading(false);
      resolve(updatedQuestions);
    }, 1000);
  });

  return updatedQuestions;
};
