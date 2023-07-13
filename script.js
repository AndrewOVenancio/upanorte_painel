const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let intervalId = null;
let interval = 10000;

const startSlideshow = () => {
  intervalId = setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, interval);
};
const loading = document.querySelector('.loading');
window.addEventListener('load', () => {
  loading.style.display = 'none';
});

const stopSlideshow = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const startStopBtn = document.querySelector('#start-stop-btn');
startStopBtn.addEventListener('click', () => {
  if (intervalId) {
    stopSlideshow();
    startStopBtn.innerText = 'Iniciar';
  } else {
    startSlideshow();
    startStopBtn.innerText = 'Parar';
  }
});

const intervalBtn = document.querySelector('#interval-btn');
intervalBtn.addEventListener('click', () => {
  let newInterval = window.prompt('Selecione o intervalo de atualizações em segundos:');
  newInterval = newInterval * 1000;
  if (newInterval) {
    interval = newInterval;
    if (intervalId) {
      stopSlideshow();
      startSlideshow();
    }
  }
});

startSlideshow();
