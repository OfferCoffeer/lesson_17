console.log('Sample JavaScript #5 HW #17');

let container = null;
let prevIndicator = null;

const FA_CHEVRON_LEFT = '<i class="fas fa-chevron-left"></i>';
const FA_CHEVRON_RIGHT = '<i class="fas fa-chevron-right"></i>';
const FA_PLAY = '<i class="fas fa-play"></i>';

function containerCreate() {
  const carousel = document.createElement('div');

  carousel.setAttribute('class', 'carousel');
  carousel.setAttribute('id', 'carousel');
  document.querySelector('body').append(carousel);

  container = document.querySelector('#carousel');
}

function slidesCreate(n) {
  const slides = document.createElement('ul');

  slides.setAttribute('class', 'slides');

  for (let i = 0; i < n; i++) {
    const slidesItem = document.createElement('li');
    const slidesLink = document.createElement('a');

    slidesItem.setAttribute('class', i !== 0 ? 'slides__item' : 'slides__item active');
    slidesLink.setAttribute('href', '#');

    slidesItem.append(slidesLink);
    slides.append(slidesItem);
  }

  container.append(slides);
}

function indicatorsCreate(n) {
  const indicators = document.createElement('div');

  indicators.setAttribute('class', 'indicators');

  for (let i = 0; i < n; i++) {
    const indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute('class', i !== 0 ? 'indicators__item' : 'indicators__item active');
    indicatorsItem.dataset.slideTo = i;

    indicators.append(indicatorsItem);
  }
  console.log(container);

  container.append(indicators);
}

function controlsCreate() {
  const controls = document.createElement('div');

  controls.setAttribute('class', 'controls');

  for (let i = 0; i < 3; i++) {
    const controlsItem = document.createElement('div');

    if (i === 0) {
      controlsItem.setAttribute('class', 'controls__item controls__prev');
      controlsItem.innerHTML = FA_CHEVRON_LEFT;
    }
    if (i === 1) {
      controlsItem.setAttribute('class', 'controls__item controls__next');
      controlsItem.innerHTML = FA_CHEVRON_RIGHT;
    }
    if (i === 2) {
      controlsItem.setAttribute('class', 'controls__item controls__pause');
      controlsItem.innerHTML = FA_PLAY;
    }

    controls.append(controlsItem);
  }
  container.append(controls);
}

function styleCreate() {
  const style = document.createElement('style');

  style.innerHTML = `
  .slides { 
    position: relative;
  }
  .controls { 
    position: relative;
  }
  .indicators { 
    display: flex;
    gap: 10px;
  }
  .indicators__item {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: lightgrey;
    cursor: pointer;
  }
  `;

  container.append(style);
}

function indicatorHandler(e) {
  let target = e.target;

  if (target && target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (prevIndicator) prevIndicator.removeAttribute('style');

    prevIndicator = target;
  }


  console.log(target);
}

function initListeners() {
  let indicatorsContainer = document.querySelector('.indicators');

  indicatorsContainer.addEventListener('click', indicatorHandler);
}

function createCarousel(slidesCount = 5) {
  // containerCreate();
  container = document.querySelector('#carousel');
  slidesCreate(slidesCount);
  indicatorsCreate(slidesCount);
  controlsCreate();
  styleCreate();
  initListeners();
}

createCarousel(4);
