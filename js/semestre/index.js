let materias = {
  algebra: [0.9, 8, 4],
  fisica: [0.12, 7, 3],
  quimica: [0.65, 6, 2],
  biologia: [0.9, 9, 3],
  logica: [0.97, 9, 4],
  programacion: [0.91, 10, 4],
  ingles: [0.89, 7, 3]
};

const estaAprobado = () => {
  for (let materia in materias) {
    let asistencia = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    let aprobado = 0;

    console.log(`%c${materia}`, 'font-weight: bold;');

    if (asistencia >= 0.9) {
      aprobado++;
    }

    if (promedio >= 7 && promedio <= 10) {
      aprobado++;
    }

    if (trabajos >= 3) {
      aprobado++;
    }

    if (aprobado === 3) {
      console.log('%c\tAprobó', 'color: greenyellow;font-weight: bold;');
    } else {
      console.log('%c\tReprobó', 'color: red;font-weight: bold;');
    }
  }
};

estaAprobado();
