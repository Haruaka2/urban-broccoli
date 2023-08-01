import { DifficultyEnum, QuestionTypeEnum } from "../types/ApiTypes"

// API being used: https://opentdb.com/api_config.php
export const getTrivaQuestions = async (amt: number, category: number, difficulty: DifficultyEnum, qType: QuestionTypeEnum) => {
    let amtStr: string = "", 
        catStr: string = "", 
        diffStr: string = "", 
        typeStr: string = "";
    if(amt) amtStr = "amount=" + amt;
    if(category) catStr = "category=" + category;
    if(difficulty) diffStr = "difficulty=" + difficulty;
    if(qType) typeStr = "type=" + qType;

    const url: string = "/api.php?" + amtStr + "&" + catStr + "&" +
        diffStr + "&" + typeStr;

    const result = await fetch(url).then(res => res.json()).then(res => res.results).catch(err => console.log("ERROR: ", err));
    return result;
}
