import React, { useEffect } from 'react'
import ProjectList from '../components/ProjectList'
import { projectActions } from '../actions'
import Layout from '../components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';

function Home() {
  const user = useSelector(state => state.authentication.user)
  const projects = useSelector(state => state.projects.items) || []
  const dispatch = useDispatch()
  const { t } = useTranslation('App')

  const isMyProject = project => user && (project.organizer === user.id || project.participants.includes(user.id))
  const myProjects = projects.filter(isMyProject)
  const notMyProjects = projects.filter(p => !isMyProject(p))

  const title = t('Join the SmartIb Community of Creative Workers on Blockchain')
  const subtitle = t('Support projects, find opportunities')

  useEffect(() => {
    dispatch(projectActions.getAll());
  }, [])

  return (
    <Layout title={title} subtitle={subtitle} background="/images/header-1.png">
      {user &&
        <div>
          <h1>{t('Your Projects')}</h1>
          <ProjectList projects={myProjects} showNewProjectTile={true} />
        </div>
      }
      {user && <h1>{t('New Projects')}</h1>}
      <ProjectList projects={notMyProjects} />
    </Layout>
  )
}

export default Home
