function setObserverToList() {
  var resultsList = document.querySelector('.results:last-child');
  var observer = new MutationObserver(setClassesToLinks);

  observer.observe(resultsList, {
    childList: true,
    subtree: true,
  });
}

function setClassesToLinks() {
	var rangeLinks = document.querySelectorAll('.single-result .result-main-range > a');
  var resultsList = document.querySelector('.results:last-child');
  
  /**
   * Take only cards with /product/ in their path
   */
  var resultCards = Array.from(resultsList.querySelectorAll('.single-result > .card-body'))
    .filter(function(card) {
      return card.querySelector('a').href.indexOf('/product/') > -1;
    });

  // var productLinks = document.querySelectorAll('.single-result .card-body > .card-body__info > a');

  rangeLinks.forEach(function(link) {
    if (link.classList.contains('experiment-uxd-476-range')) return;  
    link.classList.add('experiment-uxd-476-range');
    link.insertAdjacentText('afterbegin', '🠨 ');
  });

  resultCards.forEach(function(card) {
    var imgLink = card.querySelector('a');
    var cardBodyInfo = card.querySelector('.card-body__info');
    imgLink.classList.add('experiment-uxd-476-tile');

    cardBodyInfo.children.forEach(function(item) {
      if (item.classList.contains('result-ranges')) return;
      item.classList.add('experiment-uxd-476-tile');
    });
 });
}

if (document.readyState !== 'loading') {
  setObserverToList();
  setClassesToLinks();
} else {
  window.addEventListener('load', function() {
    setObserverToList();
    setClassesToLinks();
  });
}
