import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import {projectActions} from '../actions'
import Layout from '../components/Layout'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import remark from 'remark'
import remark2react from 'remark-react'

function Profile({title}) {
  return <li>{title}</li>
}

const styles = theme => ({
  root: {
    "& img": {
      display: 'block',
      width: '100%',
    },
  },
  callToAction: {
    minHeight: '200px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

function ProjectPage({ match: { params: { id } }, classes }) {
  const user = useSelector(state => state.authentication.user)
  const projects = useSelector(state => state.projects.items)
  const dispatch = useDispatch()
  const { t } = useTranslation('ProjectPage')
  const project = projects ? projects[id] : {}
  const { name, summary, url, description, needs, imgs = [], lookingFor = [], participants=[] } = project

  useEffect(() => {
    dispatch(projectActions.getAll());
  }, [])

  const join = () => dispatch(projectActions.addParticipant(project, user))
  const leave = () => dispatch(projectActions.removeParticipant(project, user))

  const jsx = remark().use(remark2react).processSync
  const descriptionJSX = jsx(description).contents
  const needsJSX = jsx(needs).contents

  return (
    <Layout title={name} subtitle={summary} background={imgs[0]}>
      <Container>
        <Typography variant="h2">{name}</Typography>
        <Grid className={classes.root} container spacing={2}>
          <Grid item xs>
            <Link rel="noopener" target="_blank" href={url} variant="subtitle1" gutterBottom>{url}</Link>
            <Typography variant="h3" gutterBottom>{t('About us')}</Typography>
            <Typography variant="body1">{descriptionJSX}</Typography>
            <Typography variant="h3" gutterBottom>{t('Our needs')}</Typography>
            <Typography variant="body1">{needsJSX}</Typography>
          </Grid>
          <Grid item sm={5} md={4} container direction="column" spacing={2}>
            <Grid item>
            <img src={imgs[1]} alt={t('Project image')} />
            </Grid>
            <Grid item>
            <img src={imgs[2]} alt={t('Project image')} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.callToAction}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs>
              <Typography variant="h2" color="primary">{t('Ponte en contacto con nosotras si eres')}</Typography>
              <ul>
                {lookingFor.map(profile => <Profile key={profile} title={profile} />)}
              </ul>
            </Grid>
            <Grid item sm={6} className={classes.center}>
              {user ?
                !participants.includes(user.id) ?
                  <Button variant="contained" color="primary" size="large" onClick={join}>{t('Join')}</Button> :
                  <Button variant="contained" color="primary" size="large" onClick={leave}>{t('Leave')}</Button>
                : null}
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(ProjectPage)
