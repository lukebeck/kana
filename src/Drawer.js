import React from 'react'
// Material core
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
// Material icons
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  drawer: {
    margin: theme.spacing(4),
    width: 225
  },
  close: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(-5),
    marginLeft: 'auto'
  }
}))

export default function KanaDrawer(props) {
  const classes = useStyles()
  const toggleDrawer = value => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    props.onChange(value)
  }

  function handleClose() {
    props.onClose()
    toggleDrawer(false)
  }

  return (
    <Drawer anchor='right' open={props.status} onClose={handleClose}>
      <IconButton
        onClick={handleClose}
        className={classes.close}
        aria-label='close'>
        <CloseIcon />
      </IconButton>
      <Grid
        spacing={2}
        container
        className={classes.drawer}
        role='presentation'
        onKeyDown={toggleDrawer(false)}>
        {props.children.map(child => (
          <Grid item>{child}</Grid>
        ))}
      </Grid>
    </Drawer>
  )
}
