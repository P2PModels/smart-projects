import React, { useContext } from 'react'
import { Context } from '../context'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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
  const {state: {user, projects}, dispatch} = useContext(Context)
  const { t } = useTranslation('ProjectPage')
  const project = projects[id]
  const { name, summary, url, description, needs, imgs = [], lookingFor = [] } = project


  const join = () => dispatch({type: 'ADD_PARTICIPANT', project, user})
  const leave = () => dispatch({type: 'REMOVE_PARTICIPANT', project, user})

  return (
    <div>
      <header className={classes.header} style={{backgroundImage: `url("${imgs[0]}")`}}>
        <div>
          <h1>{name}</h1>
          <p>{summary}</p>
        </div>
      </header>
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
        !project.participants.includes(user) ?
          <Button variant="contained" color="primary" onClick={join}>{t('Join')}</Button> :
          <Button variant="contained" color="primary" onClick={leave}>{t('Leave')}</Button>
        : null}
    </div>
  )
}

export default withStyles(styles)(ProjectPage)
