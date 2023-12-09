import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { ResultViewProps } from '../types/UiTypes';
import { AppViewEnum } from '../utils/Constants';
import { Typography } from '@mui/material';
import * as Styles from "../utils/SxStyles";

const ResultView: React.FC<ResultViewProps> = ({
  results,
  setView
}) => {
  const onRestart = () => setView(AppViewEnum.QUIZ);
  const onReset = () => setView(AppViewEnum.SELECTION);

  return (<>
    <Container maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={Styles.result}> You got {results.correct} / {results.total} correct.</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth onClick={onRestart}>
            Restart Quiz
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" fullWidth onClick={onReset}>
            Begin New Quiz
          </Button>
        </Grid>
      </Grid>
    </Container>
  </>);
}

export default ResultView;