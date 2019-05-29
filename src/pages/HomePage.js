import React, { useEffect } from 'react'
import ProjectList from '../components/ProjectList'
import { projectActions } from '../actions'
import Layout from '../components/Layout'
import Typography from '@material-ui/core/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

function Home() {
  const user = useSelector(state => state.authentication.user)
  const projects = useSelector(state => state.projects.items) || []
  const dispatch = useDispatch()
  const { t } = useTranslation('App')

  const isMyProject = project =>
    user &&
    (project.organizer === user.id || project.participants.includes(user.id))
  const myProjects = projects.filter(isMyProject)
  const notMyProjects = projects.filter(p => !isMyProject(p))

  const title = t(
    'Join the SmartIb Community of Creative Workers on Blockchain'
  )
  const subtitle = t('Support projects, find opportunities')

  useEffect(() => {
    dispatch(projectActions.getAll())
  }, [])

  const header = !user ? 'header-1' : 'header-2'

  return (
    <Layout
      title={title}
      subtitle={subtitle}
      background={`/images/${header}.jpg`}
      overlay={false}
    >
      {user && (
        <div>
          <Typography variant="h3">{t('Your Projects')}</Typography>
          <ProjectList projects={myProjects} showNewProjectTile />
        </div>
      )}
      {user && <Typography variant="h3">{t('New Projects')}</Typography>}
      <ProjectList projects={notMyProjects} />
    </Layout>
  )
}

export default Home
