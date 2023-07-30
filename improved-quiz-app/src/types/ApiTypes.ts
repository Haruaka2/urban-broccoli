// Enums Related to the Associated API
export enum DifficultyEnum {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export enum QuestionTypeEnum {
    MULTIPLE = "multiple",
    TORF = "boolean"
}
export enum CategoryEnum {
    ANY = "any",
    GENERAL = "",
    BOOKS = "",
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
export type Question = {
    category: string,
    type: QuestionTypeEnum,
    difficulty: DifficultyEnum,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
};