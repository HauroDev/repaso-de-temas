// // let request;

// // if(window.XMLHttpRequest) {
// //  request = new XMLHttpRequest();
// // } else {
// //   request = new ActiveXObject('Microsoft.XMLHTTP');
// // }

// const request = new XMLHttpRequest();
// const msj = document.createElement('p');
// document.body.appendChild(msj);

// request.addEventListener('readystatechange', () => {
//   if (request.readyState === 4 && request.status === 200) {
//     msj.textContent = request.responseText;
//   }
// });

// request.open('GET', 'info.txt');
// request.send();

// const request2 = new XMLHttpRequest();

// request2.addEventListener('load', () => {
//   if (request2.status === 200 || request2.status === 201) {
//     const data = JSON.parse(request2.response);
//     console.log(data);
//   } else {
//     console.log('Ocurrio un error');
//   }
// });

// request2.open('POST', 'https://reqres.in/api/users');

// request2.setRequestHeader('Content-Type', 'application/json');

// request2.send(JSON.stringify({
//   name: 'morpheus',
//   job: 'leader'
// }));

const usuarios = fetch('https://reqres.in/api/users');

function userCard({ avatar, email, first_name, last_name, id }) {
  const identificador = 'card-' + id;

  return `
    <div id="${identificador}" class="card">
      <img src="${avatar}" alt="${first_name}">
      <h3>${first_name} ${last_name}</h3>
      <p>${email}</p>
    </div>
    `;
}

usuarios
  .then((res) => res.json())
  .then((data) => {
    const cards = document.getElementById('cards');
    data.data.forEach((user) => {
      cards.innerHTML += userCard(user);
    });
  });

const cargarImagen = fetch('./Haruo_manga.jpg');

cargarImagen
  .then((res) => res.blob())
  .then((img) => {
    const imagen = document.createElement('img');
    imagen.src = URL.createObjectURL(img);
    document.body.appendChild(imagen);
  });
