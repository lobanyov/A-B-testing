function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setNonGeoBannerCookie() {
  var date = new Date();
  date.setHours(23, 59, 59, 999);
  date = date.toUTCString();
  document.cookie = 'non_geolocation_banner=true; expires=' + date + '; path=/;';
}

function defineVariables() {
  var COMMENT_NODE_TYPE = 8;
  var BANNER_COMMENT_CONTEXT = ' Seamless Banner ';

  var countrySelector = document.querySelector('.sdl-header-se_metabar-site-info-cd');
  var banner = document.createElement('div');
  var wrapper = document.createElement('div');
  var buttonsWrapper = document.createElement('div');
  var confirmButton = document.createElement('button');
  var rejectButton = document.createElement('button');
  var closeButton = document.createElement('button');
  var crosshair = document.createElement('span');

  var bannerComment = Array.from(document.querySelector('header')
    .childNodes).find(function(el) {
      return el.nodeType === COMMENT_NODE_TYPE && el.data === BANNER_COMMENT_CONTEXT;
    });
  
  confirmButton.textContent = 'Great, take me there';
  rejectButton.textContent = 'I prefer to stay on the global site';
  crosshair.textContent = 'x';
  
  var locationLabel = '[' + getUserCountryCode() + ']';
  var bannerTextContent = '<p class="experiment-UXD-485-paragraph">' +
    'This is the global version of the Schneider Electric site.<br>' +
    'You would have a better chance of finding what you’re looking for on the ' +
    locationLabel +
    ' site.' +
    '</p>';
  
  banner.className = 'experiment-UXD-485-banner';
  wrapper.className = 'experiment-UXD-485-banner-wrapper';
  buttonsWrapper.className = 'experiment-UXD-485-buttons-wrapper';
  confirmButton.className = 'experiment-UXD-485-confirm-btn';
  rejectButton.className = 'experiment-UXD-485-reject-btn UXD-485-reject-btn';
  closeButton.className = 'experiment-UXD-485-close-btn UXD-485-reject-btn';
  crosshair.className = 'experiment-UXD-485-crosshair';
  countrySelector.classList.add('experiment-UXD-485-country-selector');
  
  return {
    banner: banner,
    wrapper: wrapper,
    bannerComment: bannerComment,
    buttonsWrapper: buttonsWrapper,
    confirmButton: confirmButton,
    rejectButton: rejectButton,
    closeButton: closeButton,
    crosshair: crosshair,
    bannerTextContent: bannerTextContent,
  };
}

function addBannerToHeader(elements) {
  /* Add some indentations */
  window.dispatchEvent(new Event('resize'));

  elements.closeButton.append(elements.crosshair);
  elements.banner.insertAdjacentElement('afterbegin', elements.wrapper);
  elements.wrapper.insertAdjacentHTML('afterbegin', elements.bannerTextContent);
  elements.wrapper.insertAdjacentElement('beforeend', elements.buttonsWrapper);
  elements.buttonsWrapper.insertAdjacentElement('beforeend', elements.confirmButton);
  elements.buttonsWrapper.insertAdjacentElement('beforeend', elements.rejectButton);
  elements.wrapper.insertAdjacentElement('beforeend', elements.closeButton);
  elements.bannerComment.after(elements.banner);
}

function addListenersToRejectButtons(elements) {
  var buttons = [
    elements.rejectButton,
    elements.closeButton,
  ];
  
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      var banner = e.currentTarget.closest('.experiment-UXD-485-banner');
      banner.style.display = 'none';
      /* Remove some indentations */
      window.dispatchEvent(new Event('resize'));
      setNonGeoBannerCookie();
    });
  });
}

function addListenerToConfirmButton(elements) {
  elements.confirmButton.addEventListener('click', function(e) {
    if (location.pathname.indexOf('/ww/en/') > -1) {
      var userCountry = getUserCountryCode().toLowerCase();
      var origin = location.origin;
      var search = location.search;
      var path = location.pathname.split('/');
      path[1] = userCountry;
      var pathname = path.join('/');

      fetch(origin + pathname + search)
        .then(function(res) {
          if (res.ok) {
            location.assign(origin + pathname + search);
          } else {
            location.assign(origin + '/' + userCountry + '/en/');
          }
        })
        .catch(function(err) {
          console.warn(err.name + ': ' + err.message);
        });
    }
  });
}

function getUserCountryCode() {
  var data = JSON.parse(stat_data.get('STATDEMANDBASE'));
  var userCountry = data.country || data.registry_country_code;
  
  return userCountry;
}

function initGeoBanner() {
  if (getCookie('non_geolocation_banner')) return;

  var elements = defineVariables();
  addBannerToHeader(elements);
  addListenersToRejectButtons(elements);
  addListenerToConfirmButton(elements);
}

try {
  if (document.readyState !== 'loading') {
    setTimeout(initGeoBanner, 1000);
  } else {
    window.addEventListener('load', function() {
      setTimeout(initGeoBanner, 1000);
    });
  }
} catch(e) {
  console.warn(e.name + ': Failed to load a geo-banner to this page');
}

// var USA_COUNTRY_CODE = 'US';
// var CANADA_COUNTRY_CODE = 'CA';
// var UNITED_KINGDOM_COUNTRY_CODE = 'UK';

// function initGeoBanner() {
//   if (getCookie('non_geolocation_banner')) return;
//   var countryCode = getUserCountryCode();

//   if (
//     countryCode === USA_COUNTRY_CODE ||
//     countryCode === CANADA_COUNTRY_CODE ||
//     countryCode === UNITED_KINGDOM_COUNTRY_CODE
//   ) {
//     var elements = defineVariables();
//     addBannerToHeader(elements);
//     addListenersToRejectButtons(elements);
//     addListenerToConfirmButton(elements);
//   }
// }

// function setStickyHeaderHeight() {
//   var stickyHeader = document.querySelector('.sdl-header-global.js-sticky.js-header-global');
//   var verticalWidget = document.querySelector('.sdl-application-social-media-share-vertical.sdl-is-two-columns');

//   if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 1200) {
//     stickyHeader.style.height = '219px';
//     verticalWidget.style.top = '219px';
//   } else if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200 &&
//       Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 760) {
//     stickyHeader.style.height = '252px';
//   } else if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 760 &&
//       Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 370) {
//     stickyHeader.style.height = '252px';
//   } else {
//     stickyHeader.style.height = '269px';
//   }
// }

// function resetStickyHeaderHeight() {
//   var stickyHeader = document.querySelector('.sdl-header-global.js-sticky.js-header-global');
//   var verticalWidget = document.querySelector('.sdl-application-social-media-share-vertical.sdl-is-two-columns');

//   if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 1200) {
//     stickyHeader.style.height = '134px';
//     if (verticalWidget) {
//       verticalWidget.style.top = '134px';
//     }
//   } else if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200 &&
//     	Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 760) {
//     stickyHeader.style.height = '113px';
//   } else {
//     stickyHeader.style.height = '90px';
//   }
// }