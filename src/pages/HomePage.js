import React, { useEffect } from 'react'
import ProjectList from '../components/ProjectList'
import { projectActions } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

function Home() {
  const user = useSelector(state => state.authentication.user)
  const projects = useSelector(state => state.projects.items) || []
  const dispatch = useDispatch()

  const isMyProject = project => user && (project.organizer === user.id || project.participants.includes(user.id))
  const myProjects = projects.filter(isMyProject)
  const notMyProjects = projects.filter(p => !isMyProject(p))
console.log(projects, myProjects, notMyProjects)
  useEffect(() => {
    dispatch(projectActions.getAll());
  }, [])

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
