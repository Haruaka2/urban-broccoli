import { Question } from "./ApiTypes"

export type QuizViewProps = {
    questions: Question[]
    results: ResultsProps,
    setResults: Function,
}
export type SelectionViewProps = {
    setView: Function,
    setQuestions: Function,
}
export type ResultViewProps = {
    results: ResultsProps
}
export type ResultsProps = {
    correct: number,
    incorrect: number,
    total: number
}