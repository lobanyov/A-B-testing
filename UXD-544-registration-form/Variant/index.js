var UXD544 = {
  config: {
    formFieldsStates: {
      email: null,
      name: null,
      password: null,
    },
    isCorrectFields: false,
    amoutOfCorrectFields: 3,
  },

  selectors: {
    emailFormFieldSelector: '#L1 > div:first-child',
    nameFormFieldSelector: '#L1 > div:nth-child(2)',
    passwordFormFieldSelector: '.form-group.has-feedback',
    locationFormFieldSelector: '#L1 > div:last-child',
    companyFormFieldSelector: '#L1 + div',
    businessTypeFormFieldSelector: '#L1 + div + div',
    blockDescriptionSelector: '.m-bottom110 > div:nth-child(7)',
    recaptchaSelector: '.m-bottom110 > div:nth-child(8)',
    registerBtnSelector: '.form-group.btn-container',
    passwordInputSelector: '.form-group.has-feedback input',
  },

  getInitialNodes: function() {
    this.nodes = {
      locationFormField: document.querySelector(this.selectors.locationFormFieldSelector),
      companyFormField: document.querySelector(this.selectors.companyFormFieldSelector),
      businessTypeFormField: document.querySelector(this.selectors.businessTypeFormFieldSelector),
      blockDescription: document.querySelector(this.selectors.blockDescriptionSelector),
      recaptcha: document.querySelector(this.selectors.recaptchaSelector),
      registerBtn: document.querySelector(this.selectors.registerBtnSelector),
    };
  },

  getRestNodes: function() {
    this.nodes.emailFormField = document.querySelector(this.selectors.emailFormFieldSelector);
    this.nodes.nameFormField = document.querySelector(this.selectors.nameFormFieldSelector);
    this.nodes.passwordFormField = document.querySelector(this.selectors.passwordFormFieldSelector);
    this.nodes.passwordInput = document.querySelector(this.selectors.passwordInputSelector);

    this.formFirstPart = [
      this.nodes.emailFormField,
      this.nodes.nameFormField,
      this.nodes.passwordFormField
    ];
  },

  applyChangesForInitialState: function() {
    this.formSecondPart = Object.values(this.nodes);

    this.formSecondPart.forEach(function(el) {
      el.style.display = 'none';
    });
  },

  createContinueBtn: function() {
    var _this = this;

    var buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('form-group', 'btn-container');

    var flexDiv = document.createElement('div');
    flexDiv.style.display = 'flex';

    this.nodes.continueBtn = document.createElement('input');
    this.nodes.continueBtn.classList.add(
      'col-lg-12',
      'col-md-12',
      'col-xs-12',
      'col-sm-12',
      'btn',
      'primary-btn',
      'btn-primary',
      'grey-btn',
      'reset-btn',
      'txt-color-black',
      'disabled'
    );
    this.nodes.continueBtn.setAttribute('type', 'submit');
    this.nodes.continueBtn.setAttribute('value', 'Continue');

    flexDiv.append(this.nodes.continueBtn);
    buttonWrapper.append(flexDiv);
    this.nodes.passwordFormField.insertAdjacentElement('afterend', buttonWrapper);

    var cb = function() {
      if (this.classList.contains('disabled')) return;

      this.style.display = 'none';

      _this.formFirstPart.forEach(function(el) {
        el.style.display = 'none';
      });

      _this.formSecondPart.forEach(function(el) {
        el.style.display = 'block';
      });
    };

    this.nodes.continueBtn.addEventListener('click', cb);
  },

  addListenersToFirstPageFormFields: function() {
    var cb = this.checkFieldState.bind(this);

    this.formFirstPart.forEach(function(field) {
      field.addEventListener('change', cb);
    });
  },

  checkFieldState: function(e) {
    var target = e.currentTarget;
    var _this = this;
    var field = target.querySelector('input');

    // Due to error messages will appear after 'change' event is executed
    setTimeout(function() {
      var errorMessages = document.querySelectorAll('.error');

      if (field.value && !errorMessages.length) {
        // TODO: rewrite to switch/case construction
        if (field.classList.contains('emailClass')) {
          _this.config.formFieldsStates.email = true;
        } else if (field.classList.contains('fullNameClass')) {
          _this.config.formFieldsStates.name = true;
        } else if (field.classList.contains('passwordClass')) {
          _this.config.formFieldsStates.password = true;
        }
      } else {
        if (field.classList.contains('emailClass')) {
          _this.config.formFieldsStates.email = false;
        } else if (field.classList.contains('fullNameClass')) {
          _this.config.formFieldsStates.name = false;
        } else if (field.classList.contains('passwordClass')) {
          _this.config.formFieldsStates.password = false;
        }
      }

      _this.config.isCorrectFields = Object.values(_this.config.formFieldsStates).filter(function(el) {
        if (el) return el;
      }).length === _this.config.amoutOfCorrectFields;

      // console.log(_this.config.formFieldsStates);
      // console.log(Object.values(_this.config.formFieldsStates).filter(function(el) {
      //   if (el) return el;
      // }).length);

      if (_this.config.isCorrectFields) {
        _this.nodes.continueBtn.classList.remove('disabled');
      } else {
        _this.nodes.continueBtn.classList.add('disabled');
      }
    });
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getInitialNodes();
      this.applyChangesForInitialState();
      this.getRestNodes();
      this.createContinueBtn();
      this.addListenersToFirstPageFormFields();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getInitialNodes();
        _this.applyChangesForInitialState();
        _this.getRestNodes();
        _this.createContinueBtn();
        _this.addListenersToFirstPageFormFields();
      });
    }
  },
};

UXD544.init();
