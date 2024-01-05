/* const block1 = document.createElement('div');
const block2 = document.createElement('p');

block1.innerText = 'holanda';
block1.id = 'bloque';
block2.innerText = 'Que tal amigos';
block2.id = 'parrafo';

document.body.append(block1);
document.body.append(block2);

document.write(block1);
document.write('<br>');
document.write(block2);

const elementDiv = document.querySelectorAll('p');
document.write('<br>');
document.write(elementDiv[0]);
 */

// const rangoEtario = document.querySelector('.rangoEtario');

// rangoEtario.setAttribute('min', '0');
// rangoEtario.setAttribute('step', '25');
// rangoEtario.setAttribute('max', '100');

// rangoEtario.setAttribute('type', 'color');

// document.write('<br>');
// document.write(rangoEtario.getAttribute('type'));
// rangoEtario.removeAttribute('type');

/* const title = document.querySelector('.title');

title.classList.add('grande');
title.classList.add('rojo');
title.classList.remove('title');
title.classList.add('sans');
title.classList.remove('grande', 'rojo');

title.classList.toggle('rojo', false);

let valor = title.classList.item(1);

document.write('<br>');
document.write(valor);

let existeGrande = title.classList.contains('grande');

document.write('<br>');
if (existeGrande) {
  document.write('existe');
} else {
  document.write('no existe');
}
 */

const titulo = document.querySelector('.title');

titulo.textContent = 'NUEVO TITULO';
