import React from "react";
import Input from "../parts/Input";
import Select from "../parts/Select";
import Checkbox from "../parts/Checkbox";
import { QuestionItemProps } from "../../types/questionInterface";
import { numberTypeOptions, questionTypeOptions } from "../../constants/constants";

function QuestionForm({ question, setCurrentOpenForm, updateQuestion }: QuestionItemProps) {
    return (
        <div className="question-form-container">
            <div className="form-section">
                <Input
                    label={"Question title *"}
                    name={"title"}
                    value={question.title}
                    questionId={question.id}
                    required={true}
                    updateQuestion={updateQuestion}
                />
            </div>
            <div className="form-section">
                <Select
                    label={"Question type *"}
                    name={"questionType"}
                    value={question.questionType}
                    questionId={question.id}
                    options={questionTypeOptions}
                    updateQuestion={updateQuestion}
                />
                <div className="checkbox-group">
                    <Checkbox
                        label={"Required"}
                        name={"isRequired"}
                        value={question.isRequired}
                        questionId={question.id}
                        updateQuestion={updateQuestion}
                    />
                    <Checkbox
                        label={"Hidden"}
                        name={"isHidden"}
                        value={question.isHidden}
                        questionId={question.id}
                        updateQuestion={updateQuestion}
                    />
                </div>
            </div>
            {question.questionType === "number" && (
                <div className="form-section">
                    <Select
                        label={"Number Type *"}
                        name={"inputFormat"}
                        value={question.inputFormat}
                        questionId={question.id}
                        options={numberTypeOptions}
                        updateQuestion={updateQuestion}
                    />
                    <div className="input-range">
                        <input
                            type="number"
                            placeholder="Min"
                            value={question.minValue || ""}
                            onChange={(e) =>
                                updateQuestion(question.id, "minValue", Number(e.target.value))
                            }
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={question.maxValue || ""}
                            onChange={(e) =>
                                updateQuestion(question.id, "maxValue", Number(e.target.value))
                            }
                        />
                    </div>
                </div>
            )}
            {question.questionType === "text" && (
                <>
                    <div className="form-section">
                        <Input
                            label={"Helper text"}
                            name={"description"}
                            value={question.description}
                            questionId={question.id}
                            updateQuestion={updateQuestion}
                        />
                    </div>
                    <div className="form-section">
                        <Checkbox
                            label={"Is Paragraph"}
                            name={"isLongAnswer"}
                            value={question.isLongAnswer}
                            questionId={question.id}
                            updateQuestion={updateQuestion}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default QuestionForm;
