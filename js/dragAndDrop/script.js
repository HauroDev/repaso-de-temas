function randomColorHEX() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function textWhiteOrBlack(color) {
  if (typeof color !== 'string') {
    return null;
  }

  const r = parseInt(color.substring(1, 2), 16);
  const g = parseInt(color.substring(3, 2), 16);
  const b = parseInt(color.substring(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 128 ? 'black' : 'white';
}

const fragment = document.createDocumentFragment();
const container = document.querySelector('.container');

for (let i = 0; i < Math.random() * 10 + 10; i++) {
  const div = document.createElement('div');
  let backgroundColor = randomColorHEX();
  let textColor = textWhiteOrBlack(backgroundColor);

  div.classList.add('draggable');
  div.draggable = true;
  div.textContent = 'Box ' + (i + 1);
  div.style.backgroundColor = randomColorHEX();
  div.style.color = textColor;
  fragment.appendChild(div);
}

container.appendChild(fragment);

const draggables = document.querySelectorAll('.draggable');

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragenter', () => {
    draggable.classList.add('dragging-over');
  });

  draggable.addEventListener('dragleave', () => {
    draggable.classList.remove('dragging-over');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
    draggable.classList.remove('dragging-over');
  });
});

container.addEventListener('dragover', (event) => {
  event.preventDefault();

  const dragging = container.querySelector('.dragging');
  const overElement = container.querySelector('.dragging-over');

  if (dragging.isSameNode(overElement)) {
    return;
  }

  if (!overElement || !dragging) {
    return;
  }

  const draggingRect = dragging.getBoundingClientRect();
  const overRect = overElement.getBoundingClientRect();

  if (draggingRect.x < overRect.x) {
    overElement.after(dragging);
  }

  if (draggingRect.x > overRect.x) {
    overElement.before(dragging);
  }

  if (draggingRect.y < overRect.y) {
    overElement.after(dragging);
  }

  if (draggingRect.y > overRect.y) {
    overElement.before(dragging);
  }
});
