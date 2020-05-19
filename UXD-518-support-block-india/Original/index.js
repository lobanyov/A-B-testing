function addClassesToSupportLinks() {
  var stickyBar = document.querySelector('.sdl-content-sticky-bar_links');
  stickyBar.children.forEach(function(el) {
    el.classList.add('UXD-508-support-item');
  });
}

if (document.readyState !== 'loading') {
  addClassesToSupportLinks();
} else {
  window.addEventListener('load', function() {
    addClassesToSupportLinks();
  });
}