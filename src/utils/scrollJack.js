import _ from 'lodash';

function preventDefault (e) {
  const event = e || window.event;
  if (event.preventDefault) { event.preventDefault(); }
  event.returnValue = false;
}

function preventDefaultForScrollKeys (e) {
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// stores Y value when a touch event is initiated
let touchStartY;

export function getScrollDirection (event) {
  let direction;

  if (event.type === 'wheel') {
    direction = event.deltaY >= 0 ? 'down' : 'up';
  } else if (event.type === 'keydown') {
    direction = event.key === 'ArrowDown' ? 'down' : 'up';
  } else if (event.type === 'touchend') {
    direction = event.pageY < touchStartY ? 'down' : 'up';
  }

  return direction;
}

export function onScroll (func, wait) {
  window.onwheel = _.debounce(func, wait, { leading: true, trailing: false });
  window.onmousewheel = _.debounce(func, wait, { leading: true, trailing: false });
  window.ontouchstart = (event) => { touchStartY = event.pageY };
  window.ontouchend = _.debounce(func, wait, { leading: true, trailing: false });
  document.onkeydown = func;
}
