function displayWindowProperties() {
  console.log("navigator user agent: " + window.navigator.userAgent);
  console.log(
    "width: " + window.screen.width,
    "height: " + window.screen.height
  );
  console.log(
    "href: " + window.location.href,
    "Pathname: " + window.location.pathname
  );
  console.log(window.sessionStorage, window.localStorage);
}

window.addEventListener("DOMContentLoaded", displayWindowProperties());
