import React, { useContext } from 'react'
import ProjectList from '../components/ProjectList'
import { Context } from '../context'

function Home() {
  const {state: {user, projects}} = useContext(Context)

  const isMyProject = project => project.organizer === user || project.participants.includes(user)
  const myProjects = Object.values(projects).filter(isMyProject)
  const notMyProjects = Object.values(projects).filter(p => !isMyProject(p))

  return (
    <div>
      {user &&
        <div>
          <h1>Your Projects</h1>
          <ProjectList projects={myProjects} showNewProjectTile={true} />
        </div>
      }
      {user && <h1>New Projects</h1>}
      <ProjectList projects={notMyProjects} />
    </div>
  )
}

export default Home
