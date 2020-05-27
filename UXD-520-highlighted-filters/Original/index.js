if (document.readyState !== 'loading') {
  init();
} else {
  window.addEventListener('load', function() {
    init();
  });
}

function init() {
  var filterContainer = document.querySelector('.side-bar__content.js-sidebar-content');
  filterContainer.classList.add('UXD-520-filter-container');
}