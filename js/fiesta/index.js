let free = false;

const validarCliente = (time) => {
  let edad = Number(prompt('¿Cual es tu edad?'));

  if (edad >= 18) {
    if (time > 2 && time < 7 && !free) {
      alert('Puedes pasar gratis');
      free = true;
    } else {
      alert('pasa a pagar la entrada ');
    }
  } else {
    alert('No eres mayor de edad');
  }
};
