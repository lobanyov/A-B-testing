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
    function setInheritSize(link) {
      var span = link.querySelector('span');
      if (span) {
        span.style.fontSize = 'inherit';
        span.style.lineHeight = 'inherit';
      }
    }

    this.nodes.buttons.forEach(function(btn) {
      if (btn.className.indexOf(this.selectors.primary) > -1) {
        btn.style.backgroundColor = '#0087CD';
        btn.style.fontSize = '14pt';
        btn.style.fontWeight = '700';

        if (btn.tagName === 'A') setInheritSize(btn);

        btn.classList.add('uxd-550-primary');
      } else if (btn.className.indexOf(this.selectors.secondary) > -1) {
        btn.style.fontSize = '14pt';
        btn.style.fontWeight = '700';
        btn.style.outline = '1px solid #0087CD';

        if (btn.tagName === 'A') setInheritSize(btn);

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
