import React from 'react';
import { Button } from '@mui/material';
import { getTrivaQuestions } from './utils/ApiUtils';
import { DifficultyEnum, QuestionTypeEnum } from './types/ApiTypes';

const App: React.FC = () => {
  const onClick = () => {
    Promise.resolve(getTrivaQuestions(10, 9, DifficultyEnum.EASY, QuestionTypeEnum.MULTIPLE)).then(data => console.log("Test #1: ", data));
  }

  return (<>
    <p> An item here. </p>
    <Button onClick={onClick}> Click me here. </Button>
  </>);
}

export default App;
