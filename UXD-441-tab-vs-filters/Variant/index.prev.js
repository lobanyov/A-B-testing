var array = [];
var _document = window.document;
window.activeItem = +localStorage.getItem("active-item") ||  0;

function validPage() {
  var targetPage = document.querySelector('.pager .current > a');
  return targetPage.dataset.page === "1" || targetPage.dataset.page === "2";
}

function addMetricClass(){
  var tabBar = document.querySelectorAll('.tabs-container .category-item__head-clone-node');
  tabBar.forEach(function(tab){
    tab.classList.add('experimentUXD_DE428');
  });
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
  addMetricClass();
  addMetricClassForCheckboxes();
  addMetricClassForCards();
}

function removeAllMetrics() {
  var primaryMetric = document.querySelectorAll('.experimentUXD_DE428');
  var secondaryMetric = document.querySelectorAll('.experimentUXD_DE428_card-clicks');
  primaryMetric.forEach(function(element) {
    element.classList.remove('experimentUXD_DE428');
  });
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


function initTabContainerSection() {
  var tabsContainer = document.createElement('section');
  tabsContainer.className = 'section-tabs';
  tabsContainer.innerHTML = '<div class="tabs-container"></div>';
  if(!document.querySelector('.tabs-container')){document.querySelector('.se-col-md-12').prepend(tabsContainer);}
}

function appendTabs() {
  var tabItems = document.querySelectorAll('.category-item__head');
  var tabsContainer = document.querySelector('.tabs-container');
  var allFilters = '<div class="category-item__head category-item__head-clone-node experimentUXD_DE428 active"><h6 class="category-item__heading">Alle Ergebnisse</h6></div>';
  tabsContainer.innerHTML = allFilters;

  for (var i = 0; i < tabItems.length; i++) {
    var tabItemClone = tabItems[i].cloneNode(true);
    tabItemClone.classList.add('category-item__head-clone-node');
    if (tabsContainer) {
      tabsContainer.appendChild(tabItemClone);
    }
  }

  Array.from(document.querySelectorAll('.tabs-container h6')).forEach(function(item) {if(item.innerText === 'undefined') {
    array.push(item);
    return array;
  }});


  if(array.length > 0){
    var saved = localStorage.getItem('tabsContainer');

        if (saved) {
      document.querySelector(".tabs-container").innerHTML = saved;
      if(document.querySelector('.tabs-container') ) {document.querySelector('.tabs-container').addEventListener('click', function(){
        document.querySelector('.categories-body').innerHTML = localStorage.getItem('categoriesFilters');
      });}
    }
  } else{
    var ind = 1;
    localStorage.setItem('tabsContainer', document.querySelector(".tabs-container").innerHTML);
    localStorage.setItem('categoriesFilters', document.querySelector('.categories-body').innerHTML);
  }

}

function removeContainerHeader() {
  var tabsContainer = Array.from(document.querySelector('.tabs-container').children);

  var containerHeaders = document.querySelectorAll('aside .category-item__head');
  var asideBar = document.querySelector('.se-search-layout-bar.js-sidebar');
  // if(document.querySelector('.tabs-container .category-item__head.active h6').innerText === 'Alle Ergebnisse'){
  if(window.activeItem === 0){
    document.querySelector('.se-search-layout-bar.js-sidebar').style.display = 'none';
  // } else if(document.querySelector('.tabs-container .category-item__head.active h6').innerText !== 'Alle Ergebnisse'){
  } else {
    document.querySelector('.se-search-layout-bar.js-sidebar').style.display = 'block';
  }

  /*if(tabsContainer[0].classList.contains('active')){
    asideBar.style.display = 'none';
  } else*/ if(!tabsContainer[0].classList.contains('active')) {
    //asideBar.style.display = 'block';
    containerHeaders.forEach(function (header) {

      header.style.display = 'none';
    });
  }
}

function getTabs() {
  var tabsContainer = document.querySelector('.tabs-container');
  return tabsContainer.children;
}

function getFilters() {
  var filtersSection = document.querySelector('.categories-body');
  return filtersSection.children;
}

function activateTab() {
  function activateTabs(el, number) {
    if (number !== window.activeItem) {
      el.classList.remove('active');
    } else {
      el.classList.add('active');
    }
  }

  function activateFilters(el, number) {
    if(window.activeItem === 0 || window.activeItem - 1 === number) {
      el.classList.add('active');
      document.querySelector('.category-item__head').style.display='block';
    } else  {
      el.classList.remove('active');
    }
  }

  Array.from(getTabs(), activateTabs);
  Array.from(getFilters(), activateFilters);
}

function handleTabClick(tabIndex) {
  var activeCheckbox = document.querySelector('.se_checkbox_is-active');

  if (activeCheckbox) {
    activeCheckbox.click();
  }

  window.activeItem = tabIndex;
  localStorage.setItem("active-item", tabIndex);

  activateTab();
}

function bindTabClickEvent() {
  Array.from(getTabs(), function (tab, number) {
    (function (el, j) {
      el.addEventListener('click', function () {
        handleTabClick(j);

        removeContainerHeader();

      });
    })(tab, number);
  });
}

function addGlobalClass(){
  var tabsContainer = Array.from(document.querySelector('.tabs-container').children);
  tabsContainer.forEach(function(tab){
    if(tab.innerHTML.indexOf("Alle Ergebnisse") !== -1) {

      tab.addEventListener('click', function(){
        document.querySelectorAll('aside .category-item__head').forEach(function(el){el.style.display = 'block';});
      });
    }
  });
}

function removeExtraFilters(){
  var tabsContainer = Array.from(document.querySelector('.tabs-container').children);
  if(tabsContainer[0].classList.contains('active')){
    var activeFilterContainer = document.querySelector('ul.categories-body.js-categories-content');
    var children = Array.from(activeFilterContainer.children);
    children.forEach(function(el){
      if(!el.classList.contains('is-active')){el.classList.remove('active');}
    });
    var array = children.filter(function(el){ return el.classList.contains('is-active');});
    if(array.length === 0){
      children.forEach(function(el){el.classList.add('active');});
    }
  }
}

function createDomObserver() {
  var oldHref = _document.location.href;
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {

      if (oldHref != _document.location.href || mutation.addedNodes) {
        oldHref = _document.location.href;
        activateTab();
        removeExtraFilters();
      }

      removeContainerHeader();
      //addTargetBlank();

      addAllMetrics();
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


function detectswipe(selector) {
  var swipe_det = { sX: 0, eX: 0 };
  var position = 0;
  var section = document.querySelector(selector);
  var container = section.firstChild;
  var isSwipping = false;

  function drag() {
    var diff = swipe_det.sX - swipe_det.eX;
    var limit = container.scrollWidth - container.clientWidth;

    if (position + diff >= limit) {
      position = limit;
    } else if (position + diff < 0) {
      position = 0;
    } else {
      position += diff;
    }

    container.style.transform = 'translate(-' + position + 'px,0)';
  }

  function handleStart(e) {
    swipe_det.sX = e.touches ? e.touches[0].screenX : e.clientX;
    isSwipping = true;
  }
  function handleMove(e) {
    e.preventDefault();
    swipe_det.eX = e.touches ? e.touches[0].screenX : e.clientX;
    if (isSwipping) {
      drag();
    }
  }
  function handleEnd() {
    isSwipping = false;
    swipe_det.sX = 0; swipe_det.eX = 0;
  }

  section.addEventListener('touchstart', handleStart, false);
  section.addEventListener('touchmove', handleMove, false);
  section.addEventListener('touchend', handleEnd, false);
  section.addEventListener('mousedown', handleStart, false);
  section.addEventListener('mousemove', handleMove, false);
  section.addEventListener('mouseup', handleEnd, false);
  section.addEventListener('mouseleave', handleEnd, false);
}

document.querySelector('.pager').addEventListener('click',function(e) {
  location.assign(e.target.getAttribute('href'));
}, false);

function addTargetBlank(){
  var resultCardLink = document.querySelectorAll('.results .single-result a');
  resultCardLink.forEach(function(link){
    link.target = "_blank";
  });
}

initTabContainerSection();
$(document).on('filterbar:initialized',function(){initTabContainerSection();});
$(document).on('results:done',function(){
  initTabContainerSection();
  removeContainerHeader();
});
appendTabs();
removeContainerHeader();
activateTab();
bindTabClickEvent();
createDomObserver();
addGlobalClass();
detectswipe('.section-tabs');


addMetricClass();
addMetricClassForCheckboxes();
addMetricClassForCards();

choosePageForMetric();
