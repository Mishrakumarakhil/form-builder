import React, { useEffect } from "react";
import "./HomePage.css";
import { useState } from "react";
import QuestionList from "./questions/QuestionList";
import { Question } from "../types/questionInterface";
import { saveQuestion } from "../query/services";
import { validateForm } from "../query/helper";
import Loader from "./Loader";


const HomePage = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);
    const [errorFormValues, setErrorFormValues] = useState({});

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

        if (validateForm(updatedForm, setErrorFormValues, setIsFormValid)) {
            const updatedQuestions = await saveQuestion(updatedForm, setLoading);
            // @ts-ignore
            setQuestions(updatedQuestions);
        }
    };

    return (
        <div className="home-page-container">

            <QuestionList
                currentOpenForm={currentOpenForm}
                questions={questions}
                setCurrentOpenForm={setCurrentOpenForm}
                updateQuestion={updateQuestion}
                errorFormValues={errorFormValues}
            />
            {loading && <Loader />}
            <button onClick={addQuestion} className="add-question-btn">
                + Add Question
            </button>
        </div>
    );
};

export default HomePage;
