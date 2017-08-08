export function getScrollDirection (previousYPosition, currentYPosition) {
  if (previousYPosition < currentYPosition) {
    return 'down';
  }

  if (previousYPosition > currentYPosition) {
    return 'up';
  }

  return null;
}

 // enables free page scrolling
export function enableScroll (elem) {
  const scroller = elem || document.querySelector('html');
  scroller.classList.remove('disable-scroll');
}

// disables free page scrolling
export function disableScroll (elem) {
  const scroller = elem || document.querySelector('html');
  const scrollPos = scroller.scrollTop;
  scroller.classList.add('disable-scroll');
  scroller.scrollTop = scrollPos;
}
