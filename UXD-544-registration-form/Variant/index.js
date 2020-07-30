var UXD544 = {
  selectors: {
    passwordFormFieldSelector: '.form-group.has-feedback',
    locationFormFieldSelector: '#L1 > div:last-child',
    companyFormFieldSelector: '#L1 + div',
    businessTypeFormFieldSelector: '#L1 + div + div',
    blockDescriptionSelector: '.m-bottom110 > div:nth-child(7)',
    recaptchaSelector: '.m-bottom110 > div:nth-child(8)',
    registerBtnSelector: '.form-group.btn-container',
  },

  getNodes: function() {
    this.nodes = {
      passwordFormField: document.querySelector(this.selectors.passwordFormFieldSelector),
      locationFormField: document.querySelector(this.selectors.locationFormFieldSelector),
      companyFormField: document.querySelector(this.selectors.companyFormFieldSelector),
      businessTypeFormField: document.querySelector(this.selectors.businessTypeFormFieldSelector),
      blockDescription: document.querySelector(this.selectors.blockDescriptionSelector),
      recaptcha: document.querySelector(this.selectors.recaptchaSelector),
      registerBtn: document.querySelector(this.selectors.registerBtnSelector),
    };
  },

  applyChanges: function() {
    var _this = this;

    Object.values(this.nodes).forEach(function(el) {
      if (el === _this.nodes.passwordFormField) return;
      el.style.display = 'none';
    });
  },

  createContinueBtn: function() {
    var continueBtn = document.createElement('button');
    continueBtn.classList.add('form-group', 'btn-container', 'btn-primary');
    continueBtn.textContent = 'Continue';
    this.nodes.passwordFormField.insertAdjacentElement('afterend', continueBtn);
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.applyChanges();
      this.createContinueBtn();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.applyChanges();
        this.createContinueBtn();
      });
    }
  },
}

UXD544.init();