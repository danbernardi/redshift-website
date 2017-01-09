import ReactDOM from 'react-dom';

export function scrollToItem (duration = 200, item) {
  if (duration <= 0) { return null; }

  window.requestAnimationFrame(() => {
    const el = ReactDOM.findDOMNode(item);
    const verticalUnits = el.getBoundingClientRect().top / (duration / 10.0);

    setTimeout(() => {
      window.scrollBy(null, verticalUnits);
      scrollToItem(duration - 10, item);
    }, 10);
  });
}

export function scrollToMe (duration = 200) {
  scrollToItem(duration, this);
}

export function scrollToID (id, duration = 200) {
  const item = document.getElementById(id);
  scrollToItem(duration, item);
}

export function scrollElemToZero (elem) {
  const domElem = elem;
  domElem.scrollTop = 0;
}

