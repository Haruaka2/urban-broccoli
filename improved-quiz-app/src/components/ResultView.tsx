import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ResultViewProps } from '../types/UiTypes';
import { AppViewEnum } from '../utils/Constants';

const ResultView: React.FC<ResultViewProps> = ({
  results,
  setView
}) => {
  const onRestart = () => setView(AppViewEnum.QUIZ);
  const onReset = () => setView(AppViewEnum.SELECTION);

  return (<>
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p> You got {results.correct} / {results.total} correct.</p>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={onRestart}>
            Restart Quiz
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={onReset}>
            Begin New Quiz
          </Button>
        </Grid>
      </Grid>
    </Container>
  </>);
}

export default ResultView;