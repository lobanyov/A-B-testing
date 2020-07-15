var UXD542 = {
  selectors: {
    relatedProductsSelector: '.related-products.loaded',
    productWrapper: '#product-datasheet-wrapper',
    documentsAreaSelector: '.pdfs.highlighted-documents__list.inner-wrapper',
    tabsAreaSelector: 'nav.pdp-bar__tabs',
    promotedItemsSelector: '.cloneNode_forCustAlsoBuy .rel-prod-card',
  },

  getNodes: function() {
    this.nodes = {
      relatedProducts: document.querySelector(this.selectors.relatedProductsSelector),
      productWrapper: document.querySelector(this.selectors.productWrapper),
      documentsArea: document.querySelector(this.selectors.documentsAreaSelector),
      tabsArea: document.querySelector(this.selectors.tabsAreaSelector),
    };
  },

  moveSectionDown: function() {
    var relatedProductsClone = this.nodes.relatedProducts && this.nodes.relatedProducts.cloneNode(true);

    if (relatedProductsClone) relatedProductsClone.classList.add('cloneNode_forCustAlsoBuy');
    this.nodes.productWrapper.append(relatedProductsClone);
  },

  getPromotedItems: function() {
    this.nodes.promotedItems = document.querySelectorAll(this.selectors.promotedItemsSelector);
  },

  addClassesToAreas: function() {
    this.nodes.tabsArea.classList.add('UXD-542-clickable-area');
    this.nodes.documentsArea.classList.add('UXD-542-clickable-area');
    this.getPromotedItems();

    this.nodes.promotedItems.forEach(function(el) {
      el.classList.add('UXD-542-clickable-promoted-area');
    });
  },

  applyStyles: function() {
    var relatedProducts = document.querySelector('.related-products.loaded');
    var clonedRelatedProducts = document.querySelector('.related-products.loaded.cloneNode_forCustAlsoBuy');

    relatedProducts.style.display = 'none';
    clonedRelatedProducts.style.display = 'block';
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.moveSectionDown();
      this.addClassesToAreas();
      this.applyStyles();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.moveSectionDown();
        _this.addClassesToAreas();
        _this.applyStyles();
      });
    }
  },
};

UXD542.init();
