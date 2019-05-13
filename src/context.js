import * as React from "react";

let Context = React.createContext();

let nextId = 0;

export function createProject(project) {
  const id = nextId++
  const participants = []
  const summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  const imgs = [
    `https://placeimg.com/640/480/any/${project.name}`,
    `https://placeimg.com/640/480/any/${project.name}-1`,
    `https://placeimg.com/640/480/any/${project.name}-2`,
  ]
  const lookingFor = [
    "Profe de música",
    "Psicóloga/o infantil"
  ]

  return { ...project, id, participants, imgs, lookingFor, summary };
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
    case "ADD_PROJECT": {
      const newState = { ...state, projects: {...state.projects, [nextId]: createProject(action.project)}}
      console.log(newState)
      return newState
    }
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

const lorem1 = `Koríkoko es el nombre de un colectivo de creadores y artistas en todos los ámbitos que creemos en la expresión artística como vehículo fundamental de conocimiento y de crecimiento durante la infancia.

Músicos, artistas plásticos, psicólogos y escritores conformamos este equipo de trabajo que comparte la ilusión por contribuir al desarrollo integral y feliz del individuo y que apuesta por la infancia como garantía de futuro.`

const lorem2 = `Korikoko nace con la ilusión y el objetivo de intervenir en la infancia potenciando todas las cualidades propias de este periodo vital como el desarrollo cognitivo, la creatividad y la inteligencia emocional que intervienen en la salud, el crecimiento y la felicidad de los niños.

Para un nuevo proyecto en XXXX centro educativo necesitamos:
*	Un/a profesor/a de música para una escuela en Boadilla.
*	Un/a psicóloga infantil
*	Un/a musicoterapeuta
`

function populateInitalState() {
    let state = {...initialState}
    let description = lorem1
    let needs = lorem2
    let url = 'http://p2pmodels.eu'
    const populate = (name, user, areas) => reducer(state, {type: 'ADD_PROJECT', project: {name, user, areas, description, needs, url}})
    state = populate('Carrera 10k', 'Silvia', ['spòrts', 'health'])
    state = populate('Hackathon Cryptoostrom', 'David', ['commons', 'work'])
    state = populate('Cineforum', 'Jordi', ['culture', 'cinema'])
    state = populate('Karaoke', 'Sem', ['party'])
    state = populate('Cumple de Leo', 'Elena', ['party'])
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
