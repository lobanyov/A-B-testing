var APCG16578 = {
  cards: {
    SFPCBE1001: {
      title: 'PowerChute Business Edition v10.0.1 (64 bit systems only)',
    },
    SFPCBE95: {
      title: 'PowerChute Business Edition v9.5 (32 bit systems only)',
    }
  },

  selectors: {
    resultList: '.result-list',
    titles: '.result-list__item-title-text',
    productWrapper: '.result-list__item-inner',
    imgLink: '.result-list__item-pic',
    resultTitle: '.result-list__item-title',
    downloadBtn: '.download-btn',
  },

  getNodes: function() {
    this.nodes = {
      resultList: document.querySelector(this.selectors.resultList),
    };

    if (this.nodes.resultList) {
      this.nodes.titles = this.nodes.resultList.querySelectorAll(this.selectors.titles);
    }
  },

  setSpecificClasses: function(element) {
    var productWrapper = element.closest(this.selectors.productWrapper);
    if (productWrapper) {
      var imgLink = productWrapper.querySelector(this.selectors.imgLink);
      var resultTitle = productWrapper.querySelector(this.selectors.resultTitle);
      var downloadBtn = productWrapper.querySelector(this.selectors.downloadBtn);

      imgLink.classList.add('apcg-16578-doc-link');
      resultTitle.classList.add('apcg-16578-doc-link');
      downloadBtn.classList.add('apcg-16578-download-btn');
    }
  },

  searchCards: function() {
    if (this.nodes.titles) {
      this.nodes.titles.forEach(function(title) {
        if (title.innerText === this.cards.SFPCBE1001.title || title.innerText === this.cards.SFPCBE95.title) {
          this.setSpecificClasses(title);
        }
      }.bind(this));
    }
  },

  callMethods: function() {
    this.getNodes();
    this.searchCards();
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.callMethods();
    } else {
      window.addEventListener('load', this.callMethods.bind(this));
    }
  },
 };

 APCG16578.init();