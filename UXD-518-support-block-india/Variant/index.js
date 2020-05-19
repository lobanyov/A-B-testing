var supportDescriptionContent = [
  'Start Here!',
  'Contact Support',
  'Find a distributor',
  'Browse FAQ',
  'Contact Sales',
];

var supportIconsLinks = [
  'https://www.se.com/in/en/work/support/support-center.jsp',
  'https://www.se.com/in/en/work/support/customer-care/contact-schneider-electric.jsp',
  'https://www.se.com/in/en/locate/36-partner-locator-distributors',
  'https://www.se.com/in/en/faqs/home/',
  'https://www.se.com/in/en/work/support/customer-care/contact-sales.jsp',
];

var supportIconsSVG = [
  '#icon-support-icon-lighting-off',
  '#icon-support-email',
  '#icon-support-pin',
  '#icon-support-segment-education',
];

var supportTextContent = [
  'Find answers now. Search for a solution on your own, or connect with one of our experts.',
  'Reach out to our customer care team for technical support, assistance with complaints and more.',
  'Easily find the nearest Schneider Electric distributor.',
  'Get answers you need by browsing topic-related Frequently Asked Questions (FAQ).',
  'Request a call back here.',
  'From technical support to complete customer service,' +
  ' we care about your business and individual needs. We are there to help you anytime, anywhere.',
];

function createMobileSupportBlock(supportBlock) {
  var mobileSupportBlock = supportBlock.cloneNode(true);
  var mobileItemHelpDescription = mobileSupportBlock.querySelector('.UXD-508-item-help-desc');
  var mobileHelpDescriptionTitle = mobileSupportBlock.querySelector('.UXD-508-title-help-desc');
  var mobileHelpDescriptionSpan = mobileItemHelpDescription.querySelector('span');
  var mobileSupportItems = mobileSupportBlock.querySelectorAll('.UXD-508-support-item');
  mobileHelpDescriptionTitle.style.marginTop = '15px';
  mobileHelpDescriptionSpan.style.marginLeft = '10px';
  mobileHelpDescriptionSpan.style.textAlign = 'center';
  mobileItemHelpDescription.style.cssText = 'display: flex; flex-direction: column; justify-content: center; ' +
    'align-items: center; width: 50%; height: 230px; border-bottom: 1px solid #e7e6e6;'; // border: 1px solid #e7e6e6;
  mobileSupportBlock.style.cssText = 'flex-wrap: wrap; align-items: center; margin-top: 30px; ' +
    'outline: 1px solid #e7e6e6; background: #fff;';
  mobileSupportItems.forEach(function(item, i) {
    item.style.cssText = 'width: 50%; height: 230px; border-bottom: 1px solid #e7e6e6;'; // border: 1px solid #e7e6e6;
    var supportLink = item.querySelector('a');
    supportLink.style.justifyContent = 'center';
    supportLink.style.padding = '0 10px';
    if (
      i === (mobileSupportItems.length - 1) ||
      i === (mobileSupportItems.length - 2)
    ) item.style.borderBottom = 0;

    if (i % 2 === 0) item.style.borderLeft = '1px solid #e7e6e6';
  });

  return mobileSupportBlock;
}

function showSupportBlock(mobile, desktop) {
  if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= 980) {
    mobile.style.display = 'none';
    desktop.style.display = 'flex';
  } else if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 720) {
    mobile.style.display = 'flex';
    desktop.style.display = 'none';
  } else {
    mobile.style.display = 'none';
    desktop.style.display = 'none';
  }
}

