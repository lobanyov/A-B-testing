var UXD570 = {
  selectors: {
    desktopMetabarWrapper: '.sdl-header-se_metabar-wrap',
    desktopMegamenuWrapper: '.sdl-header-se_mm-wrap',
    schneiderLogoContainer: '.sdl-header-se_content > .se-col-md-3',
    desktopHeaderSearch: '.sdl-header-se_search',
  },

  getNodes: function() {
    this.nodes = {
      desktopMetabarWrapper: document.querySelector(this.selectors.desktopMetabarWrapper),
      desktopMegamenuWrapper: document.querySelector(this.selectors.desktopMegamenuWrapper),
      schneiderLogoContainer: document.querySelector(this.selectors.schneiderLogoContainer),
      desktopHeaderSearch: document.querySelector(this.selectors.desktopHeaderSearch),
    };
  },

  addClassesForMetrics: function() {
    this.nodes.desktopMetabarWrapper.classList.add('uxd-570-zone-1');
    this.nodes.desktopMegamenuWrapper.classList.add('uxd-570-zone-2');
    this.nodes.schneiderLogoContainer.classList.add('uxd-570-zone-2');
    this.nodes.desktopHeaderSearch.classList.add('uxd-570-zone-3');

    // add for mobile metbar
    var mobileMetabar = document.querySelector('.sdl-header-se_mob-nav-metabar');
    var mobileNavigation = document.querySelector('.sdl-header-se_mob-nav-l1-list');
    mobileMetabar.classList.add('uxd-570-zone-1');
    mobileNavigation.classList.add('uxd-570-zone-2');
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.addClassesForMetrics();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.addClassesForMetrics();
      });
    }
  },
};

UXD570.init();
