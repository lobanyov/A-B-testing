var isBannerWasDisplayed = false;

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function resetNonCustomizedBannerCookie() {
  var date = new Date();
  date.setHours(23, 59, 59, 999);
  date = date.toUTCString();
  document.cookie = 'non_customized_banner=true; expires=' + date + '; path=/;';
}

function customizeBanner() {
  if (getCookie('non_customized_banner')) resetNonCustomizedBannerCookie();

  var banner = document.querySelector('.sdl-header-se_seamless-banner.js-seamless-banner.js-notification-banner');
  var bannerParagraph = document.querySelector('.se-font-text3-0.js-seamless-banner-content-change');
  var closeButton = document.querySelector('.sdl-header-se_seamless-banner-close-btn');
  var confirmButton = document.querySelector('.sdl-header-se_seamless-banner-btn.se-btn-secondary-small-white.js-seamless-banner-btn');
  confirmButton.classList.add('experiment-UXD-484');
  
  confirmButton.addEventListener('click', function() {
    resetNonCustomizedBannerCookie();
  });

  closeButton.addEventListener('click', function() {
    if (getCookie('experiment_484_count') < 3) {
      document.cookie = 'experiment_484_count=' + (+getCookie('experiment_484_count') + 1);
      document.cookie = 'non_customized_banner=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
      isBannerWasDisplayed = true;
      // resetStickyHeaderHeight();
      window.dispatchEvent(new Event('resize'));
    } else {
      document.cookie = 'experiment_484_count=0';
      resetNonCustomizedBannerCookie();
      // resetStickyHeaderHeight();
      window.dispatchEvent(new Event('resize'));
    }
  });

  // resetStickyHeaderHeight();
  banner.classList.remove('open');
  window.dispatchEvent(new Event('resize'));

  document.body.onscroll = function() {
    if (document.documentElement.scrollTop >= 200 && !isBannerWasDisplayed && !getCookie('non_customized_banner')) {
      // setStickyHeaderHeight();
      banner.style.visibility = 'unset';
      bannerParagraph.style.visibility = 'unset';
      banner.classList.add('open');
      window.dispatchEvent(new Event('resize'));
    }
  };
}

if (document.readyState !== 'loading') {
  customizeBanner();
} else {
  window.addEventListener('load', function() {
    customizeBanner();
  });
}

// function setStickyHeaderHeight() {
//   var stickyHeader = document.querySelector('.sdl-header-global.js-sticky.js-header-global');
//   var verticalWidget = document.querySelector('.sdl-application-social-media-share-vertical.sdl-is-two-columns');

//   if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 1200) {
//     stickyHeader.style.height = '219px';
//     verticalWidget.style.top = '219px';
//   } else if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200 &&
//       Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 760) {
//     stickyHeader.style.height = '198px';
//   } else {
//     stickyHeader.style.height = '231px';
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
//      Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 760) {
//     stickyHeader.style.height = '113px';
//   } else {
//     stickyHeader.style.height = '90px';
//   }
// }
