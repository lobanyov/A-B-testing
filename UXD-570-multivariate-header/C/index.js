var UXD570 = {
  config: {
    isMobileSearchSet: false,
    inputPlaceholder: 'Search on se.com',
    brandsImgURL: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/SE_small.svg',
    brandsLogosURLs: {
      schneider: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/Schneider.svg?token=AMWUZCIANVSQTOLCGTEHAAC7RGEQM',
      apc: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/APC.svg',
      squared: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/Square_D.svg?token=AMWUZCP7NTLCZPMBGNPXVNC7RGEUQ',
      asco: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/UXD-570-multivariate-header/C/assets/ASCO.svg?token=AMWUZCPLDEOPL6F6N6XPPYK7RGEVU',
    },
    brandsURLs: [
      '',
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
    brandsTab: '.uxd-570-brands-tab',
    brandsMetabar: '.sdl-header-se_metabar-site-info-cd:nth-child(2)',
    formInput: '.sdl-header-se_search-bar > input',
    headerSearch: '.sdl-header-se_main',
    closeNavBtn: '.js-header-mob-nav-btn-close',
    desktopMetabarWrapper: '.sdl-header-se_metabar-wrap',
    desktopMegamenuWrapper: '.sdl-header-se_mm-wrap',
    schneiderLogoContainer: '.sdl-header-se_content > .se-col-md-3',
    desktopHeaderSearch: '.sdl-header-se_search',
    mobileMetabar: '.sdl-header-se_mob-nav-metabar-site-info.js-metabar-site-info',
  },

  getNodes: function() {
    this.nodes = {
      headerContent: document.querySelector(this.selectors.headerContent),
      headerNav: document.querySelector(this.selectors.headerNav),
      headerMetabar: document.querySelector(this.selectors.headerMetabar),
      metabarBtn: document.querySelector(this.selectors.metabarBtn),
      arrowIcon: document.querySelector(this.selectors.arrowIcon),
      formInput: document.querySelector(this.selectors.formInput),
      headerSearch: document.querySelector(this.selectors.headerSearch),
      closeNavBtn: document.querySelector(this.selectors.closeNavBtn),
      mobileMetabar: document.querySelector(this.selectors.mobileMetabar),
      desktopMetabarWrapper: document.querySelector(this.selectors.desktopMetabarWrapper),
      desktopMegamenuWrapper: document.querySelector(this.selectors.desktopMegamenuWrapper),
      schneiderLogoContainer: document.querySelector(this.selectors.schneiderLogoContainer),
      desktopHeaderSearch: document.querySelector(this.selectors.desktopHeaderSearch),
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

    document.addEventListener('click', function(e) {
      var tab = document.querySelector(this.selectors.brandsTab);
      if (e.target.closest(this.selectors.brandsMetabar)) return;

      if (!e.target.closest(this.selectors.brandsTab) && tab.classList.contains('open')) {
        tab.classList.remove('open');
        metabarItem.classList.remove('active');
      }
    }.bind(this));

    metabarItem.addEventListener('click', function(e) {
      e.currentTarget.classList.toggle('active');

      var tab = document.querySelector(this.selectors.brandsTab);
      tab.classList.toggle('open');
    }.bind(this));

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

        var mobileMetabarItem = metabarItem.cloneNode(true);
        this.nodes.mobileMetabar.append(mobileMetabarItem);

        mobileMetabarItem.addEventListener('click', function() {
          this.nodes.brandsList.style.display = 'block';
        }.bind(this));
      }.bind(this));
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
          if (!i) brandTile.classList.add('selected');
          
          var link = document.createElement('a');
          link.href = _this.config.brandsURLs[i];

          link.insertAdjacentHTML('afterbegin', svg);
          brandTile.append(link);
          brandsTab.append(brandTile);

          // Put into mobile navigation
          var mobileBrandTile = brandTile.cloneNode(true);
          _this.nodes.brandsList.append(mobileBrandTile);
        });
      });
    });

    this.nodes.headerMetabar.append(brandsTab);
  },

  applyChangesForDesktop: function() {
    this.createMetabarItem();
    this.createBrandsTab();

    this.nodes.formInput.placeholder = this.config.inputPlaceholder;
  },

  replaceCloseButtonOnMobileView: function() {
    var mobileNavigation = document.querySelector('.sdl-header-se_mob-nav-main');
    mobileNavigation.append(this.nodes.closeNavBtn);
  },

  createMobileBrandsTab: function() {
    var wrapper = document.createElement('div');
    wrapper.className = 'uxd-570-brands-tab-wrapper';

    var title = document.createElement('p');
    title.className = 'uxd-570-brands-title';
    title.textContent = 'Our brands';

    this.nodes.brandsList = document.createElement('ul');
    this.nodes.brandsList.className = 'uxd-570-brands-list';

    var controlItem = document.createElement('li');
    controlItem.className = 'uxd-570-control-item';

    var closeBtn = this.nodes.closeNavBtn.cloneNode(true);
    var arrowIcon = this.nodes.arrowIcon.cloneNode(true);

    var title = document.createElement('span');
    title.className = 'uxd-570-control-title';
    title.textContent =  'Our brands';

    controlItem.append(arrowIcon, title, closeBtn);
    this.nodes.brandsList.append(controlItem);

    var navigation = document.querySelector('.sdl-header-se_mob-nav-main');
    navigation.append(this.nodes.brandsList);

    closeBtn.addEventListener('click', function() {
      this.nodes.closeNavBtn.click();
      this.nodes.brandsList.style.display = 'none';
    }.bind(this));

    arrowIcon.addEventListener('click', function() {
      this.nodes.brandsList.style.display = 'none';
    }.bind(this));
  },

  moveElementsInMobileView: function() {
    var isMobileWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 720;

    if (isMobileWidth && !this.config.isMobileSearchSet) {
      var container = document.querySelector('.sdl-header-se_wrap > .se-container');
      container.insertAdjacentElement('afterend', this.nodes.headerSearch);

      this.config.isMobileSearchSet = true;
    } else if (!isMobileWidth && this.config.isMobileSearchSet) {
      var navigation = document.querySelector('.sdl-header-se_btn-nav-wrap');
      navigation.insertAdjacentElement('afterend', this.nodes.headerSearch);

      this.config.isMobileSearchSet = false;
    }
  },

  addClassesForMetrics: function() {
    this.nodes.desktopMetabarWrapper.classList.add('uxd-570-zone-1');
    this.nodes.desktopMegamenuWrapper.classList.add('uxd-570-zone-2');
    this.nodes.schneiderLogoContainer.classList.add('uxd-570-zone-2');
    this.nodes.desktopHeaderSearch.classList.add('uxd-570-zone-3');

    // add for mobile metbar
    var mobileMetabar = document.querySelector('.sdl-header-se_mob-nav-metabar');
    var mobileNavigation = document.querySelector('.sdl-header-se_mob-nav-l1-list');
    mobileMetabar.classList.add('uxd-570-zone-1');
    mobileNavigation.classList.add('uxd-570-zone-2');
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.applyChangesForDesktop();
      this.moveElementsInMobileView();
      this.replaceCloseButtonOnMobileView();
      this.createMobileBrandsTab();
      this.addClassesForMetrics();

      window.addEventListener('resize', this.moveElementsInMobileView.bind(this));
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.applyChangesForDesktop();
        _this.moveElementsInMobileView();
        _this.replaceCloseButtonOnMobileView();
        _this.createMobileBrandsTab();
        _this.addClassesForMetrics();

        window.addEventListener('resize', _this.moveElementsInMobileView.bind(_this));
      });
    }
  },
};

UXD570.init();
