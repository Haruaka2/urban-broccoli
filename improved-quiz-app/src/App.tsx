import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./global.css";

import { ResultsProps } from './types/UiTypes';
import { Question } from './types/ApiTypes';
import { AppViewEnum } from './utils/Constants';
import QuizView from './components/QuizView';
import SelectionView from './components/SelectionView';
import ResultView from './components/ResultView';
import * as Styles from "./utils/SxStyles";


const customTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e91e63',
      dark: '#ed4b82',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b22a00',
      main: '#ff3d00',
      dark: '#ff6333',
      contrastText: '#fff',
    },
  },
});
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
  const setResultsHandler = (val: ResultsProps) => setResults(val);
  
  const generateView = () => {
    switch(view) {
      case AppViewEnum.QUIZ:
        return <QuizView questions={questions}
                         results={results}
                         setResults={setResultsHandler}
                         setView={setViewHandler}/>
      case AppViewEnum.SELECTION:
        return <SelectionView setView={setViewHandler}
                              setQuestions={setQuestionsHandler}
                              setResults={setResultsHandler}/>
      case AppViewEnum.RESULT:
        return <ResultView results={results}
                           setView={setViewHandler}/>
      default:
        return <></>
    }
  }

  return (<>
    <ThemeProvider theme={customTheme}>
      <div className="gradient" style={Styles.background}>
        <div style={Styles.wrapper}>
          { generateView() }
        </div>
      </div>
    </ThemeProvider>
  </>);
}

export default App;
