try {
  if (document.readyState !== 'loading') {
    init();
  } else {
    window.addEventListener('load', function() {
      init();
    });
  }
} catch (e) {
  console.warn(e);
}

function createNodes() {
  var overlay = document.createElement('div');
  overlay.className = 'UXD-520-overlay';

  var tip = document.createElement('div');
  tip.className = 'UXD-520-tip';
  tip.textContent = 'Используйте фильтры, чтобы быстрее найти то, что Вы ищите.';

  var closeButton = document.createElement('button');
  closeButton.className = 'UXD-520-close-btn';
  closeButton.innerHTML = '<span>x</span>';

  var _overlay = document.createElement('div');
  _overlay.className = 'UXD-520-header-overlay';

  return {
    overlay: overlay,
    _overlay: _overlay,
    tip: tip,
    closeButton: closeButton,
  };
}

function listenSearch() {
  var search = document.querySelector('input.sdl-header-se_search-field');

  search.addEventListener('change', function(e) {
    window.lastSearchValue = e.currentTarget.value;
  });

  return search.value;
}

function insertNodes() {
  var nodes = createNodes();
  var documentEl = document.documentElement;
  var filtersLevel1 = document.querySelectorAll('.filter-lvl1.category-item.js-category-item');
  var header = document.querySelector('.sdl-header-se.js-header');

  // Set ovetlay heights
  nodes.overlay.style.height = documentEl.scrollHeight + 'px';
  nodes._overlay.style.height = header.offsetHeight + 'px';
  
  documentEl.insertAdjacentElement('afterbegin', nodes.overlay);
  header.insertAdjacentElement('afterbegin', nodes._overlay);
  nodes.tip.insertAdjacentElement('beforeend', nodes.closeButton);
  if (filtersLevel1[0]) filtersLevel1[0].insertAdjacentElement('afterbegin', nodes.tip);
  
  addListeners(nodes);

  // Set ResizeObserver for header & html
  var resizeObserver = new ResizeObserver(function() {
    nodes.overlay.style.height = documentEl.scrollHeight + 'px';
  });

  var _resizeObserver = new ResizeObserver(function() {
    nodes._overlay.style.height = header.offsetHeight + 'px';
  });

  resizeObserver.observe(documentEl);
  _resizeObserver.observe(header);

  filtersLevel1.forEach(function(el) {
    el.style.boxShadow = '1px 2px 8px 0px rgba(0, 0, 0, 0.5)';
  });
}

function addListeners(nodes) {
  nodes.closeButton.addEventListener('click', function() {
    nodes.overlay.classList.add('hide');
    nodes._overlay.classList.add('hide');
    nodes.tip.classList.add('hide');
    // Unset box-shadow for all filter level 1 boxes
    setDefaultShadowForFilters();
  });

  document.documentElement.addEventListener('click', function(e) {
    if (e.target.closest('.UXD-520-tip')) return;
    nodes.overlay.classList.add('hide');
    nodes._overlay.classList.add('hide');
    nodes.tip.classList.add('hide');
    // Unset box-shadow for all filter level 1 boxes
    setDefaultShadowForFilters();
  });
}

function setDefaultShadowForFilters() {
  document.querySelectorAll('.filter-lvl1.category-item.js-category-item')
    .forEach(function(el) {
      el.style.boxShadow = '0 1px 3px 0 rgba(51, 51, 51, 0.15)';
    });
}

function init() {
  var filterContainer = document.querySelector('.side-bar__content.js-sidebar-content');
  filterContainer.classList.add('UXD-520-filter-container');
  window.lastSearchValue = listenSearch();

  if (sessionStorage.getItem('searchValue') === window.lastSearchValue) return;

  setTimeout(insertNodes, 1000);
  sessionStorage.setItem('searchValue', window.lastSearchValue);
}
