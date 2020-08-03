var UXD544 = {
  selectors: {
    registerBtnSelector: '.form-group.btn-container',
  },

  getNodes: function() {
    this.nodes = {
      registerBtn: document.querySelector(this.selectors.registerBtnSelector),
    };
  },

  addClassToButton: function() {
    this.nodes.registerBtn.querySelector('input').classList.add('uxd-544-register');
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.addClassToButton();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.addClassToButton();
      });
    }
  },
};

UXD544.init();
