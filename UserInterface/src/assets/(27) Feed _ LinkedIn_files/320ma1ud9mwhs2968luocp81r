/**
 * Self invoked function to set appropriate theme light/dark mode for embedli components
 */
'use strict';

(function handleDarkMode() {
  // Theme Values
  var THEME_DARK = 'dark';

  // Query and Cookie Param
  var LI_THEME = 'li_theme';

  /** Creates an object of Query params passed in the URL and returns the required Value
   *
   * @param string paramKey
   * @returns Value of the Query param passed, undefinded if not found
   */
  function getQueryParam() {
    var paramKey = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(paramKey);
  }

  /**
   * Parses theme cookie value from the document cookie string.
   *
   * @return {String|null} value of the cookie or null
   */
  function getThemeCookieValue() {
    var cookie = document.cookie.split('; ').find(function (row) {
      return row.startsWith('li_theme=');
    });
    var result = null;

    if (cookie) {
      result = cookie.split('=')[1];
    }

    return result;
  }

  /** Adds and removes the theme value based on the `toggleTheme` flag, defaults to true, addTheme
   *  `true`(also default) the class provided in theme is added to the html class list
   *   `false` the class provided in theme is removed from html class list
   * @param document - The document where it is supposed to be added - whole page document or the iframe document
   * @param theme - Theme that needs to be added/removed
   * @param toggleTheme - defaults to true, adds on true, removes on false
   */
  function toggleHTMLTheme(document, theme) {
    var toggleTheme = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    document.documentElement.classList.toggle(theme, toggleTheme);
  }

  /**
   * Checks and returns true/false based on li_theme cookie value.
   * Falls back to query param if cookie not found.
   *
   * Cookie needs to be checked first because query param could be outdated
   * when article content falls back to raw HTML https://jira01.corp.linkedin.com:8443/browse/PUBLISHING-14919
   *
   * @return {Boolean} True if dark mode enabled via cookie or query param, else false
   */
  function isDarkModeEnabled() {
    var theme = getThemeCookieValue();

    if (theme) {
      // Logic to determine the dark mode when the li_theme cookie is set to "system"
      if (theme === 'system') {
        var darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Event listener to respond to the device theme change action
        darkThemeMediaQuery.addEventListener('change', function (e) {
          toggleHTMLTheme(document, 'theme--dark', e.matches);
        });

        return darkThemeMediaQuery.matches;
      }
      return theme === THEME_DARK;
    }

    return getQueryParam(LI_THEME) === THEME_DARK;
  }

  toggleHTMLTheme(document, 'theme--dark', isDarkModeEnabled());
})();