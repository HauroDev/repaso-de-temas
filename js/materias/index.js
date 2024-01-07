const contenedor = document.getElementById('materias');

const materias = [
  {
    id: 1,
    name: 'Algebra',
    nota: 9
  },
  {
    id: 2,
    name: 'Física',
    nota: 8
  },
  {
    id: 3,
    name: 'Química',
    nota: 7
  },
  {
    id: 4,
    name: 'Biología',
    nota: 9
  },
  {
    id: 5,
    name: 'Lógica',
    nota: 10
  },
  {
    id: 6,
    name: 'Programación',
    nota: 9
  }
];

function obtenerMateria(id) {
  return new Promise((resolve, reject) => {
    if (id === undefined) {
      reject('No se recibió el id');
    }

    const materia = materias.find((materia) => {
      return materia.id === id;
    });

    if (materia === undefined) {
      reject('No existe la materia');
    } else {
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 1500);
    }
  });
}

async function mostrarMaterias() {

  let loading = document.createElement('div');

  loading.classList.add('loader');

  contenedor.appendChild(loading);

  try {
    console.time('Tiempo de ejecución');
    const materiasObtenidas = await Promise.all(
      materias.map((materia) => obtenerMateria(materia.id))
    );
    console.timeEnd('Tiempo de ejecución');

    const htmlElements = materiasObtenidas.map((materia) => {
      return `<div class="materia" id="${materia.id}">
          <h3>${materia.name}</h3>
          <p>${materia.nota}</p>
        </div>`;
    });

    contenedor.innerHTML = htmlElements.join('');
  } catch (error) {
    console.log(error);
  }
}

mostrarMaterias();
