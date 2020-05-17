function addClassToConfirmBtn() {
  var confirmButton = document.querySelector('.sdl-header-se_seamless-banner-btn.se-btn-secondary-small-white.js-seamless-banner-btn');
  if (confirmButton) {
    confirmButton.classList.add('experiment-UXD-484');
  }
}

if (document.readyState !== 'loading') {
  addClassToConfirmBtn();
} else {
  window.addEventListener('load', function() {
    addClassToConfirmBtn();
  });
}