var UXD551 = {
  selectors: {
    headerSubmitBtnSelector: '#submit',
  },

  getNodes: function() {
    this.nodes = {
      headerSubmitBtn: document.querySelector(this.selectors.headerSubmitBtnSelector),
    };
  },

  addClassesForMetric: function() {
    this.nodes.headerSubmitBtn.classList.add('uxd-551-primary');
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.addClassesForMetric();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.addClassesForMetric();
      });
    }
  },
};

UXD551.init();
