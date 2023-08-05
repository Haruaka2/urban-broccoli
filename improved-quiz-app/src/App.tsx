import React, { useState } from 'react';
import { Question } from './types/ApiTypes';
import { AppViewEnum } from './utils/Constants';
import QuizView from './components/QuizView';
import SelectionView from './components/SelectionView';
import ResultView from './components/ResultView';
import { ResultsProps } from './types/UiTypes';

const App: React.FC = () => {
  const [view, setView] = useState<String>(AppViewEnum.SELECTION);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<ResultsProps>({
    correct: 0,
    incorrect: 0,
    total: 0
  });

  const setViewHandler = (val: string) => setView(val);
  const setQuestionsHandler = (val: Question[]) => setQuestions(val);

  const generateView = () => {
    switch(view) {
      case AppViewEnum.QUIZ:
        return <QuizView questions={questions}
                         results={results}
                         setResults={setResults}/>
      case AppViewEnum.SELECTION:
        return <SelectionView setView={setViewHandler}
                              setQuestions={setQuestionsHandler}/>
      case AppViewEnum.RESULT:
        return <ResultView/>
      default:
        return <></>
    }
  }

  return (<>
    { generateView() }
  </>);
}

export default App;
