import * as browser from 'utils/browserTests';

export function scrollDocToZero () {
  let scrollDoc = 'body';
  if (browser.isFirefox) scrollDoc = 'html';
  scrollElemToZero(document.getElementsByTagName(scrollDoc)[0]);
}

export function scrollElemToZero (elem) {
  if (elem) elem.scrollTop = 0;
}
