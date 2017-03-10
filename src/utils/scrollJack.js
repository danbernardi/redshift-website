export function getScrollDirection (previousYPosition, currentYPosition) {
  return previousYPosition <= currentYPosition ? 'down' : 'up';
}

 // enables free page scrolling
export function enableScroll (elem) {
  const scroller = elem || document.querySelector('html');
  scroller.classList.remove('disable-scroll');
}

// disables free page scrolling
export function disableScroll (elem) {
  const scroller = elem || document.querySelector('html');
  scroller.classList.add('disable-scroll');
}
