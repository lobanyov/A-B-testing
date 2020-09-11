var UXD541 = {
  selectors: {
    linksSelector: 'a',
  },

  getNodes: function() {
    this.nodes = {
      links: document.querySelectorAll(this.selectors.linksSelector),
    };
  },

  addClassesForMetric: function() {
    this.nodes.links.forEach(function(link) {
      var classes = Array.from(link.classList);

      if (classes.length > 1) return;

      if (
        classes.length &&
        (classes[0].indexOf('se-font') > -1 || classes[0].indexOf('sticky-bar') > -1) ||
        !classes.length
      ) {
        link.classList.add('uxd-541-primary');
      }
    });
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

UXD541.init();
