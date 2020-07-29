var _window = window;
var _document = window.document;

function validPage() {
  var targetPage = document.querySelector('.pager .current > a');
  return targetPage.dataset.page === "1" || targetPage.dataset.page === "2";
}

function addMetricClassForCheckboxes() {
  var checkBoxes = document.querySelectorAll('aside .filter-lvl2.subcategory-item.is-nonactive');
  checkBoxes.forEach(function(checkBox){
    checkBox.classList.add('experimentUXD_DE428');
  });
}

function addMetricClassForCards() {
  var resultCards = document.querySelectorAll('.results-list-holder .single-result');
  resultCards.forEach(function(card){
    card.classList.add('experimentUXD_DE428_card-clicks');
  });
}

function addAllMetrics() {
  addMetricClassForCheckboxes();
  addMetricClassForCards();
}

function removeAllMetrics() {
   var primaryMetric = document.querySelectorAll('.experimentUXD_DE428');

  primaryMetric.forEach(function(element) {
    element.classList.remove('experimentUXD_DE428');
  });
  
  var secondaryMetric = document.querySelectorAll('.experimentUXD_DE428_card-clicks');

  secondaryMetric.forEach(function(element) {
    element.classList.remove('experimentUXD_DE428_card-clicks');
  });
}

function choosePageForMetric() {
  var targetPage = document.querySelectorAll('.pager a');
  targetPage.forEach(function(target) {
    if(target.dataset.page > "2") {
     target.addEventListener('click', removeAllMetrics);
    } else {
      target.addEventListener('click', addAllMetrics);
    }
  });
}

function createDomObserver() {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {

      if ( validPage() ) {
        addAllMetrics();
      } else {
        removeAllMetrics();
      }

      choosePageForMetric();
    });
  });

  var config = {
    childList: true,
    subtree: true
  };

  observer.observe(_document.querySelector('.categories-body'), config);  
  observer.observe(_document.querySelector('.pagination-bar'), config);
}
// to Original end

//_window.addEventListener('load', function initUxd() {
createDomObserver();

// To Original Start
if ( validPage() ) {
  addMetricClassForCheckboxes();
  addMetricClassForCards();
}
choosePageForMetric();
// to original end
//}(window));
