import React from 'react'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
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
})

export const LargerTextField = ({ ...props }) => {
  const classes = useStyles()
  return (
    <TextField
      {...props}
      InputProps={{ classes: { root: classes.largerInputRoot } }}
      InputLabelProps={{
        FormLabelClasses: {
          root: classes.largerLabelRoot,
        },
      }}
    />
  )
}

export const SmallerTextField = ({ ...props }) => {
  const classes = useStyles()
  return (
    <TextField
      {...props}
      InputProps={{ classes: { root: classes.smallerInputRoot } }}
      InputLabelProps={{
        FormLabelClasses: {
          root: classes.smallerLabelRoot,
        },
      }}
    />
  )
}
