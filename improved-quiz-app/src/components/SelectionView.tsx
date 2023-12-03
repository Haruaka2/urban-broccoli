import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import * as Styles from '../utils/SxStyles';
import { SelectionViewProps } from '../types/UiTypes';
import { Configuration, Category, DifficultyEnum, QuestionTypeEnum } from '../types/ApiTypes';
import { AppViewEnum, Q_CATEGORIES } from '../utils/Constants';
import { getTrivaQuestions } from '../utils/GenUtils';

const SelectionView: React.FC<SelectionViewProps> = ({
  setView,
  setQuestions,
  setResults,
}) => {
  const defaultConfig = {
    amount: 10,
    category: 0,
    difficulty: DifficultyEnum.ALL,
    type: QuestionTypeEnum.MULTIPLE
  }
  const [config, setConfig] = useState<Configuration>(defaultConfig);
  
  const onReset = () => setConfig(defaultConfig);
  const onChange = (key: string, val: string) => setConfig({
    ...config,
    [key]: val
  });
  const onSubmit = () => {
    console.log("WHAT IS CONFIG: ", config);
    Promise.resolve(getTrivaQuestions(config.amount, config.category, 
      config.difficulty, config.type)).then(data => {
        setQuestions(data);
        setResults({
          correct: 0,
          incorrect: 0,
          total: data.length
        });
      });
    setView(AppViewEnum.QUIZ);
  }

  return (<>
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField id="outlined-basic" 
                     label="Amount of Questions" 
                     variant="outlined"
                     fullWidth={true}
                     inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                     value={config.amount}
                     onChange={e => onChange("amount", e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel> Question Category </InputLabel>
            <Select labelId="question-drpdwn-label"
                    id="question-drpdwn"
                    value={config.category}
                    onChange={e => onChange("category", e.target.value.toString())}
                    label="Question Category">
              {
                Q_CATEGORIES.map((cat: Category) => {
                  return <MenuItem key={"id-" + cat.id} value={cat.id}> {cat.label} </MenuItem>
                })
              }
            </Select>
          </FormControl>
        </Grid>
  
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel> Difficulty </InputLabel>
            <Select labelId="difficulty-drpdwn-label"
                    id="difficulty-drpdwn"
                    value={config.difficulty}
                    onChange={e => onChange("difficulty", e.target.value)}
                    label="Difficulty">
              {
                [DifficultyEnum.ALL, DifficultyEnum.EASY, DifficultyEnum.MEDIUM, DifficultyEnum.HARD].map(
                  (diff: string) => {
                  return <MenuItem key={"id-" + diff} value={diff}> {diff.toUpperCase()} </MenuItem>
                })
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
        <FormControl fullWidth>
            <InputLabel> Question Type </InputLabel>
            <Select labelId="type-drpdwn-label"
                    id="type-drpdwn"
                    disabled={true}
                    value={config.type}
                    onChange={e => onChange("type", e.target.value)}
                    label="Question Types">
              {
                [QuestionTypeEnum.ALL, QuestionTypeEnum.MULTIPLE, QuestionTypeEnum.TORF].map(
                  (qType: string) => {
                  return <MenuItem key={"id-" + qType} value={qType}> {qType.toUpperCase()} </MenuItem>
                })
              }
            </Select>
          </FormControl>
        </Grid>
 
     
        <Grid item xs={6}>
          <Button variant="contained" onClick={onReset}>Reset</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={onSubmit}>Begin Quiz</Button>
        </Grid>
        </Grid>
    </Container>
  </>);
}

export default SelectionView;
