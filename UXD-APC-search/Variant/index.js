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
    mobileSearchInput: '.MobileSearchArea_mobileSearchArea__field__CcJHu',
    mobileSearchButton: '.MobileSearchArea_mobileSearchArea__submit__z5yEI',
  },

  getNodes: function() {
    this.nodes = {
      searchInput: document.querySelector(this.selectors.searchInput),
      searchButton: document.querySelector(this.selectors.searchButton),
      mobileSearchInput: document.querySelector(this.selectors.mobileSearchInput),
      mobileSearchButton: document.querySelector(this.selectors.mobileSearchButton),
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
    var searchValue;

    if (this.nodes.searchInput) {
      searchValue = this.nodes.searchInput.value;
    } else if (this.nodes.mobileSearchInput) {
      searchValue = this.nodes.mobileSearchInput.value;
    }

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

  addListeners: function(btn, input, context) {
    function keydownHandler(e) {
      if (e.keyCode === context.config.enterCode && input.contains(document.activeElement)) {
        context.redirectUserToPreferredSearchPage();
      }
    }

    btn.addEventListener('click', context.redirectUserToPreferredSearchPage.bind(context));
    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keypress', keydownHandler);
  },

  splitLogicDependingOnPage: function() {
    if (!this.config.isHomePage) return;

    if (this.nodes.searchInput && this.nodes.searchButton && !this.config.isListenersAddedForDesktop) {
      this.addListeners(this.nodes.searchButton, this.nodes.searchInput, this);
    } else if (this.nodes.mobileSearchButton && this.nodes.mobileSearchButton && !this.config.isListenersAddedForMobile) {
      this.addListeners(this.nodes.mobileSearchButton, this.nodes.mobileSearchInput, this);
    }
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.definePage();
      this.splitLogicDependingOnPage();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.definePage();
        _this.splitLogicDependingOnPage();
      });
    }
  },
};

APCG16566.init();