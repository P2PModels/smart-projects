import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { projectActions } from '../actions'
import Layout from '../components/Layout'
import { LargerTextField, SmallerTextField } from '../components/TextFields'
import { save, url as ipfsUrl } from '../helpers/ipfs'
import { makeStyles } from '@material-ui/core/styles'

const UploadButton = ({ setImage }) => (
  <Button variant="outlined" component="label">
    Upload Image
    <input
      type="file"
      onChange={e => setImage(e.target.files[0])}
      accept="image/x-png,image/gif,image/jpeg"
      style={{ display: 'none' }}
    />
  </Button>
)

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    background: theme.palette.secondary.main,
  },
}))

const DropdownZone = ({ image, setImage }) => {
  const classes = useStyles()
  return (
    <div
      className={classes.box}
      style={{ backgroundImage: `url(${ipfsUrl(image)})` }}
    >
      <UploadButton setImage={setImage} />
    </div>
  )
}

function ProjectFormPage({ history }) {
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
        imgs: [bgImage, image1, image2],
      })
    )
    history.push('/')
  }

  const [name, setName] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [needs, setNeeds] = useState('')

  const saveImg = setImage => file => {
    save(file).then(hashes => setImage(`/ipfs/${hashes[0]}`))
  }

  const [bgImage, setBgImage] = useState()
  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const saveBgImage = saveImg(setBgImage)
  const saveImage1 = saveImg(setImage1)
  const saveImage2 = saveImg(setImage2)

  return (
    <form onSubmit={handleNewProject}>
      <Layout
        background={ipfsUrl(bgImage)}
        title={
          <LargerTextField
            inputProps
            variant="outlined"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Project Name"
          />
        }
        subtitle={
          <React.Fragment>
            <TextField
              variant="outlined"
              name="summary"
              value={summary}
              onChange={e => setSummary(e.target.value)}
              placeholder="What is your project about?"
            />
            <br />
            <UploadButton setImage={img => saveBgImage(img)} />
          </React.Fragment>
        }
      >
        <Container>
          <Typography variant="h2">{name || 'Project Name'}</Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <SmallerTextField
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
                <DropdownZone image={image1} setImage={saveImage1} />
              </Grid>
              <Grid item>
                <DropdownZone image={image2} setImage={saveImage2} />
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
            <span role="img" aria-labelledby="good-luck">
              🤞
            </span>
            <span id="good-luck">Crossing fingers</span>
          </Typography>
        </Container>
      </Layout>
    </form>
  )
}

export default withRouter(ProjectFormPage)
