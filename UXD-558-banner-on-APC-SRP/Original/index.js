var UXD551 = {
  selectors: {
    resultsListSelector: '.results:last-child',
    resultCardsSelector: '.results > li',
  },

  getNodes: function() {
    this.nodes = {
      resultsList: document.querySelector(this.selectors.resultsListSelector),
    };
  },

  setObserverToResultList: function() {
    var addClassesToResultCards = this.addClassesToResultCards.bind(this);
    var observer = new MutationObserver(addClassesToResultCards);

    observer.observe(this.nodes.resultsList, {
      childList: true,
      subtree: true,
    });
  },

  addClassesToResultCards: function() {
    this.nodes.resultsList
      .querySelectorAll(this.selectors.resultCardsSelector)
        .forEach(function(card) {
          card.classList.add('uxd-558-primary');
        });
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.addClassesToResultCards();
      this.setObserverToResultList();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.addClassesToResultCards();
        _this.setObserverToResultList();
      });
    }
  },
};

UXD551.init();