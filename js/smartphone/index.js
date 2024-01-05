class Smartphone {
  constructor(color, peso, pantalla, camara, ram) {
    this.color = color;
    this.peso = peso;
    this.pantalla = pantalla;
    this.camara = camara;
    this.ram = ram;
    this.encendido = false;
  }

  presionarBotonDeEncendido() {
    if (!this.encendido) {
      this.encendido = true;
      alert('Smartphone prendido');
    } else {
      alert('Smartphone Apagado');
      this.encendido = false;
    }
  }

  reiniciar() {
    if (this.encendido) {
      alert('Smartphone Reiniciando');
    } else {
      alert('Smartphone Apagado');
    }
  }

  tomarFoto() {
    alert(`Foto Tomada con una resolución de ${this.camara}`);
  }

  grabarVideo() {
    alert(`Grabando video en ${this.camara}`);
  }

  infoMovil() {
    return `
    Información del Smartphone:
    <ul>
    <li>Color: <b>${this.color}</b></li>
    <li>Peso: <b>${this.peso}</b></li>
    <li>Tamaño de pantalla: <b>${this.pantalla}</b></li>
    <li>Resolución de cámara: <b>${this.camara}</b></li>
    <li>Memoria RAM: <b>${this.ram}</b></li>
    </ul>
    `;
  }
}

let celularA = new Smartphone('negro', '150g', "5.6'", 'HD', '4MP', '2GB');
let celularB = new Smartphone('blanco', '197g', "5.8'", 'FULL HD', '4GB');
let celularC = new Smartphone('rojo', '200g', "6.1'", '4K', '4GB');

document.write(celularA.infoMovil());
document.write(celularB.infoMovil());
document.write(celularC.infoMovil());

class SmartphoneAltaGama extends Smartphone {
  constructor(color, peso, pantalla, camara, ram, rdce) {
    super(color, peso, pantalla, camara, ram);
    this.rdce = rdce;
  }

  grabarVideoLento() {
    alert(`Grabando video en camara lenta en ${this.camara}`);
  }

  reconocimientoFacial() {
    alert('Reconocimiento facial activado');
  }

  infoMovilAltaGama() {
    const info = this.infoMovil().split('</ul>').join('');

    return (
      info + `<li>Resolución de cámara trasera: <b>${this.rdce}</b></li></ul>`
    );
  }
}

let celularD = new SmartphoneAltaGama(
  'negro',
  '200g',
  "6.1'",
  '4K',

  '16GB',
  '64MP'
);
let celularE = new SmartphoneAltaGama(
  'plateado',
  '187g',
  "6.2'",
  'FULL HD/4K',

  '16GB',
  '128MP'
);

document.write(celularD.infoMovilAltaGama());
document.write(celularE.infoMovilAltaGama());

celularD.grabarVideoLento();
