import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

import { AnswerProps, QuizViewProps } from '../types/UiTypes';
import { DifficultyEnum, Question, QuestionTypeEnum} from '../types/ApiTypes';
import { AppViewEnum } from '../utils/Constants';
import QuestionCard from './QuestionCard';
import * as Styles from '../utils/SxStyles';

const QuizView: React.FC<QuizViewProps> = ({
  questions,
  results,
  setResults,
  setView
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [num, setNum] = useState(1);
  const [currentQ, setCurrentQ] = useState<Question>({
    category: 0, 
    type: QuestionTypeEnum.MULTIPLE,
    difficulty: DifficultyEnum.HARD,
    question: "",
    correct_answer: "",
    incorrect_answers: [],
  });
  const [selected, setSelected] = useState<AnswerProps>({
    isCorrect: false,
    isSelected: false,
    text: ""
  })

  useEffect(() => {
    if(questions.length > 0) {
      setIsLoading(false);
      setCurrentQ(questions[num - 1]);
    }
  }, [questions]);
  useEffect(() => {
    if(num > 1) {
      setCurrentQ(questions[num - 1]);
    }
  }, [num])

  const onSubmit = () => {
    if(selected.isCorrect) {
      setResults({
        ...results,
        correct: results.correct + 1
      })
    } else {
      setResults({
        ...results,
        incorrect: results.incorrect + 1
      })
    }
    setNum(num + 1);
  };
  const onComplete = () => {
    setView(AppViewEnum.RESULT);
  }

  return (<>
    {
      isLoading ? <p> Loading your questions </p> : 
        <>
          <Container maxWidth={false}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" sx={Styles.qNumStyle}>
                  {num} / {results.total}
                </Typography>
              </Grid>

              <QuestionCard current={currentQ}
                            setSelected={setSelected}/>
              <Grid item xs={12} sx={Styles.buttonRow}>
                {
                  num < results.total ? <Button variant="contained" fullWidth={true} onClick={onSubmit}>
                  Submit
                  </Button> : <Button variant="contained" fullWidth={true} onClick={onComplete}>
                  Finish
                  </Button>
                }
              </Grid>
            </Grid>
          </Container>
        </>
    }
  </>);
}
export default QuizView;