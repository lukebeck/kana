import React, { useState } from 'react'
// App components
import CheckboxGroup from './CheckboxGroup'
import Drawer from './Drawer'
import RadioGroup from './RadioGroup'
import Snackbar from './Snackbar'

const groupings = [
  { group: 1, hiragana: 'あいうえお', katakana: 'アイウエオ' },
  { group: 2, hiragana: 'かきくけこ', katakana: 'カキクケコ' },
  { group: 3, hiragana: 'さしすせそ', katakana: 'サシスセソ' }
]

function Settings(props) {
  const [tempSettings, setTempSettings] = useState(props.settings)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  function handleChange(key, value) {
    const updatedSettings = { ...tempSettings, [key]: value }
    setTempSettings(updatedSettings)
  }

  function handleSubmit() {
    const error = Object.values(tempSettings.studying).filter(v => v).length < 1
    if (error) {
      console.log('error')
      setOpenSnackbar(true)
    } else {
      setOpenSnackbar(false)
      props.onSubmit(tempSettings)
      handleDrawer(false)
    }
  }

  function handleDrawer(value) {
    props.onDrawerChange(value)
  }

  function handleSnackbarClose(event, reason) {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackbar(false)
  }

  return (
    <React.Fragment>
      <Snackbar
        onClose={handleSnackbarClose}
        open={openSnackbar}
        variant='error'
        message='At least one study group must be selected'
      />
      <Drawer
        onClose={handleSubmit}
        onChange={handleDrawer}
        status={props.drawer}>
        <RadioGroup
          name='Kana'
          options={['hiragana', 'katakana']}
          value={tempSettings.kana}
          onChange={handleChange}
        />
        <RadioGroup
          name='Type'
          options={['recall', 'recognition']}
          value={tempSettings.type}
          onChange={handleChange}
        />
        <CheckboxGroup
          kana={tempSettings.kana}
          values={tempSettings.studying}
          data={groupings}
          onChange={handleChange}
        />
      </Drawer>
    </React.Fragment>
  )
}

export default Settings
