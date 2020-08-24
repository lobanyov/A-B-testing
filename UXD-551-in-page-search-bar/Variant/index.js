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

  applyChanges: function() {
    var _this = this;

    var searchContainer = document.createElement('div');
    var searchInput = document.createElement('input');
    var submitBtn = document.createElement('button');

    searchContainer.className = 'uxd-search-containter';
    searchInput.className = 'uxd-search-input';
    submitBtn.className = 'uxd-submit-button';

    submitBtn.textContent = 'Submit';

    searchContainer.append(searchInput, submitBtn);

    submitBtn.addEventListener('click', function() {
      _this.nodes.headerSearchInput.value = searchInput.value;
      _this.nodes.headerSubmitBtn.click();
      _this.nodes.headerSearchInput.value = '';
    });

    this.nodes.businessLines.insertAdjacentElement('afterend', searchContainer);
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.applyChanges();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.applyChanges();
      });
    }
  },
};

UXD551.init();
