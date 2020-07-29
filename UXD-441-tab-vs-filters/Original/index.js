var UXD441 = {
  config: {
    observer: {
      childList: true,
      subtree: true,
    }
  },

  selectors: {
    targetPageLinkSelector: '.pager .current > a',
    targetPageLinksSelector: '.pager a',
    filterItemsSelector: 'aside .filter-lvl2.subcategory-item',
    resultCardsSelector: '.results-list-holder .single-result',
    resultsListSelector: '.se-search-layout-results',
    primaryMetricSelecor: '.experimentUXD_DE428',
    secondaryMetricSelector: '.experimentUXD_DE428_card-clicks',
  },

  getNodes: function() {
    this.nodes = {
      targetPageLink: document.querySelector(this.selectors.targetPageLinkSelector),
      targetPageLinks: document.querySelectorAll(this.selectors.targetPageLinksSelector),
      resultsList: document.querySelector(this.selectors.resultsListSelector),
    };
  },

  addClassesForElements: function() {
    // filters & result cards are changed dynamically
    this.nodes.filterItems = document.querySelectorAll(this.selectors.filterItemsSelector);
    this.nodes.resultCards = document.querySelectorAll(this.selectors.resultCardsSelector);

    this.nodes.filterItems.forEach(function(el) {
      el.classList.add('experimentUXD_DE428');
    });

    this.nodes.resultCards.forEach(function(el) {
      el.classList.add('experimentUXD_DE428_card-clicks');
    });
  },

  initObserver: function() {
    var obsCallback = this.addClassesForElements.bind(this);
    var observer = new MutationObserver(obsCallback);

    observer.observe(this.nodes.resultsList, this.config.observer);
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.addClassesForElements();
      this.initObserver();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.addClassesForElements();
        _this.initObserver();
      });
    }
  },
};

UXD441.init();
