var UXD550 = {
  selectors: {
    primary: 'se-btn-primary',
    secondary: 'se-btn-secondary',
    link: 'a',
    btn: 'button',
  },

  getNodes: function() {
    this.nodes = {
      buttons: document.querySelectorAll(this.selectors.link.concat(', ', this.selectors.btn)),
    };
  },

  applyChanges: function() {
    this.nodes.buttons.forEach(function(btn) {
      if (btn.className.indexOf(this.selectors.primary) > -1) {
        btn.classList.add('uxd-550-primary');
      } else if (btn.className.indexOf(this.selectors.secondary) > -1) {
        btn.classList.add('uxd-550-secondary');
      }
    }.bind(this));
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

UXD550.init();
