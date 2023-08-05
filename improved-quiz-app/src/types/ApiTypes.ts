// Enums Related to the Associated API
export enum DifficultyEnum {
    ALL = "",
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export enum QuestionTypeEnum {
    ALL = "",
    MULTIPLE = "multiple",
    TORF = "boolean"
}

// Objects Related to the Associated API
export type Configuration = {
    amount: number,
    category: number,
    difficulty: DifficultyEnum,
    type: QuestionTypeEnum,
};
export type OpenTriviaResponse = {
    response_code: number,
    results: Question[],
}
export type Category = {
    id: number,
    label: string
}
export type Question = {
    category: number, 
    type: QuestionTypeEnum,
    difficulty: DifficultyEnum,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
};