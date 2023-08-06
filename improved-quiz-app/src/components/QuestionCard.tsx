import React, { useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { Question } from '../types/ApiTypes';
import { QuestionProps, AnswerProps } from '../types/UiTypes';
import { Button } from '@mui/material';
import { shuffleArray } from '../utils/GenUtils';

const QuestionCard: React.FC<QuestionProps> = ({
    current,
    setSelected
}) => {
  const [answers, setAnswers] = useState<AnswerProps[]>([]);

  useEffect(() => {
    if(current.incorrect_answers.length > 0) {
      const temp = [
        { isCorrect: true, isSelected: false, text: current.correct_answer },
        ...current.incorrect_answers.map(incorrect => ({
          isCorrect: false,
          isSelected: false,
          text: incorrect
        }))
      ];
      setAnswers(shuffleArray(temp));
    }
  }, [current])

  const onSelect = (selected: AnswerProps) => {
    setSelected(selected);
    setAnswers(answers.map(ans => {
      if(ans.text === selected.text) {
        return {
          isCorrect: selected.isCorrect,
          isSelected: true,
          text: selected.text
        };
      } else return {
        isCorrect: ans.isCorrect,
        isSelected: false,
        text: ans.text
      }
    }))
  }

  if(answers.length > 0) {
    return (<>
      <Grid item xs={12}>
        <span>{current.question}</span>
      </Grid>
      {
        answers.map(ans => {
          return <Grid item xs={12}>
            <Button variant={ans.isSelected ? "contained" : "outlined"} 
                    onClick={() => onSelect(ans)}>
              {ans.text}
            </Button>
          </Grid>
        })
      }
    </>)
  } else {
    return <></>
  }

}

export default QuestionCard;