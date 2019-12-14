import React, { useState } from 'react'
import SettingsRadioGroup from './SettingsRadioGroup'
import TemporaryDrawer from './TemporaryDrawer'

function Settings(props) {
  const [tempSettings, setTempSettings] = useState(props.settings)

  function handleChange(key, value) {
    const updatedSettings = { ...tempSettings, [key]: value }
    setTempSettings(updatedSettings)
  }

  function handleSubmit() {
    props.onSubmit(tempSettings)
    handleDrawer(false)
  }

  function handleDrawer(value) {
    props.onDrawerChange(value)
  }

  return (
    <TemporaryDrawer
      onClose={handleSubmit}
      onChange={handleDrawer}
      status={props.drawer}>
      <SettingsRadioGroup
        name='Kana'
        options={['hiragana', 'katakana']}
        value={tempSettings.kana}
        onChange={handleChange}
      />
      <SettingsRadioGroup
        name='Type'
        options={['recall', 'recognition']}
        value={tempSettings.type}
        onChange={handleChange}
      />
    </TemporaryDrawer>
  )
}

export default Settings
