import React from "react";
import { useState } from "react";
import QuestionList from "./questions/QuestionList";
import { Question } from "../types/questionInterface";

import "./HomePage.css";

const HomePage = () => {
    const [questions, setQuestions] = useState<Question[]>([]);

    const [currentOpenForm, setCurrentOpenForm] = useState<
        Question | undefined
    >();

    const addQuestion = () => {
        const currForm: Question = {
            id: Date.now().toString(),
            title: "",
            questionType: "text",
            description: "",
            isRequired: false,
            isHidden: false,
            isDropdownVisible: true,
            isLongAnswer: false,
            inputFormat: "",
        };
        setCurrentOpenForm(currForm);
        setQuestions((prev) => [...prev, currForm]);
    };

    return (
        <div className="home-page-container">
            <QuestionList
                currentOpenForm={currentOpenForm}
                questions={questions}
                setCurrentOpenForm={setCurrentOpenForm}
            />
            <button onClick={addQuestion} className="add-question-btn">
                + Add Question
            </button>
        </div>
    );
};

export default HomePage;
