import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import shuffle from 'array-shuffle'
import theme from './theme'
import data from './data'

function App() {
  const input = shuffle(
    data.map(item => ({ ...item, answered: 0, correct: 0 }))
  )

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth='xs'>
          <div>{input[0].hiragana}</div>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
