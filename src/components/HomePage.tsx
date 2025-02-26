import React, { useEffect } from "react";
import { useState } from "react";
import QuestionList from "./questions/QuestionList";
import { Question } from "../types/questionInterface";
import { saveQuestion } from "../query/services";

import "./HomePage.css";

const HomePage = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);

    const [currentOpenForm, setCurrentOpenForm] = useState<
        Question | undefined
    >();
    useEffect(() => {
        const savedQuestions = localStorage.getItem("form_questions");
        if (savedQuestions) {
            const questionList = JSON.parse(savedQuestions).map((val: Question) => ({
                ...val,
                isDropdownOpen: false,
            }));
            setQuestions(questionList);
        }
    }, []);
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

    const updateQuestion = async (
        id: string,
        field: keyof Question,
        value: any
    ) => {
        if (!currentOpenForm) return;
        const updatedForm = { ...currentOpenForm, [field]: value };
        setCurrentOpenForm(updatedForm);

        const updatedQuestions = await saveQuestion(updatedForm, setLoading);
        // @ts-ignore
        setQuestions(updatedQuestions);
    };

    return (
        <div className="home-page-container">
            <QuestionList
                currentOpenForm={currentOpenForm}
                questions={questions}
                setCurrentOpenForm={setCurrentOpenForm}
                updateQuestion={updateQuestion}
            />
            <button onClick={addQuestion} className="add-question-btn">
                + Add Question
            </button>
        </div>
    );
};

export default HomePage;
