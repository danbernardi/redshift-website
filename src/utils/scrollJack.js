import { scrollDebounce } from 'utils/debounce';

// stores Y value when a touch event is initiated
let touchStartY;

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

export function onScroll (wait, leadingFunc, trailingFunc) {
  window.ontouchstart = (event) => { touchStartY = event.pageY; };
  window.onwheel = scrollDebounce(wait, leadingFunc, trailingFunc);
  window.onmousewheel = scrollDebounce(wait, leadingFunc, trailingFunc);
  window.ontouchend = scrollDebounce(wait, leadingFunc, trailingFunc);
  document.onkeydown = scrollDebounce(wait, leadingFunc, trailingFunc);
}
