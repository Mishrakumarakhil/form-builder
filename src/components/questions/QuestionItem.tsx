import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faChevronDown, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import QuestionForm from './QuestionForm';
import { QuestionItemProps } from '../../types/questionInterface';
import './QuestionItem.css';

export default function QuestionItem({
    isFormOpen,
    question,
    setCurrentOpenForm,
    updateQuestion,
    errorFormValues,
    removeQuestion,
    loading,
}: QuestionItemProps) {
    return (
        <div className="question-item-wrapper">
            {question && !isFormOpen && (
                <div className="question-item-header">
                    <div className="question-item-title">
                        <FontAwesomeIcon icon={faGripVertical} className="grip-icon" />
                        {question.title}
                    </div>
                    <div className="icons-container">
                        <FontAwesomeIcon
                            onClick={() => removeQuestion(question.id)}
                            icon={faTrash}
                            className="icon"
                        />
                        <FontAwesomeIcon
                            onClick={() => setCurrentOpenForm(question)}
                            icon={faChevronDown}
                            className="icon"
                        />
                    </div>
                </div>
            )}

            {question && isFormOpen && (
                <div className="question-form-wrapper">
                    <QuestionForm
                        question={question}
                        setCurrentOpenForm={setCurrentOpenForm}
                        updateQuestion={updateQuestion}
                        errorFormValues={errorFormValues}
                        removeQuestion={removeQuestion}
                        loading={loading}
                    />
                </div>
            )}
        </div>
    );
}
