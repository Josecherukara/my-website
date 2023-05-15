// JavaScript to handle column resizing and bird section animation
const boundary = document.querySelector('.boundary');
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');
const birdSection = document.querySelector('.bird-section');
const deerSection = document.querySelector('.deer-section');

let isResizing = false;
let startWidth;
let startMouseX;

boundary.addEventListener('mousedown', startResize);
window.addEventListener('mouseup', stopResize);
window.addEventListener('mousemove', resizeColumn);

function startResize(e) {
  isResizing = true;
  startWidth = leftColumn.offsetWidth;
  startMouseX = e.clientX;
}

function stopResize() {
  isResizing = false;
}

function resizeColumn(e) {
  if (!isResizing) return;

  const mouseDeltaX = e.clientX - startMouseX;
  const newWidth = startWidth + mouseDeltaX;
  const maxWidth = leftColumn.parentElement.offsetWidth - boundary.offsetWidth;

  if (newWidth >= 0 && newWidth <= maxWidth) {
    leftColumn.style.width = `${newWidth}px`;
    boundary.style.left = `${newWidth}px`;

    const rightColumnWidth = rightColumn.offsetWidth;
    const birdSectionWidth = rightColumnWidth - newWidth - boundary.offsetWidth;

    if (birdSectionWidth >= 0) {
      birdSection.style.left = `${newWidth + boundary.offsetWidth}px`;
      birdSection.style.width = `${birdSectionWidth}px`;
      birdSection.style.opacity = `${1 - (newWidth / maxWidth)}`;
    }

    const deerSectionWidth = rightColumnWidth - birdSectionWidth;
    deerSection.style.width = `${deerSectionWidth}px`;
  }
}
