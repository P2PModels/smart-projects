import { authHeader } from '../helpers';

export const projectService = {
    add,
    getAll,
    getById,
    update,
    delete: _delete,
    addParticipant,
    removeParticipant,
};

const apiUrl = process.env.REACT_APP_API_URL

function getAll() {
    const requestOptions = {
        method: 'GET',
        //headers: authHeader()
    };

    return fetch(`${apiUrl}/projects`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        //headers: authHeader()
    };

    return fetch(`${apiUrl}/projects/${id}`, requestOptions).then(handleResponse);
}

function add(project) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
    };

    return fetch(`${apiUrl}/projects`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/projects/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/projects/${id}`, requestOptions).then(handleResponse);
}

function addParticipant(project, user) {

  const requestOptions = {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify({newParticipant: user.id})
  };

  return fetch(`${apiUrl}/projects/${project.id}`, requestOptions).then(handleResponse);;
}

function removeParticipant(project, user) {
  const requestOptions = {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify({removeParticipant: user.id})
  };

  return fetch(`${apiUrl}/projects/${project.id}`, requestOptions).then(handleResponse);;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
