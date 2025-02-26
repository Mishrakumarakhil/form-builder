import QuestionItem from "./QuestionItem";
import { QuestionListProps } from "../../types/questionInterface";

export default function QuestionList({
    currentOpenForm,
    questions,
    setCurrentOpenForm,
    updateQuestion,
}: QuestionListProps) {
    return (
        <div>
            {questions.map((q) => (
                <QuestionItem
                    isFormOpen={
                        currentOpenForm && currentOpenForm.id === q.id ? true : false
                    }
                    key={
                        currentOpenForm && currentOpenForm.id === q.id
                            ? currentOpenForm.id
                            : q.id
                    }
                    question={
                        currentOpenForm && currentOpenForm.id === q.id ? currentOpenForm : q
                    }
                    setCurrentOpenForm={setCurrentOpenForm}
                    updateQuestion={updateQuestion}
                />
            ))}
        </div>
    );
}
