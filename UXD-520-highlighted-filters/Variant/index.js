if (document.readyState !== 'loading') {
  insertOverlay();
} else {
  window.addEventListener('load', function() {
    insertOverlay();
  });
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
  overlay.style.height = documentEl.scrollHeight + 'px';

  documentEl.insertAdjacentElement('afterbegin', overlay);
}
