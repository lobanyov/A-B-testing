var UXD551 = {
  config: {
    linkToAPCHomePage: 'https://www.apc.com/us/en',
  },

  selectors: {
    trailBarSelector: '.trail-bar',
    resultsListSelector: '.results:last-child',
    resultCardsSelector: '.results > li',
  },

  getNodes: function() {
    this.nodes = {
      trailBar: document.querySelector(this.selectors.trailBarSelector),
      resultsList: document.querySelector(this.selectors.resultsListSelector),
    };
  },

  createBannerAPC: function() {
    this.nodes.wrapperBannerAPC = document.createElement('div');
    var linkToAPC = document.createElement('a');
    var bannerAPC = document.createElement('div');

    this.nodes.wrapperBannerAPC.className = 'uxd-558-banner-apc';

    linkToAPC.href = this.config.linkToAPCHomePage;

    linkToAPC.append(bannerAPC);
    this.nodes.wrapperBannerAPC.append(linkToAPC);
    this.nodes.trailBar.insertAdjacentElement('beforebegin', this.nodes.wrapperBannerAPC);
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
      this.createBannerAPC();
      this.addClassesToResultCards();
      this.setObserverToResultList();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.createBannerAPC();
        _this.addClassesToResultCards();
        _this.setObserverToResultList();
      });
    }
  },
};

UXD551.init();