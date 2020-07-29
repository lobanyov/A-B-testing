var UXD441 = {
  config: {
    pages: {
      first: '1',
      second: '2',
    },
    observerConfig: {
      childList: true,
      subtree: true,
    }
  },

  selectors: {
    targetPageLinkSelector: '.pager .current > a',
    targetPageLinksSelector: '.pager a',
    filterItemsSelector: 'aside .filter-lvl2.subcategory-item',
    resultCardsSelector: '.results-list-holder .single-result',
    primaryMetricSelecor: '.experimentUXD_DE428',
    secondaryMetricSelector: '.experimentUXD_DE428_card-clicks',
    filtersSelector: '.categories-body',
    paginationSelector: '.pagination-bar',
  },

  getNodes: function() {
    this.nodes = {
      targetPageLink: document.querySelector(this.selectors.targetPageLinkSelector),
      targetPageLinks: document.querySelectorAll(this.selectors.targetPageLinksSelector),
      filterItems: document.querySelectorAll(this.selectors.filterItemsSelector),
      resultCards: document.querySelectorAll(this.selectors.resultCardsSelector),
      filters: document.querySelector(this.selectors.filtersSelector),
      pagination: document.querySelector(this.selectors.paginationSelector),
    };
  },

  validatePage: function() {
    return this.nodes.targetPageLink.dataset.page === this.config.pages.first ||
      this.nodes.targetPageLink.dataset.page === this.config.pages.second;
  },

  addClassesForElements: function() {
    this.nodes.filterItems.forEach(function(el) {
      el.classList.add('experimentUXD_DE428');
    });

    this.nodes.resultCards.forEach(function(el) {
      el.classList.add('experimentUXD_DE428_card-clicks');
    });
  },

  removeClassesFromElements: function() {
    this.nodes.primaryMetricNodes = document.querySelectorAll(primaryMetricSelecor);
    this.nodes.secondaryMetricNodes = document.querySelectorAll(secondaryMetricSelector);

    this.nodes.primaryMetricNodes.forEach(function(el) {
      el.classList.remove('experimentUXD_DE428');
    });

    this.nodes.secondaryMetricNodes.forEach(function(el) {
      el.classList.remove('experimentUXD_DE428_card-clicks');
    });
  },

  applyChangesForValidPages: function() {
    var _this = this;

    this.nodes.targetPageLinks.forEach(function(el) {
      if (el.dataset.page > _this.config.pages.second) {
        el.addEventListener('click', _this.removeClassesFromElements);
      } else {
        el.addEventListener('click', _this.addClassesForElements);
      }
    });
  },

  initObserver: function() {
    var _this = this;
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function (mutation) {
        if (_this.validatePage()) {
          _this.addClassesForElements();
        } else {
          _this.removeClassesFromElements();
        }

        _this.applyChangesForValidPages();
      });

      observer.observe(filters, this.config.observerConfig);
      observer.observe(pagination, this.config.observerConfig);
    });
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.initObserver();
      if (this.validatePage()) {
        this.addClassesForElements();
      }
      this.applyChangesForValidPages();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.initObserver();
        if (_this.validatePage()) {
          _this.addClassesForElements();
        }
        _this.applyChangesForValidPages();
      });
    }
  },
};

UXD441.init();
