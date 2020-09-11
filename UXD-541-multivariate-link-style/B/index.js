var UXD541 = {
  selectors: {
    linksSelector: 'a:not([class])',
    seFontLinksSelector: 'a[class|=se-font]',
  },

  getNodes: function() {
    this.nodes = {
      links: document.querySelectorAll(this.selectors.linksSelector),
      seFontLinks: document.querySelectorAll(this.selectors.seFontLinksSelector),
    };
  },

  addClassesForMetric: function() {
    this.nodes.links.forEach(function(link) {
      link.classList.add('uxd-541-primary');
    });

    this.nodes.seFontLinks.forEach(function(link) {
      link.classList.add('uxd-541-primary');
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
