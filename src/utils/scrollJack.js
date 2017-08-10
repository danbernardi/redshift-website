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
export function enableScroll () {
  const html = document.getElementsByTagName('html');
  html[0].classList.remove('disable-scroll');
}

// disables free page scrolling
export function disableScroll () {
  const html = document.getElementsByTagName('html');
  html[0].classList.add('disable-scroll');
}
