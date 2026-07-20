const canvas = document.querySelector("#work-canvas");
const context = canvas.getContext("2d");

let width = 0;
let height = 0;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawBackground();
}

function drawBackground() {
  const count = Math.max(20, Math.min(42, Math.floor(width / 32)));
  const dots = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 2 + Math.random() * 3.8,
    color: ["#2563eb", "#123b79", "#2d7f86", "#64748b"][index % 4],
  }));

  context.clearRect(0, 0, width, height);
  context.lineWidth = 1;

  dots.forEach((dot) => {
    context.globalAlpha = 0.3;

    context.beginPath();
    context.fillStyle = dot.color;
    context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
    context.fill();
  });

  dots.forEach((dot, index) => {
    for (let otherIndex = index + 1; otherIndex < Math.min(dots.length, index + 5); otherIndex += 1) {
      const other = dots[otherIndex];
      const distance = Math.hypot(dot.x - other.x, dot.y - other.y);

      if (distance < 150) {
        context.globalAlpha = (1 - distance / 150) * 0.12;
        context.strokeStyle = dot.color;
        context.beginPath();
        context.moveTo(dot.x, dot.y);
        context.lineTo(other.x, other.y);
        context.stroke();
      }
    }
  });

  context.globalAlpha = 1;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Arrow buttons for project carousel
const scrollWrap = document.querySelector(".project-scroll-wrap");
const btnLeft = document.querySelector(".carousel-btn-left");
const btnRight = document.querySelector(".carousel-btn-right");

function updateCarouselBtns() {
  if (!scrollWrap || !btnLeft || !btnRight) return;
  btnLeft.hidden = scrollWrap.scrollLeft <= 0;
  btnRight.hidden = scrollWrap.scrollLeft + scrollWrap.clientWidth >= scrollWrap.scrollWidth - 1;
}

if (scrollWrap && btnLeft && btnRight) {
  btnLeft.hidden = true;
  btnRight.hidden = false;

  btnLeft.addEventListener("click", () => {
    scrollWrap.scrollBy({ left: -340, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    scrollWrap.scrollBy({ left: 340, behavior: "smooth" });
  });

  scrollWrap.addEventListener("scroll", updateCarouselBtns, { passive: true });
  window.addEventListener("resize", updateCarouselBtns);
  updateCarouselBtns();
}

// Drag-to-scroll for project carousel
if (scrollWrap) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  scrollWrap.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - scrollWrap.offsetLeft;
    scrollLeft = scrollWrap.scrollLeft;
    scrollWrap.classList.add("is-dragging");
  });

  document.addEventListener("mouseup", () => {
    if (!isDown) return;
    isDown = false;
    scrollWrap.classList.remove("is-dragging");
  });

  scrollWrap.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollWrap.offsetLeft;
    scrollWrap.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });
}
