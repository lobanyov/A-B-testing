try {
  if (document.readyState !== 'loading') {
    insertOverlay();
  } else {
    window.addEventListener('load', function() {
      insertOverlay();
    });
  }
} catch (e) {
  console.log(e);
}

/**
 * For the gray overlay need to create div element with z-index eqauls 10.
 * In the same time, aside needs higher z-index then the div has. For example: 11.
 * Also, the overlay needs these styles according UXD-520 ticket description:
 * background: #000;
 * opacity: 0.5;
 */

function insertOverlay() {
  var documentEl = document.documentElement;
  var overlay = document.createElement('div');
  overlay.className = 'UXD-520-overlay';

  documentEl.insertAdjacentElement('afterbegin', overlay);

  var tip = document.createElement('div');
  tip.className = 'UXD-520-tip';
  tip.textContent = 'Используйте фильтры, чтобы быстрее найти то, что Вы ищите';
  var filterLevel1 = document.querySelector('.filter-lvl1');
  filterLevel1.insertAdjacentElement('afterbegin', tip);

  var closeButton = document.createElement('button');
  closeButton.className = 'UXD-520-close-btn';
  closeButton.innerHTML = '<span>x</span>';
  tip.insertAdjacentElement('beforeend', closeButton);

  var header = document.querySelector('.sdl-header-se.js-header');
  var _overlay = document.createElement('div');
  _overlay.className = 'UXD-520-header-overlay';
  header.insertAdjacentElement('afterbegin', _overlay);

  // Set ovetlay heights
  overlay.style.height = documentEl.scrollHeight + 'px';
  _overlay.style.height = header.offsetHeight + 'px';

  // Set ResizeObserver for header & html
  var resizeObserver = new ResizeObserver(function() {
    overlay.style.height = documentEl.scrollHeight + 'px';
  });

  var _resizeObserver = new ResizeObserver(function() {
    _overlay.style.height = header.offsetHeight + 'px';
  });

  resizeObserver.observe(documentEl);
  _resizeObserver.observe(header);
}