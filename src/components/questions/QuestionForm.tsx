import React from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Checkbox from "../UI/Checkbox";
import { QuestionItemProps } from "../../types/questionInterface";
import { numberTypeOptions, questionTypeOptions } from "../../constants/constants";

function QuestionForm({ question, setCurrentOpenForm }: QuestionItemProps) {
    return (
        <div className="question-form-container">
            <div className="form-section">
                <Input
                    label={"Question title *"}
                    name={"title"}
                    value={question.title}
                    questionId={question.id}
                    required={true}
                />
            </div>
            <div className="form-section">
                <Select
                    label={"Question type *"}
                    name={"questionType"}
                    value={question.questionType}
                    questionId={question.id}
                    options={questionTypeOptions}
                />
                <div className="checkbox-group">
                    <Checkbox
                        label={"Required"}
                        name={"isRequired"}
                        value={question.isRequired}
                        questionId={question.id}
                    />
                    <Checkbox
                        label={"Hidden"}
                        name={"isHidden"}
                        value={question.isHidden}
                        questionId={question.id}
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
                    />
                    <div className="input-range">
                        <input
                            type="number"
                            placeholder="Min"
                            value={question.minValue || ""}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={question.maxValue || ""}
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
                        />
                    </div>
                    <div className="form-section">
                        <Checkbox
                            label={"Is Paragraph"}
                            name={"isLongAnswer"}
                            value={question.isLongAnswer}
                            questionId={question.id}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default QuestionForm;
