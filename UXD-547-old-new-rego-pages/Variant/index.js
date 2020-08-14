var UXD547 = {
  selectors: {
    emailFieldWrapperSelector: '.form-group.padd-bt-7',
    registerTextSelector: '.text-center',
    registerLinkSelector: '.text-center > a',
    mySchneiderBlockSelector: '.td-cell',
    privacyNoticeSelector: '.privacy-notice',
  },

  getNodes: function() {
    this.nodes = {
      emailFieldWrapper: document.querySelector(this.selectors.emailFieldWrapperSelector),
      registerText: document.querySelector(this.selectors.registerTextSelector),
      registerLink: document.querySelector(this.selectors.registerLinkSelector),
      mySchneiderBlock: document.querySelector(this.selectors.mySchneiderBlockSelector),
      privacyNotice: document.querySelector(this.selectors.privacyNoticeSelector),
    };
  },

  insertElementsIntoForm: function() {
    var p = document.createElement('p');
    p.textContent = 'Enter your email address to get started';
    p.className = 'UXD-547-paragraph';
    this.nodes.emailFieldWrapper.insertAdjacentElement('beforebegin', p);
    this.nodes.registerText.style.display = 'none';

    var registrationBtn = document.createElement('button');
    registrationBtn.className = 'UXD-547-registration-btn';
    registrationBtn.textContent = 'New to Schneider Electric? Create an account';
    registrationBtn.href = '#';
    this.nodes.mySchneiderBlock.insertAdjacentElement('afterend', registrationBtn);

    var helpLink = document.createElement('a');
    helpLink.className = 'UXD-547-help-link';
    helpLink.textContent = 'Need Help?';
    helpLink.href = '#';
    this.nodes.privacyNotice.insertAdjacentElement('afterend', helpLink);

    // Add listener to registration button
    var cb = this.registrationBtnHandler.bind(this);
    registrationBtn.addEventListener('click', cb);
  },

  registrationBtnHandler: function() {
    this.nodes.registerLink.click();
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