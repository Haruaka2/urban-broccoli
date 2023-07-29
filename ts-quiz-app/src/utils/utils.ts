import { QuestionObject, QuestionsState } from "../types/Objects";
import { Difficulty } from "./enums";

export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);


// https://opentdb.com/api_config.php
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: QuestionObject) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
};