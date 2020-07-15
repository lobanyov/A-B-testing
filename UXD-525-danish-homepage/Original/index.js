var config = {
  selectors: {
    descriptionLinkSelector: '.sdl-heading-section-title-h3 .se-font-text2-0 > .se-col > a',
    smallSquareImageSelector: '.sdl-content-small-square-image',
    rectangularImageSelector: '.sdl-content-rectangular-image',
  },

  getNodes: function() {
    this.nodes = {
      descriptionLink: document.querySelector(this.selectors.descriptionLinkSelector),
      smallSquareImages: document.querySelectorAll(this.selectors.smallSquareImageSelector),
      rectangularImages: document.querySelectorAll(this.selectors.rectangularImageSelector),
    };
  },

  applyChanges: function() {
    this.nodes.descriptionLink.classList.add('uxd-525-primary');

    this.nodes.smallSquareImages.forEach(function(img) {
      img.classList.add('uxd-525-secondary');
    });

    this.nodes.rectangularImages.forEach(function(img) {
      img.classList.add('uxd-525-secondary');
    });
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
  }
};

config.init();
