var config = {
  selectors: {
    descriptionLinkSelector: '.sdl-heading-section-title-h3 .se-font-text2-0 > .se-col > a',
  },

  getNodes: function() {
    this.nodes = {
      descriptionLink: document.querySelector(this.selectors.descriptionLinkSelector),
    };
  },

  applyChanges: function() {
    this.nodes.descriptionLink.classList.add('uxd-525-primary');
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.applyChanges();
    } else {
      window.addEventListener('load', function() {
        this.getNodes();
        this.applyChanges();
      });
    }
  }
};

config.init();
