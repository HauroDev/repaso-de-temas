const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formulario);

  const data = {
    fullname: formData.get('fullname'),
    mail: formData.get('mail'),
    materias: formData.getAll('materias')
  };

  const error = ValidarInfoUsuario(data);

  const errorContainer = document.querySelector('.error');

  if (error.status) {
    errorContainer.classList.add('show-error');
    errorContainer.classList.remove('hide-error');

    let msj = '';

    if (error.msj.fullname) {
      msj += error.msj.fullname + '\n';
    }

    if (error.msj.mail) {
      msj += error.msj.mail + '\n';
    }

    if (error.msj.materias) {
      msj += error.msj.materias + '\n';
    }

    errorContainer.innerHTML = msj;
    return;
  } else {
    errorContainer.innerHTML = '';
    errorContainer.classList.remove('show-error');
    errorContainer.classList.add('hide-error');
  }

  console.log(data);
});

function ValidarInfoUsuario(data) {
  let msj = {
    fullname: null,
    mail: null,
    materias: null
  };

  if (!data.fullname) {
    msj.fullname = 'El nombre es requerido';
  } else if (data.fullname.length < 5) {
    msj.fullname = 'El nombre debe tener al menos 5 caracteres';
  } else if (data.fullname.length > 40) {
    msj.fullname = 'El nombre debe tener menos de 20 caracteres';
  }

  if (!data.mail) {
    msj.mail = 'El correo es requerido';
  } else if (!/\S+@\S+\.\S+/.test(data.mail)) {
    msj.mail = 'El correo no es valido';
  }

  if (!data.materias) {
    msj.materias = 'Las materias son requeridas';
  } else if (data.materias.length !== 2) {
    msj.materias = 'Solo puede escoger dos materias';
  }

  if (msj.fullname || msj.mail || msj.materias) {
    return {
      status: true,
      msj
    };
  }

  return {
    status: false,
    msj
  };
}
