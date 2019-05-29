const lorem1 = `Koríkoko es el nombre de un **colectivo de creadores y artistas** en todos los ámbitos que creemos en la expresión artística como vehículo fundamental de conocimiento y de crecimiento durante la infancia.

Músicos, artistas plásticos, psicólogos y escritores conformamos este equipo de trabajo que comparte la ilusión por contribuir al desarrollo integral y feliz del individuo y que apuesta por la infancia como garantía de futuro.`

const lorem2 = `Korikoko nace con la ilusión y el objetivo de intervenir en la infancia potenciando todas las cualidades propias de este periodo vital como el desarrollo cognitivo, la creatividad y la inteligencia emocional que intervienen en la salud, el crecimiento y la felicidad de los niños.

Para un nuevo proyecto en XXXX centro educativo necesitamos:
*	Un/a profesor/a de música para una escuela en Boadilla.
*	Un/a psicóloga infantil
*	Un/a musicoterapeuta
`

let nextId = 0;

export function createProject(name, organizer, areas) {
  const id = nextId++
  const participants = []
  const summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  const imgs = [
    `https://placeimg.com/640/480/any/${name}`,
    `https://placeimg.com/640/480/any/${name}-1`,
    `https://placeimg.com/640/480/any/${name}-2`,
  ]
  const lookingFor = [
    "Profe de música",
    "Psicóloga/o infantil"
  ]
  let description = lorem1
  let needs = lorem2
  let url = 'http://p2pmodels.eu'

  return { name, organizer, areas, id, participants, imgs, lookingFor, summary, description, needs, url };
}

export default [
  createProject('Carrera 10k', 'Silvia', ['spòrts', 'health']),
  createProject('Hackathon Cryptoostrom', 'David', ['commons', 'work']),
  createProject('Cineforum', 'Jordi', ['culture', 'cinema']),
  createProject('Karaoke', 'Sem', ['party']),
  createProject('Cumple de Leo', 'Elena', ['party']),
]
