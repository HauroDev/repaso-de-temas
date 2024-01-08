const getName = async (id) => {
  const { data } = await axios.get(`https://reqres.in/api/users/${id}`);

  return data.data.first_name;
};

const getNamesForRange = async (start, end) => {
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  if (start === end) {
    return [await getName(start)];
  }

  const names = [];

  for (let i = start; i <= end; i++) {
    const name = getName(i);
    names.push(name);
  }

  return Promise.all(names);
};

function card(name) {
  return `
  <div class="card">${name}</div>`;
}

const cant = prompt('Cuantas tarjetas quieres mostrar? (max. 10)');

if (cant > 10) {
  // el problema radica con la cantidad de data que te puede dar el servidor y que algunos id no existen
  alert('Error xD');
} else {
  getNamesForRange(1, cant).then((res) => {
    document.body.innerHTML = res.map(card).join('');
  });
}
