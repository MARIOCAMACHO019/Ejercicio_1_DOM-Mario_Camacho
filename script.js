const botonShowMe = document.getElementsByClassName('showme')[0];
console.log('Botón con clase .showme:', botonShowMe);

const h1Pillado = document.getElementById('pillado');
console.log('h1 con id #pillado:', h1Pillado);

const todosLosP = document.getElementsByTagName('p');
console.log('Todos los elementos p:', todosLosP);

const todosLosPokemon = document.getElementsByClassName('pokemon');
console.log('Todos los elementos con clase .pokemon:', todosLosPokemon);

const allSpans = document.getElementsByTagName('span');
const elementosTestMe = Array.from(allSpans).filter(span => span.dataset.function === 'testMe');
console.log('Todos los elementos con data-function="testMe":', elementosTestMe);

const tercerPersonajeTestMe = elementosTestMe[2];
console.log('El 3er personaje con data-function="testMe":', tercerPersonajeTestMe);