import QuestionForm from "./QuestionForm";
import { QuestionItemProps } from "../../types/questionInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function QuestionItem({
    isFormOpen,
    question,
    setCurrentOpenForm,
    updateQuestion,
    errorFormValues,
    removeQuestion,
}: QuestionItemProps) {
    return (
        <div>
            {question && !isFormOpen && (
                <div>
                    <div>
                        {question.title}

                        <div>
                            <FontAwesomeIcon
                                onClick={() => removeQuestion(question.id)}
                                icon={faTrash}
                            />
                            <FontAwesomeIcon
                                onClick={(e) => setCurrentOpenForm(() => question)}
                                icon={faChevronDown}
                            />
                        </div>
                    </div>
                </div>
            )}
            {question && isFormOpen && (
                <QuestionForm
                    question={question}
                    setCurrentOpenForm={setCurrentOpenForm}
                    updateQuestion={updateQuestion}
                    errorFormValues={errorFormValues}
                    removeQuestion={removeQuestion}
                />
            )}
        </div>
    );
}
