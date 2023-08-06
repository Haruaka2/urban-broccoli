import { Question } from "./ApiTypes"

export type QuizViewProps = {
    questions: Question[]
    results: ResultsProps,
    setResults: Function,
    setView: Function
}
export type SelectionViewProps = {
    setView: Function,
    setQuestions: Function,
    setResults: Function
}
export type ResultViewProps = {
    results: ResultsProps
    setView: Function
}

export type QuestionProps = {
    current: Question,
    setSelected: Function
}
export type AnswerProps =  {
    isCorrect: boolean,
    isSelected: boolean,
    text: string
}
export type ResultsProps = {
    correct: number,
    incorrect: number,
    total: number
}