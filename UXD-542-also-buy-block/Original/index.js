var UXD542 = {
  selectors: {
    documentsAreaSelector: '.pdfs.highlighted-documents__list.inner-wrapper',
    tabsAreaSelector: 'nav.pdp-bar__tabs',
    promotedItemsSelector: '.cloneNode_forCustAlsoBuy .rel-prod-card',
  },

  getNodes: function() {
    this.nodes = {
      documentsArea: document.querySelector(this.selectors.documentsAreaSelector),
      tabsArea: document.querySelector(this.selectors.tabsAreaSelector),
      promotedItems: document.querySelectorAll(this.selectors.promotedItemsSelector),
    };
  },

  addClassesToAreas: function() {
    this.nodes.tabsArea.classList.add('UXD-542-clickable-area');
    this.nodes.documentsArea.classList.add('UXD-542-clickable-area');

    this.nodes.promotedItems.forEach(function(el) {
      el.classList.add('UXD-542-clickable-promoted-area');
    });
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.addClassesToAreas();
    } else {
      window.addEventListener('load', function() {
        this.getNodes();
        this.addClassesToAreas();
      });
    }
  },
};

UXD542.init();
