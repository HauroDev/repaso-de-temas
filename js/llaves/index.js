const container = document.querySelector('.flex-container');

function crearLlave(nombre, modelo, precio) {
  img = "<img class='llave-img' src='llave-antigua.jpg' />";
  nombre = `<h2>${nombre}</h2>`;
  modelo = `<h3>${modelo}</h3>`;
  precio = `<p>Precio: <b>$${precio}</b></p>`;

  return [img,nombre, modelo, precio];
}

let fragment = document.createDocumentFragment();

const changeHidden = (number) => {
  document.querySelector(".key-data").value = number
}

for (let i = 1; i <= 20; i++) {
  const price = Math.floor(Math.random() * 10 + 30);
  const modelo = Math.floor(Math.random() * 10000 - 30);
  let llave = crearLlave(`Llave ${i}`, `Modelo ${modelo}`, price);
  let div = document.createElement('div');
  div.classList.add(`item-${i}`,`flex-item`);
  div.tabIndex = i;
  div.addEventListener('click', () => {
    changeHidden(i)
  })
  div.innerHTML = llave[0]  + llave[1] + llave[2] + llave[3]; 
  fragment.appendChild(div);
 }

container.appendChild(fragment);