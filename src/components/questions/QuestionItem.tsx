import QuestionForm from "./QuestionForm";
import { QuestionItemProps } from "../../types/questionInterface";

export default function QuestionItem({
    isFormOpen,
    question,
    setCurrentOpenForm,
    updateQuestion,
}: QuestionItemProps) {
    return (
        <div>
            {question && !isFormOpen && (
                <div>
                    <div>{question.title}</div>
                </div>
            )}
            {question && isFormOpen && (
                <QuestionForm
                    question={question}
                    setCurrentOpenForm={setCurrentOpenForm}
                    updateQuestion={updateQuestion}
                />
            )}
        </div>
    );
}
