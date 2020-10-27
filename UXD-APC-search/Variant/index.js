var APCG16566 = {
  config: {
    isHomePage: false,
    origin: 'https://www.apc.com',
    pathname: '/shop/us/en/search/',
    dyQueryParam: '?Dy=1',
    ntyQueryParam: '&Nty=1',
    nttQueryParam: '&Ntt=',
    enterCode: 13,
  },

  selectors: {
    searchInput: '.SearchInput_searchInput__field__1GR2l',
    searchButton: '.SearchInput_searchInput__controlButtons__3y3Zw',
  },

  getNodes: function() {
    this.nodes = {
      searchInput: document.querySelector(this.selectors.searchInput),
      searchButton: document.querySelector(this.selectors.searchButton),
    };
  },

  definePage: function() {
    if (location.pathname.indexOf('search') > -1) {
      this.config.isHomePage = false;
    } else {
      this.config.isHomePage = true;
    }
  },

  redirectUserToPreferredSearchPage: function() {
    var searchValue = this.nodes.searchInput.value;

    if (searchValue) {
      location.assign(
        this.config.origin +
        this.config.pathname +
        this.config.dyQueryParam +
        this.config.nttQueryParam +
        searchValue +
        this.config.ntyQueryParam
      );
    }
  },

  splitLogicDependingOnPage: function() {
    if (this.config.isHomePage) {
      this.nodes.searchButton.addEventListener('click', this.redirectUserToPreferredSearchPage.bind(this));

      window.addEventListener('keydown', function(e) {
        if (e.keyCode === this.config.enterCode && this.nodes.searchInput.contains(document.activeElement)) {
          this.redirectUserToPreferredSearchPage();
        }
      }.bind(this));
    } else {
      // to be written...
    }
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.definePage();
      this.splitLogicDependingOnPage();
      // this.addClassesForMetrics();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.definePage();
        _this.splitLogicDependingOnPage();
        // _this.addClassesForMetrics();
      });
    }
  },
};

APCG16566.init();