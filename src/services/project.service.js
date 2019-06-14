import { authHeader } from '../helpers'
import { userService } from '.'

export const projectService = {
  add,
  getAll,
  getById,
  update,
  delete: _delete,
  addParticipant,
  removeParticipant,
}

const apiUrl = process.env.REACT_APP_API_URL

/*
 * Adapts between frontend and backend definitions of a project
 * server => client: {img_bg, img1, img2} => imgs array
 * client => server: imgs array => {img_bg, img1, img2}
 * FIXME: An adapter should not be required, API should be consistent
 */
function adapt(project, serverToClient = true) {
  /* eslint-disable camelcase */
  if (serverToClient) {
    const { img_bg, img1, img2 } = project
    const imgs = [img_bg, img1, img2]
    let prj = { ...project, imgs }
    delete prj.img_bg
    delete prj.img1
    delete prj.img2
    if (!prj.participants) prj.participants = []
    return prj
  } else {
    const [img_bg, img1, img2] = project.imgs
    let prj = { ...project, img_bg, img1, img2 }
    delete prj.imgs
    return prj
  }
  /* eslint-enable camelcase */
}

function getAll() {
  const requestOptions = {
    method: 'GET',
  }

  return fetch(`${apiUrl}/projects`, requestOptions)
    .then(handleResponse)
    .then(projects => projects.map(project => adapt(project)))
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
  }

  return fetch(`${apiUrl}/projects/${id}`, requestOptions)
    .then(handleResponse)
    .then(project => adapt(project))
}

function add(project) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(adapt(project, true)),
  }

  return fetch(`${apiUrl}/projects`, requestOptions).then(handleResponse)
}

function update(project) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(adapt(project, true)),
  }

  return fetch(`${apiUrl}/projects/${project.id}`, requestOptions).then(
    handleResponse
  )
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  }

  return fetch(`${apiUrl}/projects/${id}`, requestOptions).then(handleResponse)
}

function addParticipant(project, user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ addParticipants: [user.id] }),
  }

  return fetch(`${apiUrl}/projects/${project.id}`, requestOptions).then(
    handleResponse
  )
}

function removeParticipant(project, user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ delParticipants: [user.id] }),
  }

  return fetch(`${apiUrl}/projects/${project.id}`, requestOptions).then(
    handleResponse
  )
}

function handleResponse(response) {
  if (response.status === 401) {
    // auto logout if 401 response returned from api
    userService.logout()
    // window.location.reload(true)
  }
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
