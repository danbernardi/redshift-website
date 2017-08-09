export function getScrollDirection (previousYPosition, currentYPosition) {
  if (previousYPosition < currentYPosition) {
    return 'down';
  }

  if (previousYPosition > currentYPosition) {
    return 'up';
  }

  return null;
}

let scrollPos;

 // enables free page scrolling
export function enableScroll () {
  const html = document.getElementsByTagName('html');
  const scroller = document.scrollingElement;
  html[0].classList.remove('disable-scroll');
  debugger;
  scroller.scrollTop = scrollPos;
}

// disables free page scrolling
export function disableScroll () {
  const html = document.getElementsByTagName('html');
  console.log(html);
  const scroller = document.scrollingElement;
  scrollPos = scroller.scrollTop;
  html[0].classList.add('disable-scroll');
}
