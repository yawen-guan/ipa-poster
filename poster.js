/* Fit the A1 sheet on screen; print rules preserve its physical size. */
"use strict";

const poster = document.querySelector(".poster");
const viewport = document.querySelector(".viewport");
const printButton = document.querySelector("#print-poster");

function fitPoster() {
  const availableWidth = Math.max(1, window.innerWidth - 32);
  const maxPreviewWidth = 1130;
  const scale = Math.min(1, availableWidth / poster.offsetWidth,
    maxPreviewWidth / poster.offsetWidth);

  poster.style.transform = `scale(${scale})`;
  viewport.style.width = `${poster.offsetWidth * scale}px`;
  viewport.style.height = `${poster.offsetHeight * scale}px`;
}

printButton.addEventListener("click", () => window.print());
window.addEventListener("resize", fitPoster);
fitPoster();
