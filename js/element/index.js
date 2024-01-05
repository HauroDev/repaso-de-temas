const contenedor = document.querySelector('.contenedor');

/* const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
  const texto = document.createTextNode('Esto es una prueba ' + (i + 1));

  fragmento.appendChild(texto);
  fragmento.appendChild(document.createElement('br'));
}

contenedor.appendChild(fragmento);
 */

// const primerHijo = contenedor.firstElementChild;

// console.log(primerHijo);

// const ultimoHijo = contenedor.lastElementChild;

// console.log(ultimoHijo);

// const hijos = contenedor.childNodes;

// console.log(hijos);
// console.log(hijos.length);

// const hijosElementos = contenedor.children;

// console.log(hijosElementos);
// console.log(hijosElementos.length);

// for (const hijo of hijosElementos) {
//   console.log(hijo);
// }

const p = document.createElement('p')
p.innerHTML = 'Párrafo';
const h2_nuevo = document.createElement('h2')
h2_nuevo.innerHTML = 'Titulo';

let h2_antiguo = document.querySelector('.h2');


// contenedor.replaceChild(h2_nuevo, h2_antiguo);
/* contenedor.removeChild(h2_antiguo) */

// let respuesta = contenedor.hasChildNodes()
// console.log(`%c${respuesta}`,respuesta ? 'color: green; font-weight: bold;':'color: red; font-weight: bold;')

// document.write('<br>');
// document.write(h2_antiguo.parentElement)

// // solo en casos muy específicos son distintos

// document.write('<br>');
// document.write(h2_antiguo.parentNode)


console.log(h2_antiguo.nextElementSibling)
console.log(h2_antiguo.nextSibling)

console.log(h2_antiguo.previousElementSibling)
console.log(h2_antiguo.previousSibling)