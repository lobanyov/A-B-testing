/* For this experiment will be used a separation by audience
var USA_COUNTRY_CODE = 'US';
var CANADA_COUNTRY_CODE = 'CA';
var UNITED_KINGDOM_COUNTRY_CODE = 'UK';

function getUserCountryCode() {
  var data = JSON.parse(stat_data.get('STATDEMANDBASE'));
  var userCountry = data.country || data.registry_country_code;
  
  return userCountry;
}
*/

function addClassesToButtons() {
  var confirmBtn = document.querySelector('.js-header-banner-btn-add');
  var rejectBtn = document.querySelector('.js-header-banner-btn-confirm');
  
  confirmBtn.classList.add('experiment-UXD-485-confirm-btn');
  rejectBtn.classList.add('UXD-485-reject-btn');
}

if (document.readyState !== 'loading') {
  /* For this experiment will be used a separation by audience
  
  var countryCode = getUserCountryCode();
  
  if (
    countryCode === USA_COUNTRY_CODE ||
    countryCode === CANADA_COUNTRY_CODE ||
    countryCode === UNITED_KINGDOM_COUNTRY_CODE
  ) {
    var countrySelector = document.querySelector('.sdl-header-se_metabar-site-info-cd');
    countrySelector.classList.add('experiment-UXD-485-country-selector');
  }
  
  */
  addClassesToButtons();
} else {
  window.addEventListener('load', function() {
    /*
    var countryCode = getUserCountryCode();
    
    if (
    countryCode === USA_COUNTRY_CODE ||
    countryCode === CANADA_COUNTRY_CODE ||
    countryCode === UNITED_KINGDOM_COUNTRY_CODE
    ) {
      var countrySelector = document.querySelector('.sdl-header-se_metabar-site-info-cd');
      countrySelector.classList.add('experiment-UXD-485-country-selector');
    }
    */
    addClassesToButtons();
  });
}
