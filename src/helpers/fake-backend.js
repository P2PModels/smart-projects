import fakeProjects from './fake-projects'

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || []
let projects = JSON.parse(localStorage.getItem('projects')) || fakeProjects

export function configureFakeBackend() {
  let realFetch = window.fetch
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate
        if (url.endsWith('/login') && opts.method === 'POST') {
          // get parameters from post request
          let params = JSON.parse(opts.body)

          // find if any user matches login credentials
          let filteredUsers = users.filter(user => {
            return (
              (user.username === params.usernameOrEmail ||
                user.email === params.usernameOrEmail) &&
              user.password === params.password
            )
          })

          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0]
            let responseJson = {
              id: user.id,
              email: user.email,
              name: user.name,
              token: 'fake-jwt-token',
            }
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson)),
            })
          } else {
            // else return error
            reject(Error('Username or password is incorrect'))
          }

          return
        }

        // get users
        if (url.endsWith('/users') && opts.method === 'GET') {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users)),
            })
          } else {
            // return 401 not authorised if token is null or invalid
            reject(Error('Unauthorised'))
          }

          return
        }

        // get user by id
        if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            // find user by id in users array
            let urlParts = url.split('/')
            let id = parseInt(urlParts[urlParts.length - 1])
            let matchedUsers = users.filter(user => {
              return user.id === id
            })
            let user = matchedUsers.length ? matchedUsers[0] : null

            // respond 200 OK with user
            resolve({ ok: true, text: () => JSON.stringify(user) })
          } else {
            // return 401 not authorised if token is null or invalid
            reject(Error('Unauthorised'))
          }

          return
        }

        // register user
        if (url.endsWith('/users/register') && opts.method === 'POST') {
          // get new user object from post body
          let newUser = JSON.parse(opts.body)

          // validation
          let duplicateUser = users.filter(user => {
            return user.email === newUser.email
          }).length
          if (duplicateUser) {
            reject(Error('Username "' + newUser.email + '" is already taken'))
            return
          }

          // save new user
          newUser.id = users.length
            ? Math.max(...users.map(user => user.id)) + 1
            : 1
          users.push(newUser)
          localStorage.setItem('users', JSON.stringify(users))

          // respond 200 OK
          resolve({ ok: true, text: () => Promise.resolve() })

          return
        }

        // delete user
        if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            // find user by id in users array
            let urlParts = url.split('/')
            let id = parseInt(urlParts[urlParts.length - 1])
            for (let i = 0; i < users.length; i++) {
              let user = users[i]
              if (user.id === id) {
                // delete user
                users.splice(i, 1)
                localStorage.setItem('users', JSON.stringify(users))
                break
              }
            }

            // respond 200 OK
            resolve({ ok: true, text: () => Promise.resolve() })
          } else {
            // return 401 not authorised if token is null or invalid
            reject(Error('Unauthorised'))
          }

          return
        }

        // get projects
        if (url.endsWith('/projects') && opts.method === 'GET') {
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(projects)),
          })
          return
        }

        // add project
        if (url.endsWith('/projects') && opts.method === 'POST') {
          // get new project object from post body
          let newProject = JSON.parse(opts.body)

          // save new project
          newProject.id = users.length
            ? Math.max(...projects.map(project => project.id)) + 1
            : 1
          projects.push(newProject)
          localStorage.setItem('users', JSON.stringify(projects))

          // respond 200 OK
          resolve({ ok: true, text: () => Promise.resolve() })

          return
        }

        // add/remove participant
        if (url.match(/\/projects\/\d+$/) && opts.method === 'PUT') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            // get parameters from post request
            let params = JSON.parse(opts.body)
            // find project by id in projects array
            let urlParts = url.split('/')
            let id = parseInt(urlParts[urlParts.length - 1])
            for (let i = 0; i < projects.length; i++) {
              let project = projects[i]
              if (project.id === id) {
                // add/remove user
                projects[i].participants.push(params.newParticipant)
                projects[i].participants = projects[i].participants.filter(
                  p => p !== params.removeParticipant
                )
                localStorage.setItem('projects', JSON.stringify(projects))
                break
              }
            }

            // respond 200 OK
            resolve({ ok: true, text: () => Promise.resolve() })
          } else {
            // return 401 not authorised if token is null or invalid
            reject(Error('Unauthorised'))
          }

          return
        }

        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response))
      }, 500)
    })
  }
}
