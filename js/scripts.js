(function () {
  var itemClassName = 'slider__photo';
  items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0;

  // Set event listeners
  function setEventListeners() {
    var next = document.getElementsByClassName('slider__button--next')[0],
      prev = document.getElementsByClassName('slider__button--prev')[0];

    next.addEventListener('click', getNext);
    prev.addEventListener('click', getPrev);
  }

  function getNext() {
    // TODO get items element with index of slide, remove active class from it.
    // slide++ to increase the value of slide by 1
    // get items element with index of slide, add active class to it.
    // document.getElementsByClassName('active');
    // document.getElementsByClassName('active')[0];
    // document.getElementsByClassName('active')[0].classList.remove('active');
    // document.getElementsByClassName('slider__photo')[1].classList.add('active');

    // items are the array of [5 images]
    //document.getElementsByClassName('slider__photo')
    items[slide].classList.remove('active');

    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }

    // slide = (slide === totalItems - 1)? 0 : slide++;

    items[slide].classList.add('active');
  }

  function getPrev() {
    // TODO      
    items[slide].classList.remove('active');

    if (slide === 0) {
      slide = totalItems - 1;
    } else {
      slide--;
    }
    items[slide].classList.add('active');
  }

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();