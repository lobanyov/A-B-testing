var UXD551 = {
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
    var cb = function() {
      this.nodes.headerSearchInput.value = this.nodes.searchInput.value;
      this.nodes.headerSubmitBtn.click();
      this.nodes.headerSearchInput.value = '';
    }.bind(this);

    this.nodes.submitBtn.addEventListener('click', cb);
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.createNewNodes();
      this.addListeners();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.createNewNodes();
        _this.addListeners();
      });
    }
  },
};

UXD551.init();
