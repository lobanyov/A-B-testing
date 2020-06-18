if (document.readyState !== 'loading') {
  setClassesToDowloadButtons();
} else {
  window.addEventListener('load', function() {
    setClassesToDowloadButtons();
  });
}

function setClassesToDowloadButtons() {
  var SEARCH_PATH = '/download/search/';
  var DOCUMENT_PATH = '/download/document/';
  var downloadLinks;

  if (location.pathname.indexOf(DOCUMENT_PATH) > -1) {
    var downloadBtn = document.querySelector('.right-col > a:first-child.btn');
    downloadLinks = document.querySelectorAll('.file-link');

    downloadBtn.classList.add('uxd-474-download');
    downloadLinks.forEach(function(el) { el.classList.add('uxd-474-download'); });
  } else if (location.pathname.indexOf(SEARCH_PATH) > -1) {
    downloadLinks = document.querySelectorAll('.list-option-doctype');
    downloadLinks.forEach(function(el) { el.classList.add('uxd-474-download'); });
  }
}