function init() {
  var tipsBlock = document.querySelector('.tips-distributor');
  var stickyBar = document.querySelector('.sdl-content-sticky-bar');
  stickyBar.style.display = 'none';

  var fragment = '<li class="UXD-508-item-help-desc">' +
    '<h2 class="UXD-508-title-help-desc">Need help?</h2>' +
    '<span style="color: #333; margin: 10px 10px 10px 0;">' + supportTextContent[5] + '</span>' +
    '</li>';

  var supportBlock = document.createElement('ul');
  supportBlock.classList.add('UXD-508-support-list');
  supportDescriptionContent.forEach(function(el, i) {
    if (i === supportDescriptionContent.length - 1) {
      fragment += 
        '<li class="UXD-508-support-item UXD-508-support-item-last">' +
          '<a class="UXD-508-support-link" href="' + supportIconsLinks[i] +
            '" title="' + supportDescriptionContent[i] + '">' +
            '<img style="width: 40px; height: 40px;' +
            ' filter: invert(49%) sepia(69%) saturate(417%) hue-rotate(153deg) brightness(101%) contrast(94%);"' +
            ' src="https://www.se.com/uk/en/assets/607/media/60884/SE_facts_lightgreen_Headset_1.svg">' +
            '<span style="color: #333; font-weight: bold; text-align: center; margin-top: 10px;">' + el + '</span>' +
            '<span style="color: #333; margin-top: 10px; text-align: center">' + supportTextContent[i] + '</span>' +
          '</a>' +
        '</li>';
    } else {
      fragment += 
        '<li class="UXD-508-support-item">' +
          '<a class="UXD-508-support-link" href="' + supportIconsLinks[i] +
            '" title="' + supportDescriptionContent[i] + '">' +
            '<svg style="width: 40px; height: 40px;"><use xlink:href="' + supportIconsSVG[i] + '"></use></svg>' +
            '<span style="color: #333; font-weight: bold; text-align: center; margin-top: 10px;">' + el + '</span>' +
            '<span style="color: #333; margin-top: 10px; text-align: center">' + supportTextContent[i] + '</span>' +
          '</a>' +
        '</li>';
    }
  });

  supportBlock.insertAdjacentHTML('afterbegin', fragment);

  // Add styles to elements untill the support block is added to DOM tree
  supportBlock.style.cssText = 'display: flex; background: #fff; width: 100%;' +
    ' margin-top: 40px; outline: 1px solid #e7e6e6';
  var itemHelpDescription = supportBlock.querySelector('.UXD-508-item-help-desc');
  var helpDescriptionTitle = supportBlock.querySelector('.UXD-508-title-help-desc');
  var supportItems = supportBlock.querySelectorAll('.UXD-508-support-item');

  itemHelpDescription.style
    .cssText = 'width: 25%; padding-left: 15px; border-right: 1px solid #e7e6e6; display: flex;' +
    ' justify-content: center; flex-direction: column;';
  helpDescriptionTitle.style
    .cssText = 'padding: 0; margin: 0; font-weight: bold;';

  supportItems.forEach(function(item, i) { 
    item.style.cssText= 'width: 196px; border-right: 1px solid #e7e6e6; display: flex;' +
      ' justify-content: space-around; flex-direction: column;';
    if (i === supportItems.length - 1) item.style.borderRight = 0;
    var supportLink = item.querySelector('a');
    supportLink.style.cssText = 'display: flex; flex-direction: column; justify-content: flex-start;' +
      ' align-items: center; width: 100%; height: 100%; padding: 20px 10px 10px';
  });

  var mainSection = document.querySelector('.sdl-main-global');
  var _supportBlockWrapper = '<div class="se-container">' +
      '<div class="se-row">' +
        '<div class="se-col UXD-508">' +
        '</div>' +
      '</div>' +
    '</div>';

  var mobileSupportBlock = createMobileSupportBlock(supportBlock);
  // Add support block within DOM tree
  mainSection.insertAdjacentHTML('afterend', _supportBlockWrapper);
  document.querySelector('.se-col.UXD-508').insertAdjacentElement('afterbegin', mobileSupportBlock);

  var seContainer = document.createElement('div');
  var seRow = document.createElement('div');
  var seCol = document.createElement('div');

  seContainer.className = 'se-container';
  seRow.className = 'se-row';
  seCol.className = 'se-col';

  seContainer.append(seRow);
  seRow.append(seCol);
  seCol.append(supportBlock);

  tipsBlock.insertAdjacentElement('beforebegin', seContainer);

  showSupportBlock(mobileSupportBlock, supportBlock);

  window.onresize = function() {
    showSupportBlock(mobileSupportBlock, supportBlock);
  };
}

if (document.readyState !== 'loading') {
  init();
} else {
  window.addEventListener('load', function() {
    init();
  });
}
