function addClassesToSupportLinks() {
  var stickyBar = document.querySelector('.sdl-content-sticky-bar_links');
  stickyBar.children.forEach(function(el) {
    el.classList.add('UXD-508-support-item');
  });
}

function addClassesToTips() {
  var tipsSections = document.querySelectorAll('[data-tpl-name="Content - Flexible Blocks"]');
  if (!tipsSections.length) return;
  var tipsSection = Array.from(tipsSections).pop();
  if (!tipsSection.closest('.tips-distributor')) return;
  var tips = tipsSection.querySelectorAll('[class^="sdl-content-flexible-blocks_column se-col-md-"]');

  tips.forEach(function(el) {
    el.classList.add('UXD-508-support-item-tip');
  });
}

if (document.readyState !== 'loading') {
  addClassesToSupportLinks();
  addClassesToTips();
} else {
  window.addEventListener('load', function() {
    addClassesToSupportLinks();
    addClassesToTips();
  });
}
