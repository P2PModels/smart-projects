import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { projectActions } from '../actions'
import Layout from '../components/Layout'
import { LargerTextField, SmallerTextField } from '../components/TextFields'

const styles = {}

function ProjectFormPage({ classes, history }) {
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch()
  const { t } = useTranslation('ProjectFormPage')

  if (!user) {
    history.push('/')
  }

  const handleNewProject = event => {
    event.preventDefault()
    dispatch(
      projectActions.add({
        name,
        organizer: user.id,
        summary,
        url,
        description,
        needs,
      })
    )
    history.push('/')
  }

  const [name, setName] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [needs, setNeeds] = useState('')

  return (
    <form onSubmit={handleNewProject} className={classes.root}>
      <Layout
        title={
          <LargerTextField
            className={classes.larger}
            inputProps
            variant="outlined"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Project Name"
          />
        }
        subtitle={
          <TextField
            variant="outlined"
            name="summary"
            value={summary}
            onChange={e => setSummary(e.target.value)}
            placeholder="What is your project about?"
          />
        }
      >
        <Container>
          <Typography variant="h2">{name || 'Project Name'}</Typography>
          <Grid container spacing={2}>
            <Grid item xs className={classes.fields}>
              <SmallerTextField
                className={classes.smaller}
                variant="outlined"
                name="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="URL"
              />
              <Typography variant="h4" gutterBottom>
                {t('Brief project description')}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                onChange={e => setDescription(e.target.value)}
                value={description}
                multiline
                rows="4"
                placeholder={t('Add a description')}
              />
              <Typography variant="h4" gutterBottom>
                {t('What do you need?')}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                onChange={e => setNeeds(e.target.value)}
                value={needs}
                multiline
                rows="4"
                placeholder={t('Add a description')}
              />
            </Grid>
            <Grid item sm={5} md={4} container direction="column" spacing={2}>
              <Grid item>
                <img src="" alt={t('Project image')} />
              </Grid>
              <Grid item>
                <img src="" alt={t('Project image')} />
              </Grid>
            </Grid>
          </Grid>

          <h2>{t('What kind of profiles are you looking for')}</h2>
          <Typography align="center" paragraph>
            <Button
              color="primary"
              variant="contained"
              size="large"
              align="center"
              onClick={handleNewProject}
            >
              {t('Done!')}
            </Button>
          </Typography>
          <Typography variant="body2" align="center">
            🤞 Crossing fingers
          </Typography>
        </Container>
      </Layout>
    </form>
  )
}

export default withRouter(withStyles(styles)(ProjectFormPage))
