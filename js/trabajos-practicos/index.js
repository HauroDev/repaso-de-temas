let hogar = 30;
let tps = 100;
let estudio = 100;
let trabajo = 240;
let descanso = 100;
let unidad = 'minutos';

console.log('Tareas:');

for (let i = 0; i < 14; i++) {
  if (i == 0) {
    console.group('%cSemana 1', 'font-weight: bold;');
  }
  console.group(`%cDia ${i + 1}`, 'font-weight: bold;');
  console.log('Trabajo:', trabajo, unidad);
  console.log('Hogar:', hogar, unidad);
  console.log('Descanso:', descanso, unidad);
  console.log('TPS:', tps, unidad);
  console.log('Estudio:', estudio, unidad);
  console.groupEnd();

  if (i == 6) {
    console.groupEnd();
    console.group('%cSemana 2', 'font-weight: bold;');
  }

  if (i == 13) {
    console.groupEnd();
  }
}
