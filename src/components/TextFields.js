import React from 'react'

import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  largerInputRoot: {
    fontSize: '1.8rem',
  },
  largerLabelRoot: {
    fontSize: '1.8rem',
  },
  smallerInputRoot: {
    fontSize: '0.7rem',
  },
  smallerLabelRoot: {
    fontSize: '0.7rem',
  },
}

export const LargerTextField = withStyles(styles)(({ ...props }) => (
  <TextField
    {...props}
    InputProps={{ classes: { root: props.classes.largerInputRoot } }}
    InputLabelProps={{
      FormLabelClasses: {
        root: props.classes.largerLabelRoot,
      },
    }}
  />
))

export const SmallerTextField = withStyles(styles)(({ ...props }) => (
  <TextField
    {...props}
    InputProps={{ classes: { root: props.classes.smallerInputRoot } }}
    InputLabelProps={{
      FormLabelClasses: {
        root: props.classes.smallerLabelRoot,
      },
    }}
  />
))
