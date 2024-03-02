let isDragging = false;
let initialX;

function startDrag(event) {
  isDragging = true;
  initialX = event.clientX;
}

function stopDrag() {
  isDragging = false;
}

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const deltaX = event.clientX - initialX;
    document.querySelector("#projects").scrollLeft -= deltaX;
    initialX = event.clientX;
  }
});
