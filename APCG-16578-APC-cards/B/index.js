var APCG16578 = {
  config: {
    os: {
      title: 'Operating systems',
      description: 'Linux, Windows',
    },
    productDate: {
      title: 'Updated on',
      updatedDate: '08/19/20',
    }
  },

  cards: {
    powerChute64: 'PowerChute Business Edition v10.0.1 (64 bit systems only)',
  },

  selectors: {
    resultList: '.result-list',
    titles: '.result-list__item-title-text',
    productContent: '.result-list__item-product-content',
    itemTag: '.result-list__item-tag',
    skuNumber: '.result-list__item-sku-number',
  },

  getNodes: function() {
    this.nodes = {
      resultList: document.querySelector(this.selectors.resultList),
    };

    if (this.nodes.resultList) {
      this.nodes.titles = this.nodes.resultList.querySelectorAll(this.selectors.titles);
    }
  },

  searchCards: function() {
    if (this.nodes.titles) {
      this.nodes.titles.forEach(function(title) {
        if (title.innerText === this.cards.powerChute64) {
          var productContent = title.closest(this.selectors.productContent);
          var itemTag = productContent.querySelector(this.selectors.itemTag);
          var skuNumber = productContent.querySelector(this.selectors.skuNumber);

          productContent.removeChild(itemTag);

          var OSContainer = document.createElement('div');
          var OSTitle = document.createElement('span');
          var OSDescription = document.createElement('span');

          OSTitle.textContent = this.config.os.title;
          OSDescription.textContent = this.config.os.description;

          OSContainer.append(OSTitle, OSDescription);

          var productDateContainer = document.createElement('div');
          var productDateTitle = document.createElement('span');
          var productDateDescription = document.createElement('span');

          productDateTitle.textContent = this.config.productDate.title;
          productDateDescription.textContent = this.config.productDate.updatedDate;

          productDateContainer.append(productDateTitle, productDateDescription);

          var wrapper = document.createElement('div');
          wrapper.className = 'apcg-16578-wrapper';
          wrapper.append(OSContainer, productDateContainer);

          skuNumber.insertAdjacentElement('afterend', wrapper);

          var documentsTab = document.createElement('div');
          documentsTab.className = 'apcg-16578-doc-tab';
          documentsTab.textContent = 'Documents';
          wrapper.insertAdjacentElement('afterend', documentsTab);
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