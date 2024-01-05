const alumnos = [
  {
    id: 1,
    nombre: 'Javier Perez',
    correo: 'javier@example.com',
    materia: 'Programación',
    semana: 1
  },
  {
    id: 2,
    nombre: 'Jorge Hernandez',
    correo: 'jorge@example.com',
    materia: 'JavaScript',
    semana: 1
  },
  {
    id: 3,
    nombre: 'Carlos Hernandez',
    correo: 'carlos@example.com',
    materia: 'HTML',
    semana: 1
  },
  {
    id: 4,
    nombre: 'Luis Fernandez',
    correo: 'luis@example.com',
    materia: 'Programación',
    semana: 1
  },
  {
    id: 5,
    nombre: 'Carlos Correa',
    correo: 'carlos@example.com',
    materia: 'PHP',
    semana: 1
  },
  {
    id: 6,
    nombre: 'Santiago Sanchez',
    correo: 'santiago@example.com',
    materia: 'Python',
    semana: 1
  }
];

const fragment = document.createDocumentFragment();

for (let alumno of alumnos) {
  const tableRow = document.createElement('tr');

  tableRow.id = alumno.id;

  tableRow.innerHTML = `<td>${alumno.nombre}</td>
<td>${alumno.correo}</td>
<td>${alumno.materia}</td>
<td class="semana">
  <select>
    <option value="Semana 1">Semana 1</option>
    <option value="Semana 2">Semana 2</option>
    <option value="Semana 3">Semana 3</option>
    <option value="Semana 4">Semana 4</option>
  </select>
</td>`;

  fragment.appendChild(tableRow);
}

document.getElementById('table-body').appendChild(fragment);

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let isConfirmed = confirm('¿Desea guardar los cambios?');

  if (isConfirmed) {
    const semanas = document.querySelectorAll('.semana');
    const selectores = document.querySelectorAll('select');

    for (let i = 0; i < semanas.length; i++) {
      semanas[i].innerHTML = `<b>${selectores[i].value}</b>`;
    }
  }
});
