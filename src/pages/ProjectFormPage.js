import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { projectActions } from '../actions'

const styles = theme => ({
  header: {
    color: 'white',
    backgroundColor: 'black',
    minHeight: '480px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imgBlock: {
    float: 'right',
    "& img": {
      display: 'block',
    },
  },
});

function ProjectFormPage({ classes, history }) {
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch()
  const { t } = useTranslation('ProjectFormPage')

  if (!user) {
    history.push('/')
  }

  const handleNewProject = event => {
    event.preventDefault()
    dispatch(projectActions.add({
        name, organizer: user.id, summary, url, description, needs
      }))
    history.push('/')
  }

  const [name, setName] = useState("")
  const [summary, setSummary] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")
  const [needs, setNeeds] = useState("")

  return (
    <form onSubmit={handleNewProject}>
      <header className={classes.header}>
        <div>
          <input name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Project Name" />
          <input name="summary" value={summary} onChange={e => setSummary(e.target.value)} placeholder="What is your project about?" />
        </div>
      </header>
      <div className={classes.imgBlock}>
        <div>{t('Upload image')}</div>
        <div>{t('Upload image')}</div>
      </div>
      <input name="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
      <h2>{t('Brief project description')}</h2>
      <textarea onChange={e => setDescription(e.target.value)} value={description}></textarea>
      <h2>{t('What do you need?')}</h2>
      <textarea onChange={e => setNeeds(e.target.value)} value={needs}></textarea>

      <h2>{t('What kind of profiles are you looking for')}</h2>
      <Button onClick={handleNewProject}>Done!</Button>
    </form>
  )
}

export default withRouter(withStyles(styles)(ProjectFormPage))
