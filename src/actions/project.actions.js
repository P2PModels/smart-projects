import { projectConstants } from '../constants'
import { projectService } from '../services'
import { alertActions } from './'

export const projectActions = {
  add,
  getAll,
  delete: _delete,
  addParticipant,
  removeParticipant,
}

function add(project) {
  return dispatch => {
    dispatch(request(project))

    projectService.add(project).then(
      project => {
        dispatch(success())
        dispatch(alertActions.success('Your new project rocks!'))
      },
      error => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(project) {
    return { type: projectConstants.ADD_REQUEST, project }
  }
  function success(project) {
    return { type: projectConstants.ADD_SUCCESS, project }
  }
  function failure(error) {
    return { type: projectConstants.ADD_FAILURE, error }
  }
}

function getAll() {
  return dispatch => {
    dispatch(request())

    projectService
      .getAll()
      .then(
        projects => dispatch(success(projects)),
        error => dispatch(failure(error.toString()))
      )
  }

  function request() {
    return { type: projectConstants.GETALL_REQUEST }
  }
  function success(projects) {
    return { type: projectConstants.GETALL_SUCCESS, projects }
  }
  function failure(error) {
    return { type: projectConstants.GETALL_FAILURE, error }
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id))

    projectService
      .delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      )
  }

  function request(id) {
    return { type: projectConstants.DELETE_REQUEST, id }
  }
  function success(id) {
    return { type: projectConstants.DELETE_SUCCESS, id }
  }
  function failure(id, error) {
    return { type: projectConstants.DELETE_FAILURE, id, error }
  }
}

function addParticipant(project, user) {
  return dispatch => {
    dispatch(request(project, user))

    projectService.addParticipant(project, user).then(
      _project => {
        dispatch(success(project, user))
        dispatch(
          alertActions.success(
            'You will be contacted by the project organizer soon.'
          )
        )
      },
      error => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(project, user) {
    return { type: projectConstants.ADD_PARTICIPANT_REQUEST, project, user }
  }
  function success(project, user) {
    return { type: projectConstants.ADD_PARTICIPANT_SUCCESS, project, user }
  }
  function failure(error) {
    return { type: projectConstants.ADD_PARTICIPANT_FAILURE, error }
  }
}

function removeParticipant(project, user) {
  return dispatch => {
    dispatch(request(project, user))

    projectService.removeParticipant(project, user).then(
      _project => {
        dispatch(success(project, user))
        dispatch(alertActions.success('We hope to see you again soon.'))
      },
      error => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(project, user) {
    return { type: projectConstants.REMOVE_PARTICIPANT_REQUEST, project, user }
  }
  function success(project, user) {
    return { type: projectConstants.REMOVE_PARTICIPANT_SUCCESS, project, user }
  }
  function failure(error) {
    return { type: projectConstants.REMOVE_PARTICIPANT_FAILURE, error }
  }
}
