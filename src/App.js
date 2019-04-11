import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import ProjectList from './components/ProjectList'
import { Context } from './context'

function App() {
  const {state: {user, projects}, dispatch} = useContext(Context)


  const projectAction = projectId => {
    const project = projects[projectId]
    if (project) {
      dispatch({
        type: !project.participants.includes(user) ? 'ADD_PARTICIPANT' : 'REMOVE_PARTICIPANT',
        project,
        user
      })
    }
  }

  return (
    <div>
      <NavBar title="Smart Projects" />
      <ProjectList projects={Object.values(projects)} onAction={projectAction} />
    </div>

  )
}
export default App
