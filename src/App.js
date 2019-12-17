import React, { useState } from 'react'
import shuffle from 'array-shuffle'
// Material core
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
// App components
import Card from './Card'
import data from './data'
import theme from './theme'
import Settings from './Settings'
import CardContents from './CardContents'

const testData = {
  question: 'え',
  answer: 'e',
  choices: ['a', 'ki', 'ku', 'e'],
  answered: 11,
  correct: 7
}

function ThemeContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth='xs'>{props.children}</Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

const defaultSettings = {
  type: 'recall',
  studying: {
    1: true,
    2: true,
    3: false
  },
  kana: 'hiragana'
}

function App() {
  const input = () =>
    shuffle(data.map(item => ({ ...item, answered: 0, correct: 0 })))
  const [deck, setDeck] = useState(input)
  const [settings, setSettings] = useState(defaultSettings)
  const [drawer, setDrawer] = useState(false)

  function handleSettingsSubmit(newSettings) {
    setSettings(newSettings)
  }

  function handleDrawer(value) {
    setDrawer(value)
  }

  return (
    <ThemeContainer>
      <Settings
        settings={settings}
        drawer={drawer}
        onDrawerChange={handleDrawer}
        onSubmit={handleSettingsSubmit}
      />
      <Card
        correct={testData.correct}
        answered={testData.answered}
        onClick={() => handleDrawer(true)}>
        <CardContents data={testData} />
      </Card>
    </ThemeContainer>
  )
}

export default App
