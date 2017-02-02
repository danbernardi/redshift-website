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

export function getScrollDirection (event) {
  console.log(event.type, event);
  let direction;

  if (event.type === 'wheel') {
    direction = event.deltaY >= 0 ? 'down' : 'up';
  } else if (event.type === 'keydown') {
    direction = event.key === 'ArrowDown' ? 'down' : 'up';
  } else if (event.type === 'touchmove') {
    direction = 'down';
  }

  return direction;
}

export function disableScroll () {
  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  }

  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

export function onScroll (func, wait) {
  window.onwheel = _.debounce(func, wait, { leading: true, trailing: false });
  window.onmousewheel = _.debounce(func, wait, { leading: true, trailing: false });
  window.ontouchmove = _.debounce(func, wait, { leading: true, trailing: false });
  document.onkeydown = func;
}

export function enableScroll () {
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  }

  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;
}

const swipeFunc = {
  touches : {
    "touchstart": {"x":-1, "y":-1}, 
    "touchmove" : {"x":-1, "y":-1}, 
    "touchend"  : false,
    "direction" : "undetermined"
  },
  touchHandler: function(event) {
    let touch;

    if (typeof event !== 'undefined') {  
      event.preventDefault();

      if (typeof event.touches !== 'undefined') {
        touch = event.touches[0];

        switch (event.type) {
          case 'touchstart':
          case 'touchmove':
            swipeFunc.touches[event.type].x = touch.pageX;
            swipeFunc.touches[event.type].y = touch.pageY;
            break;
          case 'touchend':
            swipeFunc.touches[event.type] = true;
            if (swipeFunc.touches.touchstart.y > -1 && swipeFunc.touches.touchmove.y > -1 &&
                swipeFunc.touches.touchstart.y !== swipeFunc.touches.touchmove.y) {
              console.log(swipeFunc.touches.touchstart.y, swipeFunc.touches.touchmove.y);
              swipeFunc.touches.yDirection = swipeFunc.touches.touchstart.y < swipeFunc.touches.touchmove.y ? "up" : "down";
              window.touchEventYDirection = swipeFunc.touches.yDirection;
            }
          default:
            break;
        }
      }

    }
  },
  init: function() {
    document.addEventListener('touchstart', swipeFunc.touchHandler, false); 
    document.addEventListener('touchmove', swipeFunc.touchHandler, false);  
    document.addEventListener('touchend', swipeFunc.touchHandler, false);
  }
};

export function getSwipeDirection () {
  swipeFunc.init();
}
