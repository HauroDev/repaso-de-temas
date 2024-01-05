class App {
  constructor(cantDownloads, stars, weight) {
    this.cantDownloads = cantDownloads;
    this.stars = stars;
    this.weight = weight;
    this.started = false;
    this.installed = false;
  }

  install() {
    if (!this.installed) {
      this.installed = true;
      if (this.installed) {
        alert('Instalado');
      } else {
        alert('No se pudo instalar');
      }
    } else {
      alert('Ya estaba instalado');
    }
  }

  uninstall() {
    if (this.installed) {
      this.installed = false;
      if (!this.installed) {
        alert('Desinstalado');
      } else {
        alert('No se pudo desinstalar');
      }
    } else {
      alert('No estaba instalado');
    }
  }

  start() {
    if (!this.started && this.installed) {
      alert('Iniciado');
      this.started = true;
    } else {
      alert('Ya estaba iniciado');
    }
  }

  stop() {
    if (this.started && this.installed) {
      alert('Detenido');
      this.started = false;
    } else {
      alert('Ya estaba detenido');
    }
  }

  appInfo() {
    return `
      <li>Cant. descargas: <b>${this.cantDownloads}</b></li>
      <li>Estrellas: <b>${this.stars}/5</b></li>
      <li>Peso: <b>${this.weight}</b></li>
    `;
  }
}

let app = new App('1000', '10', '305mb');

app.install();
app.start();
app.stop();
app.uninstall();

document.write('<p>Información del App:</p>');
document.write(`<ul>${app.appInfo()}</ul>`);
