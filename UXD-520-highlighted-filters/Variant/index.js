try {
  if (document.readyState !== 'loading') {
    setTimeout(insertNodes, 1000);
  } else {
    window.addEventListener('load', function() {
      setTimeout(insertNodes, 1000);
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
  tip.textContent = 'Используйте фильтры, чтобы быстрее найти то, что Вы ищите';

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
  }
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

  document.body.addEventListener('click', function() {
    nodes.overlay.classList.add('hide');
    nodes._overlay.classList.add('hide');
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
