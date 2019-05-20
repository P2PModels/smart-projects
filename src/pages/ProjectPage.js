import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import {projectActions} from '../actions'
import Layout from '../components/Layout'

function Profile({title}) {
  return <li>{title}</li>
}

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
console.log(imgs[0])
  return (
    <Layout title={name} subtitle={summary} background={imgs[0]}>
      <div className={classes.imgBlock}>
        <img src={imgs[1]} alt={t('Project image')} />
        <img src={imgs[2]} alt={t('Project image')} />
      </div>
      <h1>{name}</h1>
      <a href={url}>{url}</a>
      <h2>{t('About us')}</h2>
      {description}
      <h2>{t('Our needs')}</h2>
      {needs}

      <h2>Ponte en contacto con nosotras si eres</h2>
      <ul>
        {lookingFor.map(profile => <Profile title={profile} />)}
      </ul>
      {user ?
        !participants.includes(user.id) ?
          <Button variant="contained" color="primary" onClick={join}>{t('Join')}</Button> :
          <Button variant="contained" color="primary" onClick={leave}>{t('Leave')}</Button>
        : null}
    </Layout>
  )
}

export default withStyles(styles)(ProjectPage)
