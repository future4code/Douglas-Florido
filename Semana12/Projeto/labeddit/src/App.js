import React from 'react'
import Router from './Routes/Router'
import {theme} from './Constants/Theme'
import { ThemeProvider} from '@material-ui/core/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
