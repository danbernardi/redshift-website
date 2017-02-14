import mojs from 'mo-js';
import * as browser from 'utils/browserTests';

export function scrollToID (id, duration = 200) {
  const elem = document.getElementById(id);
  if (elem) {
    let scrollDoc = 'body';
    if (browser.isFirefox) scrollDoc = 'html';

    const doc = document.getElementsByTagName(scrollDoc)[0];

    const start = doc.scrollTop;
    const end = elem.getBoundingClientRect().top + start;

    new mojs.Tween({
      duration,
      easing: 'cubic.inout',
      onUpdate: (progress) => { doc.scrollTop = start + (end - start) * progress; }
    }).play();
  }
}

export function scrollDocToZero () {
  let scrollDoc = 'body';
  if (browser.isFirefox) scrollDoc = 'html';
  scrollElemToZero(document.getElementsByTagName(scrollDoc)[0]);
}

export function scrollElemToZero (elem) {
  if (elem) elem.scrollTop = 0;
}
