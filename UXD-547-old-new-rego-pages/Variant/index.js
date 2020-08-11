var UXD547 = {
  selectors: {
    emailFieldWrapperSelector: '.form-group.padd-bt-7',
    registerTextSelector: '.text-center',
  },

  getNodes: function() {
    this.nodes = {
      emailFieldWrapper: document.querySelector(this.selectors.emailFieldWrapperSelector),
      registerText: document.querySelector(this.selectors.registerTextSelector),
    };
  },

  insertElementsIntoForm: function() {
    var p = document.createElement('p');
    p.textContent = 'Enter your email address to get started';
    p.className = 'UXD-547-paragraph';
    this.nodes.emailFieldWrapper.insertAdjacentElement('beforebegin', p);
    this.nodes.registerText.remove();
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.insertElementsIntoForm();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.insertElementsIntoForm();
      });
    }
  },
};

UXD547.init();