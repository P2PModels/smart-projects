import React, {useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    backgroundColor: fade(theme.palette.common.white, 0.55),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
  },
});

function LanguageSelector({ classes }) {
  const { i18n } = useTranslation()
  const [ language, setLanguage ] = useState(i18n.language)

  const changeLanguage = lng => {
    setLanguage(lng)
    i18n.changeLanguage(lng)
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <Select
          inputProps={{
            name: 'lang',
            id: 'lang',
          }}
          value={language}
          onChange={event => changeLanguage(event.target.value)}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'es'}>Español</MenuItem>
        </Select>
      </FormControl>
    </form>
    )
}

export default withStyles(styles)(LanguageSelector)
