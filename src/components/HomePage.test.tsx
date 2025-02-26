import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";
import { saveQuestion, deleteQuestion } from "../query/services";

jest.mock("../query/services", () => ({
    saveQuestion: jest.fn(),
    deleteQuestion: jest.fn(),
}));

describe("HomePage Component", () => {
    it("should render HomePage correctly", () => {
        render(<HomePage />);
        expect(screen.getByText("+ Add Question")).toBeInTheDocument();
    });
});
it('should add a new question when "Add Question" is clicked', async () => {
    render(<HomePage />);

    const addButton = screen.getByText("+ Add Question");
    fireEvent.click(addButton);
    await waitFor(() => screen.getByTestId("question-element"));
    expect(screen.getByTestId("question-element")).toBeInTheDocument();
});

it("should retrieve questions from localStorage and display them", () => {
    const savedQuestions = [
        {
            id: "1",
            title: "Test Question",
            questionType: "text",
            description: "",
            isRequired: false,
            isHidden: false,
            isDropdownVisible: true,
            isLongAnswer: false,
            inputFormat: "",
        },
    ];

    // Mock localStorage
    global.localStorage.setItem("form_questions", JSON.stringify(savedQuestions));

    render(<HomePage />);

    // Verify that the question from localStorage is rendered
    expect(screen.getByText("Test Question")).toBeInTheDocument();
});

