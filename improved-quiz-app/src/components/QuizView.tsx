import React, { useState } from 'react';
import { QuizViewProps } from '../types/UiTypes';

const QuizView: React.FC<QuizViewProps> = ({
  questions
}) => {
  return (<>
    <p> Questions: {questions.length} </p>  
  </>);
}

export default QuizView;