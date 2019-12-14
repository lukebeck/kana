import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

function SettingsRadioGroup(props) {
  const name = props.name
  const options = props.options
  const [value, setValue] = useState(props.value)

  const handleChange = event => {
    setValue(event.target.value)
    props.onChange(name.toLowerCase(), event.target.value)
  }

  return (
    <FormControl component='fieldset' fullWidth>
      <FormLabel component='legend'>{name}</FormLabel>
      <RadioGroup
        aria-label={name}
        name={name}
        value={value}
        onChange={handleChange}>
        {options.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item}
            control={<Radio color='primary' />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default SettingsRadioGroup
