const buttonSubmit = document.querySelector('input[type="submit"]');

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('show');
});

function abrirModal(status, mensaje) {
  const parrafo = document.createElement('p');

  const contenido = document.querySelector('.modal-content');

  if (contenido.hasChildNodes()) {
    document.querySelector('.modal-content').innerHTML = '';
  }

  parrafo.style.textShadow = '1px 1px 1px black';

  switch (status) {
    case 'error':
      parrafo.style.color = 'red';
      break;
    case 'warning':
      parrafo.style.color = 'yellow';
      break;
    case 'success':
      parrafo.style.color = 'green';
      break;
  }

  parrafo.textContent = mensaje;
  document.querySelector('.modal-content').appendChild(parrafo);

  document.querySelector('.modal').classList.add('show');
}

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  try {
    const calificacion = document.querySelector(
      'input[name="calificacion"]'
    ).value;

    if (!calificacion) {
      throw new Error('Ingresa una calificación');
    }

    if (typeof +calificacion !== 'number') {
      throw new Error('Ingresa una calificación numérica');
    }

    if (calificacion < 1 || calificacion > 10) {
      throw new Error('Ingresa una calificación entre 1 y 10');
    }

    let status, mensaje;

    if (calificacion <= 5) {
      mensaje = `Reprobaste la materia con un ${calificacion}`;
      status = 'error';
    } else if (calificacion >= 6 && calificacion <= 8) {
      mensaje = `Aprobaste la materia con un ${calificacion}`;
      status = 'warning';
    } else if (calificacion >= 9 && calificacion <= 10) {
      mensaje = `Excelente trabajo aprobaste la materia con un ${calificacion}`;
      status = 'success';
    }

    abrirModal(status, mensaje);
  } catch (error) {
    alert(error.message);
  }
});
