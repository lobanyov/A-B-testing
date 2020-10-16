var UXD570 = {
  config: {
    brandsImgURL: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/SE_small.svg',
    brandsLogosURLs: {
      schneider: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/Schneider.svg?token=AMWUZCIANVSQTOLCGTEHAAC7RGEQM',
      apc: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/APC.svg',
      squared: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/Square_D.svg?token=AMWUZCP7NTLCZPMBGNPXVNC7RGEUQ',
      asco: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/ASCO.svg?token=AMWUZCPLDEOPL6F6N6XPPYK7RGEVU',
    },
    brandsURLs: [
      '#',
      'https://www.apc.com/in/en/',
      'https://www.se.com/us/en/brands/squared/',
      'https://www.ascopower.com/in/en/'
    ],
  },

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

    fetch(this.config.brandsImgURL)
      .then(function(res) {
        return res.blob();
      })
      .then(function(src) {
        var brandsLogo = document.createElement('img');
        var objURL = URL.createObjectURL(src);

        brandsLogo.src = objURL;
        brandsButton.prepend(brandsLogo);
      });
  },

  createBrandsTab: function() {
    var _this = this;

    var brandsTab = document.createElement('ul');
    brandsTab.className = 'uxd-570-brands-tab';

    Promise.all([
      fetch(this.config.brandsLogosURLs.schneider),
      fetch(this.config.brandsLogosURLs.apc),
      fetch(this.config.brandsLogosURLs.squared),
      fetch(this.config.brandsLogosURLs.asco)
    ]).then(function(responses) {
      Promise.all(
        responses.map(function(res) {
          return res.text();
        })
      ).then(function(svgs) {
        svgs.forEach(function(svg, i) {
          var brandTile = document.createElement('li');
          brandTile.className = 'uxd-570-brand-tile';
          var link = document.createElement('a');
          link.href = _this.config.brandsURLs[i];

          link.insertAdjacentHTML('afterbegin', svg);
          brandTile.append(link);
          brandsTab.append(brandTile);
        });
      });
    });

    this.nodes.headerMetabar.append(brandsTab);
  },

  applyChanges: function() {
    this.createMetabarItem();
    this.createBrandsTab();
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
