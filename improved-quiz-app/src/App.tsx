import React from 'react';
import { Button } from '@mui/material';

const App: React.FC = () => {
  const onClick = () => {
    console.log("Test #1: " );
    console.log("Test #2: " ); 
  }

  return (<>
    <p> An item here. </p>
    <Button onClick={onClick}> Click me here. </Button>
  </>);
}

export default App;
