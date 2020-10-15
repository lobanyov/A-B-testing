var UXD570 = {
  selectors: {
    headerContent: '.sdl-header-se_content',
    headerNav: '.sdl-header-se_mm-wrap',
    headerMetabar: '.sdl-header-se_metabar-site-info',
    metabarBtn: '.js-header-metabar-country',
    arrowIcon: '.sdl-header-se_metabar-icon-caret-wrap',
  },

  getNodes: function() {
    this.nodes = {
      headerContent: document.querySelector(this.selectors.headerContent),
      headerNav: document.querySelector(this.selectors.headerNav),
      headerMetabar: document.querySelector(this.selectors.headerMetabar),
      metabarBtn: document.querySelector(this.selectors.metabarBtn),
      arrowIcon: document.querySelector(this.selectors.arrowIcon),
    };
  },

  createMetabarItem: function() {
    var metabarItem = document.createElement('li');
    var brandsButton = document.createElement('button');
    metabarItem.className = 'sdl-header-se_metabar-site-info-cd';

    Array.from(this.nodes.metabarBtn.attributes).forEach(function(key) {
      if (key.name === 'class') {
        brandsButton.classList.add(
          'sdl-header-se_metabar-item',
          'sdl-header-se_metabar-toggle',
          'js-header-metabar-brands'
        );
      } else if (key.name === 'xtm-n') {
        return;
      } else {
        brandsButton.setAttribute(key.name, key.value);
      }
    });


    brandsButton.append(
      document.createElement('span').innerText = 'Our brands',
      this.nodes.arrowIcon.cloneNode(true)
    );
    metabarItem.append(brandsButton);
    this.nodes.headerMetabar.append(metabarItem);
  },

  applyChanges: function() {
    this.createMetabarItem();
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

UXD570.init();
