const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

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

containers.forEach((container) => {
  // calculate over a draggable element without dragging class
  container.addEventListener('dragover', (event) => {
    event.preventDefault();

    const draggable = document.querySelector('.dragging');
    const overElement = container.querySelector('.dragging-over');

    if (draggable === overElement) {
      return;
    }

    if (!overElement || !draggable) {
      return;
    }

    const overRect = overElement.getBoundingClientRect();
    const draggableRect = draggable.getBoundingClientRect();

    if (
      draggableRect.top < overRect.top ||
      draggableRect.left > overRect.left
    ) {
      container.insertBefore(draggable, overElement);
    } else {
      container.insertBefore(draggable, overElement.nextSibling);
    }
  });
});
