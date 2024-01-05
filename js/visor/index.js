class Modal {
  constructor(modalId, content) {
    // Creación de elementos
    this.modalContain = document.createElement('div');
    this.modalContent = document.createElement('div');
    this.closeButton = document.createElement('button');

    // Variable de control
    this.inserted = false;
    this.visible = false;

    // Configuración del contenedor del modal
    this.modalContain.id = modalId;
    this.modalContain.classList.add('modal-contain', 'hide');

    // Configuración del contenido del modal
    if (content instanceof Node) {
      this.modalContent.appendChild(content);
    } else if (typeof content === 'string') {
      this.modalContent.textContent = content;
    }
    this.modalContent.classList.add('modal-content');

    // Configuración del botón de cerrar
    this.closeButton.innerHTML = 'X';
    this.closeButton.classList.add('close-button');
    this.closeButton.addEventListener('click', () => {
      this.hideModal();
    });

    // Agregar elementos al contenedor del modal
    this.modalContain.appendChild(this.modalContent);
    this.modalContain.appendChild(this.closeButton);
  }

  insertInElement(element) {
    // Insertar el modal en el elemento especificado
    if (typeof element === 'string') {
      document.querySelector(element).appendChild(this.modalContain);
    }

    if (element instanceof Node) {
      this.inserted = true;
      element.appendChild(this.modalContain);
    }
  }

  showModal() {
    // Mostrar el modal
    if (!this.visible && this.inserted) {
      this.modalContain.classList.remove('hide');
      this.modalContain.classList.add('show');
      this.visible = true;
    }
  }

  hideModal() {
    // Ocultar el modal
    if (this.visible && this.inserted) {
      this.modalContain.classList.remove('show');
      this.modalContain.classList.add('hide');
      this.visible = false;
    }
  }

  toggleModal() {
    // Alternar la visibilidad del modal
    if (this.inserted) {
      if (this.visible) {
        this.hideModal();
      } else {
        this.showModal();
      }
    }
  }
}


const fragment = document.createDocumentFragment()


let href = window.location.href
let protocol = window.location.protocol
let host = window.location.host
let hostname = window.location.hostname
let pathname = window.location.pathname
let port = window.location.port

const msj  = document.createElement('div');
const button = document.createElement('button')

msj.innerHTML = `Href: ${href}<br>Protocol: ${protocol}<br>Host: ${host}<br>Hostname: ${hostname}<br>Pathname: ${pathname}<br>Port: ${port}`

const infoURLPage  = new Modal('modal', msj);

infoURLPage.insertInElement(fragment);

button.textContent = 'Mostrar información del navegador'
button.addEventListener('click', () => {
  infoURLPage.toggleModal()
})
fragment.appendChild(button)


let width = window.screen.width;
let height = window.screen.height;

const msjScreen = document.createElement('div');

msjScreen.innerHTML = `Width: ${width}<br>Height: ${height}`

const infoScreen = new Modal('modal',  msjScreen);

infoScreen.insertInElement(fragment);

const buttonScreen = document.createElement('button')
buttonScreen.textContent = 'Mostrar información de pantalla'

buttonScreen.addEventListener('click', () => {
  infoScreen.toggleModal()
})


fragment.appendChild(buttonScreen)

document.body.appendChild(fragment)