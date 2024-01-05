function queHeladoMeAlcanza(dinero) {
  let msj, resto;

  if (dinero >= 0.6 && dinero < 1) {
    resto = dinero - 0.6;
    msj = 'helado de agua' + '\nresto: ' + resto;
  } else if (dinero >= 1 && dinero < 1.6) {
    resto = dinero - 1;
    msj = 'helado de crema' + '\nresto: ' + resto;
  } else if (dinero >= 1.6 && dinero < 1.7) {
    resto = dinero - 1.6;
    msj = 'helado de helado' + '\nresto: ' + resto;
  } else if (dinero >= 1.7 && dinero < 1.8) {
    resto = dinero - 1.7;
    msj = 'helado de helado con helado' + '\nresto: ' + resto;
  } else if (dinero >= 1.8 && dinero < 1.9) {
    resto = dinero - 1.8;
    msj = 'helado de helado con helado y crema' + '\nresto: ' + resto;
  } else if (dinero >= 2.9) {
    resto = dinero - 2.9;

    msj = 'pote confitado o pote de 1/4 de kg' + '\nresto: ' + resto;
  } else {
    msj = 'No me alcanza';
  }

  return msj;
}

let dinero = Number(prompt('¿Cuanto dinero tienes?'));

alert(queHeladoMeAlcanza(dinero));
