var UXD551 = {
  config: {
    origin: 'https://www.se.com',
    pathname: '/in/en/search/',
    queryParams: '?multifilter=Product+Lines',
    enterCode: 13,
  },

  selectors: {
    headerSearchInputSelector: '.sdl-header-se_search-field',
    headerSubmitBtnSelector: '#submit',
    businessLinesSelector: '.business-lines',
  },

  getNodes: function() {
    this.nodes = {
      headerSubmitBtn: document.querySelector(this.selectors.headerSubmitBtnSelector),
      headerSearchInput: document.querySelector(this.selectors.headerSearchInputSelector),
      businessLines: document.querySelector(this.selectors.businessLinesSelector),
    };
  },

  createNewNodes: function() {
    this.nodes.searchContainer = document.createElement('div');
    this.nodes.searchInput = document.createElement('input');
    this.nodes.submitBtn = document.createElement('button');

    this.nodes.searchContainer.className = 'uxd-search-containter';
    this.nodes.searchInput.className = 'uxd-search-input';
    this.nodes.submitBtn.className = 'uxd-submit-button';

    this.nodes.searchInput.placeholder = 'Search products';
    this.nodes.submitBtn.textContent = 'Search';

    this.nodes.searchContainer.append(this.nodes.searchInput, this.nodes.submitBtn);
    this.nodes.businessLines.insertAdjacentElement('afterend', this.nodes.searchContainer);
  },

  addListeners: function() {
    var searchProduct = function() {
      var searchValue = this.nodes.searchInput.value;

      if (searchValue) {
        location.assign(
          this.config.origin + this.config.pathname + searchValue + this.config.queryParams
        );
      } else {
        this.nodes.searchInput.focus();
      }
    }.bind(this);

    this.nodes.submitBtn.addEventListener('click', searchProduct);
    window.addEventListener('keydown', function(e) {
      if (
        e.keyCode === this.config.enterCode &&
        this.nodes.searchInput.contains(document.activeElement)
      ) this.nodes.submitBtn.click();
    }.bind(this));
  },

  addClassesForMetric: function() {
    this.nodes.headerSubmitBtn.classList.add('uxd-551-primary');
    this.nodes.submitBtn.classList.add('uxd-551-primary', 'uxd-551-secondary');
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.createNewNodes();
      this.addListeners();
      this.addClassesForMetric();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.createNewNodes();
        _this.addListeners();
        _this.addClassesForMetric();
      });
    }
  },
};

UXD551.init();
