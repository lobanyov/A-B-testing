var APCG16578 = {
  cards: {
    pdfIcon: 'https://raw.githubusercontent.com/lobanyov/A-B-testing/master/APCG-16578-APC-cards/B/assets/pdf.png',
    SFPCBE1001: {
      title: 'PowerChute Business Edition v10.0.1 (64 bit systems only)',
      links: [
        'https://download.schneider-electric.com/files?p_File_Name=PMAR-9BUL4B_R2_EN.pdf&p_Doc_Ref=SPD_PMAR-9BUL4B_EN&p_enDocType=User%20guide',
        'https://download.schneider-electric.com/files?p_File_Name=CCON-AT5LBB_R1_EN.pdf&p_Doc_Ref=SPD_CCON-AT5LBB_EN&p_enDocType=User%20guide',
        'https://download.schneider-electric.com/files?p_File_Name=PMAR-935CKU_R2_EN.pdf&p_Doc_Ref=SPD_PMAR-935CKU_EN&p_enDocType=User%20guide',
        'https://download.schneider-electric.com/files?p_File_Name=CCON-AT5KYC_R1_EN.pdf&p_Doc_Ref=SPD_CCON-AT5KYC_EN&p_enDocType=User%20guide',
        'https://download.schneider-electric.com/files?p_File_Name=PMAR-9BULAD_R2_EN.pdf&p_Doc_Ref=SPD_PMAR-9BULAD_EN&p_enDocType=User%20guide',
        'https://download.schneider-electric.com/files?p_File_Name=CCON-AT6CWT_R1_EN.pdf&p_Doc_Ref=SPD_CCON-AT6CWT_EN&p_enDocType=User%20guide',
        'https://download.schneider-electric.com/files?p_File_Name=CCON-B3MKHZ_R0_EN.pdf&p_Doc_Ref=SPD_CCON-B3MKHZ_EN&p_enDocType=User%20guide',
        'https://download.schneider-electric.com/files?p_File_Name=CCON-B2CCXK_R0_EN.pdf&p_Doc_Ref=SPD_CCON-B2CCXK_EN&p_enDocType=User%20guide',
        'https://download.schneider-electric.com/files?p_File_Name=PowerChute_Business_Edition_10.0.1_Compatibility_Chart.pdf&p_Doc_Ref=SPD_ASTE-6Z5QEV_EN&p_enDocType=User%20guide'
      ],
      linkTitles: [
        'PowerChute Business Edition v10.0.1 - Installation Guide',
        'PowerChute Business Edition v10.0.1 - Simple Signaling User Guide',
        'PowerChute Business Edition v10.0.1 - Using ESXi with PowerChute Business Edition',
        'PowerChute Business Edition v10.0.1 - Type B User Guide',
        'PowerChute Business Edition v10.0.1 - Type A User Guide',
        'PowerChute Business Edition v10.0.1 - Release Notes',
        'PowerChute Business Edition - UPSSleep User Guide',
        'Integration of PowerChute Business Edition with EcoStruxure IT',
        'PowerChute Business Edition Operating System, Processor and JRE Compatibility Chart'
      ],
      docTypes: [
        'Installation Guide',
        'PDF',
        'PDF',
        'PDF',
        'PDF',
        'PDF',
        'PDF',
        'PDF',
        'PDF'
      ],
      os: {
        title: 'Operating systems',
        description: 'Linux, Windows',
      },
      productDate: {
        title: 'Updated on',
        updatedDate: '08/19/20',
      }
    },
    SFPCBE95: {
      title: 'PowerChute Business Edition v9.5 (32 bit systems only)',
      links: [
        'https://download.schneider-electric.com/files?p_File_Name=CCON-B2CCXK_R0_EN.pdf&p_Doc_Ref=SPD_CCON-B2CCXK_EN&p_enDocType=User%20guide',
        'http://www.apc.com/salestools/CCON-AT5LBB/CCON-AT5LBB_R0_EN.pdf',
        'http://www.apc.com/salestools/PMAR-935CKU/PMAR-935CKU_R1_EN.pdf',
        'http://www.apc.com/salestools/CCON-AT5KYC/CCON-AT5KYC_R0_EN.pdf',
        'http://www.apc.com/salestools/PMAR-9BULAD/PMAR-9BULAD_R1_EN.pdf',
        'http://www.apc.com/salestools/CCON-AT6CWT/CCON-AT6CWT_R0_EN.pdf',
        'http://www.apc.com/salestools/PMAR-9BUL4B/PMAR-9BUL4B_R1_EN.pdf',
      ],
      linkTitles: [
        'Integration of PowerChute Business Edition with EcoStruxure IT',
        'PowerChute Business Edition v9.5 - Simple Signaling User Guide',
        'PowerChute Business Edition v9.5 - Using ESXi with PowerChute Business Edition',
        'PowerChute Business Edition v9.5 - Type B User Guide',
        'PowerChute Business Edition v9.5 - Type A User Guide',
        'PowerChute Business Edition v9.5 - Release Notes',
        'PowerChute Business Edition v9.5 - Installation Guide'
      ],
      docTypes: [
        'PDF',
        'PDF',
        'PDF',
        'PDF',
        'PDF',
        'PDF',
        'Installation Guide'
      ],
      os: {
        title: 'Operating systems',
        description: 'Red Hat Enterprise Linux, SUSE Enterprise Linux,\nVMware ESXi, Windows x86/x64',
      },
      productDate: {
        title: 'Updated on',
        updatedDate: '09/11/20',
      }
    }
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

  createNewNodes: function(cardId, title) {
    var productContent = title.closest(this.selectors.productContent);
    var itemTag = productContent.querySelector(this.selectors.itemTag);
    var skuNumber = productContent.querySelector(this.selectors.skuNumber);

    productContent.removeChild(itemTag);

    var OSContainer = document.createElement('div');
    var OSTitle = document.createElement('span');
    var OSDescription = document.createElement('span');

    OSTitle.textContent = this.cards[cardId].os.title;
    OSDescription.textContent = this.cards[cardId].os.description;

    OSContainer.append(OSTitle, OSDescription);

    var productDateContainer = document.createElement('div');
    var productDateTitle = document.createElement('span');
    var productDateDescription = document.createElement('span');

    productDateTitle.textContent = this.cards[cardId].productDate.title;
    productDateDescription.textContent = this.cards[cardId].productDate.updatedDate;

    productDateContainer.append(productDateTitle, productDateDescription);

    var wrapper = document.createElement('div');
    wrapper.className = 'apcg-16578-wrapper';
    wrapper.append(OSContainer, productDateContainer);

    skuNumber.insertAdjacentElement('afterend', wrapper);

    var documentsTab = document.createElement('div');
    var docDescription = document.createElement('span');
    var amountOfDocuments = document.createElement('sup');

    documentsTab.className = 'apcg-16578-doc-tab';
    docDescription.textContent = 'Documentation';
    amountOfDocuments.textContent = this.cards[cardId].links.length.toString();
    documentsTab.append(docDescription, amountOfDocuments);
    wrapper.insertAdjacentElement('afterend', documentsTab);

    var documentsList = document.createElement('ul');
    documentsList.className = 'apcg-16578-doc-list';

    this.cards[cardId].linkTitles.forEach(function(title, i) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      var img = document.createElement('img');
      var docType = document.createElement('span');
      var wrapper = document.createElement('div');

      wrapper.className = 'apcg-16578-doc-wrapper';

      img.src = this.cards.pdfIcon;
      link.textContent = title;
      link.href = this.cards[cardId].links[i];
      link.target = '_blank';
      docType.textContent = this.cards[cardId].docTypes[i];

      wrapper.append(link, docType);
      item.append(img, wrapper);
      documentsList.append(item);
    }.bind(this));

    documentsTab.insertAdjacentElement('afterend', documentsList);
    documentsTab.addEventListener('click', function() {
      this.classList.toggle('open');
    });
    documentsTab.onselectstart = function() { return false; };
  },

  searchCards: function() {
    if (this.nodes.titles) {
      this.nodes.titles.forEach(function(title) {
        if (title.innerText === this.cards.SFPCBE1001.title) {
          this.createNewNodes('SFPCBE1001', title);
        }

        if (title.innerText === this.cards.SFPCBE95.title) {
          this.createNewNodes('SFPCBE95', title);
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