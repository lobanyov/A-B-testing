var UXD570 = {
  selectors: {
    headerContent: '.sdl-header-se_content',
    headerNav: '.sdl-header-se_mm-wrap',
  },

  getNodes: function() {
    this.nodes = {
      headerContent: document.querySelector(this.selectors.headerContent),
      headerNav: document.querySelector(this.selectors.headerNav),
    };
  },

  applyChanges: function() {
    this.nodes.headerContent.insertAdjacentElement(
      'afterend', this.nodes.headerNav,
    );
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

UXD570.init();
