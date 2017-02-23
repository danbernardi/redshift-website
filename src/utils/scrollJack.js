import { scrollDebounce } from 'utils/debounce';

// stores Y value when a touch event is initiated
let touchStartY;

// returns 'up' or 'down' depending on scroll direction of passed event
export function getScrollDirection (event) {
  let direction;

  if (event.type === 'wheel') {
    direction = event.deltaY >= 0 ? 'down' : 'up';
  } else if (event.type === 'keydown') {
    if (event.key === 'ArrowDown') direction = 'down';
    if (event.key === 'ArrowUp') direction = 'up';
  } else if (event.type === 'touchend') {
    direction = event.pageY < touchStartY ? 'down' : 'up';
  }

  return direction;
}

// creates scroll handlers for various input devices
export function onScroll (wait, leadingFunc, trailingFunc) {
  window.ontouchstart = (event) => { touchStartY = event.pageY; };
  window.onwheel = wait > 0 ? scrollDebounce(wait, leadingFunc, trailingFunc) : leadingFunc;
  window.onmousewheel = wait > 0 ? scrollDebounce(wait, leadingFunc, trailingFunc) : leadingFunc;
  window.ontouchend = wait > 0 ? scrollDebounce(wait, leadingFunc, trailingFunc) : leadingFunc;
  document.onkeydown = wait > 0 ? scrollDebounce(wait, leadingFunc, trailingFunc) : leadingFunc;
}

 // enables free page scrolling
export function enableScroll () {
  const html = document.querySelector('html');
  html.classList.remove('disable-scroll');
}

// disables free page scrolling
export function disableScroll () {
  const html = document.querySelector('html');
  html.classList.add('disable-scroll');
}
