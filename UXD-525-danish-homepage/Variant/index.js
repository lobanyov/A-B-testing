var config = {
  imgSrc: 'https://www.se.com/dk/da/assets/529/media/39068/1200x2/Web1-find_it_fast_IC-1440x702.jpg',

  selectors: {
    titleSectionSelector: '.sdl-heading-section-title-h3',
    titleSelector: '.se-font-title3 > p',
    titleDescriptionSelector: '.sdl-heading-section-title-h3 .se-font-text2-0 > .se-col',
    descriptionLinkSelector: '.sdl-heading-section-title-h3 .se-font-text2-0 > .se-col > a',
    smallSquareImageSelector: '.sdl-content-small-square-image',
    rectangularImageSelector: '.sdl-content-rectangular-image',
  },

  getNodes: function() {
    this.nodes = {
      titleSection: document.querySelector(this.selectors.titleSectionSelector),
      title: document.querySelector(this.selectors.titleSelector),
      titleDescription: document.querySelector(this.selectors.titleDescriptionSelector),
      descriptionLink: document.querySelector(this.selectors.descriptionLinkSelector),
      smallSquareImages: document.querySelectorAll(this.selectors.smallSquareImageSelector),
      rectangularImages: document.querySelectorAll(this.selectors.rectangularImageSelector),
    };
  },

  applyChanges: function() {
    this.nodes.title.textContent = 'Find det, du skal bruge, hurtigt';
    this.nodes.titleDescription.insertAdjacentText(
      'afterbegin', 'Se vores digitale værktøjer og brug mindre tid på at lede efter svar - og mere tid på din virksomhed.'
    );
    this.nodes.descriptionLink.insertAdjacentHTML('beforebegin', '<br>');
    this.nodes.descriptionLink.firstChild.data = 'Læs mere her';
    this.nodes.descriptionLink.title = 'Se alle support';
    this.nodes.descriptionLink.href = 'https://www.se.com/dk/da/work/support/find-it-fast/';
    this.nodes.descriptionLink.classList.add('uxd-525-primary');
    this.nodes.smallSquareImages.forEach(function(img) {
      img.style.display = 'none';
    });
    this.nodes.rectangularImages.forEach(function(img) {
      img.style.display = 'none';
    });

    // Wrap image into link
    var imgLinkWrapper = document.createElement('a');
    var img = document.createElement('img');
    img.src = this.imgSrc;
    imgLinkWrapper.href = this.nodes.descriptionLink.href;
    imgLinkWrapper.title = 'Se alle support';
    img.style.width = '100%';
    img.classList.add('uxd-525-secondary');
    
    imgLinkWrapper.insertAdjacentElement('afterbegin', img);
    this.nodes.titleSection.insertAdjacentElement('afterend', imgLinkWrapper);
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.applyChanges();
    } else {
      window.addEventListener('load', function() {
        this.getNodes();
        this.applyChanges();
      });
    }
  }
};

config.init();
