import * as React from "react";

let Context = React.createContext();

let nextId = 0;
export function createProject(name, organizer) {
  const id = nextId++
  const participants = []
  return { id, name, organizer, participants };
}

let initialState = {
  user: null,
  projects: {
  }
};

let reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.user};
    case "LOGOUT":
      return { ...state, user: null };
    case "ADD_PROJECT":
      return { ...state, projects: {...state.projects, [nextId]: createProject(action.project, action.user)}}
    case "ADD_PARTICIPANT": {
      const {project, user} = action
      const participants = [...project.participants, user]
      return {...state, projects: {...state.projects, [project.id]: {...project, participants}}}
    }
    case "REMOVE_PARTICIPANT": {
      const {project, user} = action
      const participants = project.participants.filter(p => p !== user)
      return {...state, projects: {...state.projects, [project.id]: {...project, participants}}}
    }
    default:
      return state
  }
};

function populateInitalState() {
    let state = {...initialState}
    const populate = (name, user) => reducer(state, {type: 'ADD_PROJECT', project: name, user})
    state = populate('Carrera 10k', 'Silvia')
    state = populate('Hackathon Cryptoostrom', 'David')
    state = populate('Cineforum', 'Jordi')
    state = populate('Karaoke', 'Sem')
    state = populate('Cumple de Leo', 'Elena')
    return state
}

function ContextProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, populateInitalState());
  let value = { state, dispatch };

  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  );
}

let ContextConsumer = Context.Consumer;

export { Context, ContextProvider, ContextConsumer };
