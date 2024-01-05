const button = document.querySelector('.button');
const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');

container1.addEventListener('click', () => {
  alert('cliqueaste en el contenedor rojo');
})

container2.addEventListener('click', () => {
  alert('cliqueaste en el contenedor azul');
})

button.addEventListener('click', (event) => {
  alert('cliqueaste un boton');
  event.stopPropagation()
})


